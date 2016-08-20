var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema=new Schema({
  msgFromAddress:String,
  messageSubject:String,
  messageBody:String,
  msgDate:String
});
module.exports= mongoose.model('myuser1',BearSchema, 'myuser1');
