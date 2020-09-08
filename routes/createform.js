const router=require('express').Router();
const Form=require('../modules/createform.module');


router.route('/').get((req,res)=>{
    Form.find().then(form=>{
        res.json(form)
    }).catch(e=>console.log('error or database empty'))
})

router.route('/add').post(async (req,res)=>{
   
    const code = req.body.code;
    const url = req.body.url;
    const time = Number(req.body.time);
    const month = Number(req.body.month);
    const day = Number(req.body.day);
    const hour = Number(req.body.hour);
    const year = Number(req.body.year);
    const min = Number(req.body.min);
    const endmonth = Number(req.body.endmonth);
    const endday = Number(req.body.endday);
    const endyear = Number(req.body.endyear);
    const endhour = Number(req.body.endhour);
    const endmin = Number(req.body.endmin);
    const isbytimer = Boolean(req.body.isbytimer);
    const newForm=  new Form({
        code,
        url,
        time,
        month,
        day,
        hour,
        year,
        min,
        endmonth,
        endday,
        endyear,
        endhour,
        endmin,
        isbytimer
    })
   await newForm.save()  //.then(()=>res.json('form added')).catch(()=>res.json('error'))
   res.json('form added')
    
})
router.route('/exam').post(async(req,res)=>{
    const code=req.body.code;
    Form.findOne({code}).then(body=>{
        res.json(body)
    }).catch(e=>{
   console.log(e)
    })
})


module.exports=router;
