const mongoose=require('mongoose');


const Schema=mongoose.Schema;

const formSchema= new Schema({
    code:{ type : String, required : true },
    url:{type : String, required : true},
    time:{type:Number , required: true}
});

const Form=mongoose.model('Form',formSchema);

module.exports=Form;