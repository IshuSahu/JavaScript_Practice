const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'user'
    },
    name:{
        type: String,
        require:[true, "please add the contact name"]
    },
    email:{
        type: String,
        require:[true, "please add the email address"]
    },
    phone:{
        type: String,
        require:[true, "please add mobile number"]
    },
},{
    timestamps: true,
})

module.exports = mongoose.model("contacts", contactSchema)