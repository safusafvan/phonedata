const jwt=require("jsonwebtoken")
function protect(req,res,next){

let token;
if (req.headers.authorization &&  req.headers.authorization .startsWith("Bearer")) {
   try{
    console.log(req.headers.authorization.split(" ")[1],"gyudsgysddsuuui");
    token=req.headers.authorization.split(" ")[1] ;
    jwt.verify(token,"sss111")
    next()
   }
  

catch (error){
    console.log();
    res.json("Not authorization,no token")
    console.log(error);
}
}else{
    console.log("no token");
    res.json("no token")
}
}

module.exports= protect