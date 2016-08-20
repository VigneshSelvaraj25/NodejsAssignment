var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bear = require('./../models/bear.js');
mongoose.Promise=global.Promise;
router.route("/emails")

//GET
.get(function(req, res){
 bear.find(function(err, data) {
     if (err)
         res.send(err);
     res.json(data);
 });
})
//POST
.post(function(req, res)
{
  console.log("call");
  console.log(req.body.subject);
  var br = new bear();

        br.from=req.body.from;
        br.subject=req.body.subject;
        br.date=req.body.date;
br.save(function(err,succ){
  console.log("inside save calback");
  if(err){
    console.log("error");
    res.send(err);
  }
  else{
    console.log("success");
    res.send({"response" :"done" });
  }
});
})
//DELETE
.delete(function(req, res)
{
  //var br = new bear();
  bear.remove({_id:req.body.msgId},function(err,emailDeleteById) {
       if (err)
           res.send(err);

   console.log("Mail Deleted");
   });
})
//PUT
.put(function(req,res){
Email.findById({_id:req.body.msgId},function(err,updateEmailById){
if(err){
console.log({response:err});
}
else{
var emailAddress = req.body.Address;
var emailSubject = req.body.Subject;
updateEmailById.msgFromAddress=emailAddress;
updateEmailById.messageSubject=emailSubject;
updateEmailById.save(function(err){
if(err){
res.send({response:err});
}
else{
console.log("updated successfully");
}

});
}
});
});


module.exports=router;
