const User=require("../models/user")
exports.playerRegistration=async (req,res)=>{
    const role="player"
 const {firstName,lastName,email,password,dob}=req.body;

  let emailRegisted = await validateEmail(email);
  if (!emailRegisted) {
    return res.status(400).json({
      message: `Email is taken`,
      sucess: false
    });
  }

  //   hashed the password
  const hashed = await bcrypt.hash(userData.password, 12);
  // create a new user
  const newUser = new User({ firstName,lastName,email,password ,hashed,  role,dob });
  await newUser.save();
  return res.status(201).json({
    message: "Hurry ! now you are sucessfully register, Please Login ",
    sucess: true
  });
}


const validateEmail = async email => {
  let emailIsPresent =await User.findOne({ email });
  return emailIsPresent ? false : true;

}
