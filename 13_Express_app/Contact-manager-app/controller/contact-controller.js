// // whenevere we create api method we need to give some lebles

// const aycnHandler = require("express-async-handler") // this will eleminate to write try catch block again and again

// // @desc Gell all contacts
// // @route GET/api/contacts
// // @access public
// const getContact =aycnHandler( async (req, res) => {
//     res.status(200).json({ Message: "Getting all the contacts" });
// })

// // @desc Create new contacts
// // @route POST/api/contacts
// // @access public
// const createContact =aycnHandler( async (req, res) => {
//     const {name, email,phone} = req.body;
//     if(!name || !email || !phone){
//         res.status(400)
//         throw new Error("Request body is empty") // this error is in the form of html not in json for this we need middleware
//     }else{
//         console.log(`This is comming form reques body:`, req.body);
//     }
//     res.status(200).json({ Message: "create contect" });
// })

// // @desc Update contacts id
// // @route PUT/api/contacts
// // @access public
// const UpdateContact =aycnHandler( async (req, res) => {
//     res.status(200).json({ Message: `updating contact details of specific ${req.params.id}`  });
// })

// // @desc Delete contacts id
// // @route DELETE/api/contacts
// // @access public
// const deleteContact =aycnHandler( async (req, res) => {
//     res.status(200).json({  Message: `deleting contact details of specific ${req.params.id}`});
// })

// module.exports = {getContact,createContact,UpdateContact,deleteContact}







//With database: 
const Contact = require("../models/contact_model")

const aycnHandler = require("express-async-handler") // this will eleminate to write try catch block again and again

// @desc Gell all contacts
// @route GET/api/contacts
// @access public
const getContact =aycnHandler( async (req, res) => {
    const contact =await Contact.find();
    res.status(200).json(contact);
})

// @desc Create new contacts
// @route POST/api/contacts
// @access public
const createContact =aycnHandler( async (req, res) => {
    const {name, email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(404)
        throw new Error("Request body is empty") // this error is in the form of html not in json for this we need middleware
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    })
    res.status(200).json(contact);
})

// @desc Update contacts id
// @route PUT/api/contacts
// @access public
const UpdateContact =aycnHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404)
        throw new Error("Request body is empty")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json(updatedContact);
})

// @desc Delete contacts id
// @route DELETE/api/contacts
// @access public
const deleteContact =aycnHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    
    await contact.deleteOne() 
    res.status(200).json({ message: "Contact deleted successfully", deletedContact: contact });
})

module.exports = {getContact,createContact,UpdateContact,deleteContact}