const express = require("express");
const router = express.Router(); 

const {getContact,createContact,UpdateContact,deleteContact} = require("../controller/contact-controller");
const validToken = require("../middleware/tokenHandler");

// router.route("/").get(getContact);
// router.route("/").post(createContact);
// router.route("/:id").put(UpdateContact);
// router.route("/:id").delete(deleteContact);

router.use(validToken) // this is the way u can validate if you have all the protected routes
router.route("/").get(getContact).post(createContact);
router.route("/:id").put(UpdateContact).delete(deleteContact);


// router.route("/:id").delete((req, res) => {
//     res.status(200).json({  Message: `deleting contact details of specific ${req.params.id}`});
// }); // this will runn same just for cleaniness purpose we are crating seperate controller

module.exports = router;
