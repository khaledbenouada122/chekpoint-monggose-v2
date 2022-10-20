const express= require('express')
const router = express.Router()
const contact = require('../model/contact')

router.post("/newContact",(req,res)=>{
    let newContact = new contact(req.body)
    newContact.save((err,data)=>{
        if (err) throw err
        else res.send({msg:"contact added"})
     })
    
})
/* create an table   */ 
  const creer = await router.create([{ name: 'khaled' }, { name: 'wafa' }]);
/* Use model.find() to Search Your Database*/

const findperson = await router.find({name:"khaled"},(req,res)=>{
    if (!findperson){
        res.status(404).json({msg:"error is not valid"})
    }
    else {
        res.status(200).json({msg:"suceesufly finding"})
        }
    })
 .catch((err)=>{
    res.status(400).send(err)})



/* finding ny id */
const findes = await router.findById({ id : id},(res,req)=>{
contact.findById(req.parrams.id)
    .then((findes)=>{
        if (!findes){
            res.status(404).json({msg:" error id is not valid "})
        }
        else { res.status(200).json({msg:"user finded "})}
        
    })
.catch((err)=>{
     res.status(400).send(err)
    })

})

/*updating */
 const updating = router.put("/upadte : id",(req,res)=>{
    contact.findByIdAndUpdate({id:req.params.id},{...req.body},(err,data)=>{
        if (!updating) {
            res.status(400).json({msg:"upadating failed"})
        }
        else{
            res.status(200).json({msg:"upadaing suceesfully "})
        }
    })
    .catch((err)=>{ res.status(err).send(error)

    })
})
/* find by id and remove  */
 const removes = router.findByIdAndRemove(contact_id , (req,res)=>{
    if (!removes) {
        res.status(404).json({msg:"failes operatin"}) }
    else{
        res.status(200).json({msg:"operation sucess"}) } })
.catch((err)=>{
    res.status(err).send({msg:"we have a probleme , try to resolve it :" , err})
})


/*Delete Many Documents with model.remove()*/
const removess = await Character.remove({firsrname: 'khaled'},(res,req)=>{
 if (!removess){
    res.status(404).json({msg:'not yet to remove '})
    }
    else{
        res.status(200).json({msg:'remove was success',firsrname})
    }
})
.catch((err)=>{
    res.status(400).send('you have an errorn try to resolve it :',err)
})


/*  Chain Search Query Helpers to Narrow Search Results */
var queryChain = function(done) {
    var nameTosearch = "khaled";
    contact.find({phonenumber :nameTosearch}).sort({name : "desc"}).limit(2).select("-age").exec((err, data) => {
       if(err) throw (err);
      done(null, data);
    })
  };
  module.exports = router