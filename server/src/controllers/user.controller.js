
import express from "express"
import bodyParser from "body-parser"
import {User} from "../models/user.model.js"
const app = express()

app.use(bodyParser.json())

const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        throw new Error(500, "Something went wrong while generating referesh and access token")
    }
}

const registerUser = async (req, res) => {

    const {fullName, email, username, password } = req.body
    console.log(req.body);
    // console.log(req.files);
    if ([fullName, email, username, password].some((field) => field?.trim() === "")) {
        res.send(400, "All fields are required")
    }

    
    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser) {
        res.send(409, "User with email or username already exists")
    }
   

    const user = await User.create({
        username: username.toLowerCase(),
        email, 
        fullName,
        password,
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        res.send(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        res.send(200, createdUser, "User registered Successfully")
    )

}


const loginUser = async (req, res) =>{
   

    const {email, username, password} = req.body
    console.log(req.body)
    console.log(email);

  
    if (!(username || email)) {
        res.send(400, "username or email is required")
        
    }

    const user = await User.findOne({
        $or: [{username}, {email}]
    })

    if (!user) {
        res.send(404, "User does not exist")
    }

   const isPasswordValid = await user.isPasswordCorrect(password)

   if (!isPasswordValid) {
    throw new res.send(401, "Invalid user credentials")
    }

   const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    
    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json({
        statusCode: 200,
        message: "User logged in successfully",
        data: {
        user: loggedInUser,
        accessToken,
        refreshToken,
        },
    });

}


const logoutUser = async(req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1 // this removes the field from document
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json({statusCode:200, message:"User logged Out"})
}

export {registerUser,loginUser,logoutUser}