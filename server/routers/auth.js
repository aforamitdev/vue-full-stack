const router = require("express").Router();
const {playerRegistration}=require("../controllers/auth")

router.get("/auth/",(req,res)=>{
    return res.json({data:"auth data"})
})


router.post("/auth/players",playerRegistration);


module.exports = router;
