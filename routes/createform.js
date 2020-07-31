const router=require('express').Router();
const Form=require('../modules/createform.module');


router.route('/').get((req,res)=>{
    Form.find().then(form=>{
        res.json(form)
    }).catch(e=>console.log('error or database empty'))
})

router.route('/add').post(async (req,res)=>{
   
        const  code=req.body.code;
        const url= req.body.url;
        const time=Number(req.body.time);
    const newForm=  new Form({
        code,
        url,
        time
    })
   await newForm.save()  //.then(()=>res.json('form added')).catch(()=>res.json('error'))
   res.json('form added')
    
})


module.exports=router;
