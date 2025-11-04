
import express from "express"
import bodyParser from "body-parser"
import {User} from "../models/user.model.js"
const app = express()

app.use(bodyParser.json())


const registerUser = async (req, res) => {

    const {fullName, email, username, password } = req.body
    console.log(req.body);
    // console.log(req.files);
    if ([fullName, email, username, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required")
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





export {registerUser}
