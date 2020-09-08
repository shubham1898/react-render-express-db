const mongoose=require('mongoose');


const Schema=mongoose.Schema;

const formSchema= new Schema({
    code: { type: String, required: true },
    url: { type: String, required: true },
    time: { type: Number, required: false },
    month: { type: Number, required: false },
    day: { type: Number, required: false },
    hour: { type: Number, required: false },
    year: { type: Number, required: false },
    min: { type: Number, required: false },
    endmonth: { type: Number, required: false },
    endday: { type: Number, required: false },
    endyear: { type: Number, required: false },
    endhour: { type: Number, required: false },
    endmin: { type: Number, required: false },
    isbytimer: { type: Boolean , required: false }
});

const Form=mongoose.model('Form',formSchema);

module.exports=Form;