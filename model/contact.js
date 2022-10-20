const mongoose= require ('mongoose')
const schema = mongoose.Schema()
const contactschema={
    firsrname : String ,
    lastname : String , 
    phoneNumber : Number , 
    email : {
        
        type:String , 
        required : true,
    },
    password : {type : String},
    addess : {
        city : String ,
        code : Number

    }

}
const contact = mongoose.model("contact",contactschema)
module.exports = contact