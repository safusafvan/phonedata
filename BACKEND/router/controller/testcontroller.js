const User = require("../../Models/testSchema")
const Details = require("../../Models/userdetailsSchema")
const Admin = require("../../Models/adminschema")
const AddDetails = require("../../Models/addschema")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { find } = require("../../Models/testSchema");





const signupuser = async (req, res) => {
  const { name, email, password } = req.body

  console.log(password, "password");


  const salt = await bcrypt.genSalt(10)
  const hashdpswd = await bcrypt.hash(password, salt)
  console.log(hashdpswd, "hashdpswd");




  //------ imp-------
  const userExist = await User.findOne({ email: email })      //only one email call

  if (userExist) {
    res.json({
      massage: "email already exist",
      isError: true
    }
    );

  } else {

    const userDetails = await User.create({
      name: name,
      email: email,
      password: hashdpswd

    })
    console.log(userDetails);
    res.json({
      id: userDetails.id,
      name: userDetails.name,
      email: userDetails.email,
      password: userDetails.hashdpswd,
      token: genarateToken(userDetails.id)


    })

  }
}



const loginuser = async (req, res) => {
  const { email, password } = req.body


  console.log(email, password);


  if (!email || !password) {                                                          //if(!email || !password){
    res.json({ message: "email or password required", isError: true });
  }
  else {
    const getuser = await User.findOne({ email: email })


    if (getuser && (await bcrypt.compare(password, getuser.password))) {

      res.json({
        id: getuser.id,
        name: getuser.name,
        email: getuser.email,
        password: getuser.hashdpswd,
        token: genarateToken(getuser.id)

      })
    }
    else {
      res.json("login failed")
    }
  }

  // const getlogin = async (req, res) => {
  //     const getlog = await User.findOne({name:"sana"})
  //     res.json(getlog)
  //     console.log(getlog);
  // }


  // const getApiData = async (req, res) => {
  //     const getUser = await User.find({})
  //     res.json(getUser)
  // }

}
const homeUser = (req, res) => {
  res.json("this is home page")
}


//---------token----------------
const genarateToken = (id) => {
  return jwt.sign({ id }, "sss111", { expiresIn: '1d' })
}

// const updateUser = async (req, res) => {
//   const { name, email } = req.body

//   const _id = "63ce46cf6a62bd3d3d015dc2"

//   const updateUser = await User.findByIdAndUpdate(_id, {
//     name, email
//   })
//   res.json(updateUser)
// }






// const usertest =(req,res)=>{
// const array1=[
//   {name:"saju",email:"sanju@gmail.com"},
//   {name:"finu",email:"finu @gmail.com"}
// ]
// res.json(array1)

// }

const useall = async (req, res) => {


  const usealldata = await User.find()
  res.json(usealldata)
}


const userdatas = async (req, res) => {
  const { name, email, password } = req.body
  const datause = await User.create({
    name: name,
    email: email,
    password

  })
  console.log(datause);
  res.json(datause)
}


//-----------------delete-------------


const deleteUser = async (req, res) => {
  const _id = req.params.anyid;
  console.log(_id);
  const deleteduser = await User.findByIdAndDelete(_id);
  res.json("user deleted")
}









// --------phone details----------------------------//



const Phonedetails = async (req, res) => {
  const { firstname, lastname, cityaddress, address2, email, phone, pin, district } = req.body


  {

    const phonedata = await Details.create({
      firstname,
      lastname,
      cityaddress,
      address2,
      email,
      phone,
      pin,
      district




    })
    console.log(phonedata);
    res.json({
      id:phonedata.id,
      firstname: phonedata.firstname,
      lastname: phonedata.lastname,
      cityaddress: phonedata.cityaddress,
      address2: phonedata.address2,
      email: phonedata.name,
      pin: phonedata.pin,
      district: phonedata.district,



    })

  }
}


const coustomerdetails = async (req, res) => {


  const allcustomerdata = await Details.find()
  res.json(allcustomerdata)
}












///------------------------------------------admin side-----------------------------------





const adminsignupuser = async (req, res) => {
  const { name, email, password } = req.body

  console.log(password, "password");


  const salt = await bcrypt.genSalt(10)
  const hashdpswd = await bcrypt.hash(password, salt)
  console.log(hashdpswd, "hashdpswd");




  //------ imp-------
  const userExist = await Admin.findOne({ email: email })      //only one email call

  if (userExist) {
    res.json({
      massage: "email already exist",
      isError: true
    }
    );

  } else {

    const admindetails = await Admin.create({
      name: name,
      email: email,
      password: hashdpswd

    })
    console.log(admindetails);
    res.json({
      id: admindetails.id,
      name: admindetails.name,
      email: admindetails.email,
      password: admindetails.hashdpswd,
      token: genarateToken(admindetails.id)


    })

  }
}



const adminloginuser = async (req, res) => {
  const { email, password } = req.body


  console.log(email, password);


  if (!email || !password) {                                                          //if(!email || !password){
    res.json({ message: "email or password required", isError: true });
  }
  else {
    const loguser = await User.findOne({ email: email })


    if (loguser && (await bcrypt.compare(password, loguser.password))) {

      res.json({
        id: loguser.id,
        name: loguser.name,
        email: loguser.email,
        password: loguser.hashdpswd,
        token: genarateToken(loguser.id)

      })
    }
    else {
      res.json("login failed")
    }
  }
}




// --------------------------------add details--------------------------------------------



const Addphone = async (req, res) => {
  const {Phonename,
    Brand,
    Price,
    Raiting  } = req.body


  {

    const addphone = await AddDetails.create({
      Phonename,
      Brand,
      Price,
      Raiting
     



    })
    console.log(addphone);
    res.json({
      Phonename: addphone.Phonename,
      Brand: addphone.Brand,
      Price: addphone.Price,
      Raiting: addphone.Raiting,
     



    })

  }
}


const Namephone = async (req, res) => {


  const allphonedata = await AddDetails.find()
  res.json(allphonedata)
}




// ---------------------------update---------------------------





const updateUser = async (req, res) => {
  const { _id, Price,Raiting } = req.body
  console.log(_id);

  

  const updateUsers = await AddDetails.findByIdAndUpdate(_id, {
   Price,Raiting
  })
  res.json(updateUsers)
}




module.exports = { signupuser,
   loginuser,
    homeUser, 
    updateUser,
    useall, 
    userdatas,
    deleteUser,
    Phonedetails,
    coustomerdetails,
    adminsignupuser,
    adminloginuser,
    Addphone,
    Namephone,
   }