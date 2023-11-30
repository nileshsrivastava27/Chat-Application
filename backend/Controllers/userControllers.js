const expressAsyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const generateToken = require("../Config/generateToken");


const registerUser = expressAsyncHandler(async(req, res)=>{

    const {email, name, password} = req.body;

    if(!name || !email || !password)
    {
        res.status(400).json({"msg" : "Please Enter All Details"});
        throw new error("Please Enter All Details");
    }

    const userExists = await User.findOne({email : email});


    if(userExists)
    {
        res.status(400).json({"msg" : "User already exists"});
        throw new error("User already exists");
    }

    const user = {
        name:name,
        email:email,
        password:password
    }
    await User.create(user)

    if(user)
    {
        res.json({
            _id : user._id,
            name : user.name,
            email : user.email,
            token: generateToken(user._id)
        });
    }else{
        res.json({"msg" : "User Fail To Create"});
        // throw new error("Fail to create user");
    }
});


// const authUser = expressAsyncHandler(async(req, res) => {

//     const {email, password} = req.body;

//     const user = await User.findOne({ email });

//     if(user && (await user.matchPassword(password))){
//         res.json({
//             _id : user._id,
//             name : user.name,
//             email : user.email,
//             token: generateToken(user._id)
//         });
//     }
//     else{
//         res.json({"msg" : "Invaild Email and Password"});
//     }
// });

const authUser = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
        res.json({"msg" : "Invaild Email and Password"});
    }
  });
  

module.exports = {registerUser, authUser};