const { Router } = require('express')
const express=require('express')
const  protect  = require('../../middle/middle')

const { Namephone,Addphone,signupuser, loginuser,homeUser, updateUser,useall,userdatas, deleteUser,Phonedetails,coustomerdetails,adminsignupuser,adminloginuser} = require( "./testcontroller")



const router=express.Router()


router.route("/sign").post(signupuser)
router.route("/log").post(loginuser)
router.route("/home").get(protect,homeUser)
// router.route("/user").put(updateUser)
// router.route("/test").get(usertest)
router.route("/alldata").get(useall)

router.route("/datas").post(userdatas)
router.route("/delete/:anyid").delete(deleteUser)


router.route("/phonedetails").post(Phonedetails)

router.route("/customerdetails").get(coustomerdetails)



router.route("/adminsign").post(adminsignupuser)
router.route("/adminlog").post(adminloginuser)

router.route("/addphone").post(Addphone)

router.route("/phonename").get(Namephone)

router.route("/update").put(updateUser)

module.exports =router;