var React = require('react');
var InboxLabel = React.createClass({
componentDidMount:function()
{
  var listid=[];
  var messages=[];
  listid=this.props.ids1;
  for(var i=0;i<listid.length;i++)
  {
  $.ajax({
   url: 'https://www.googleapis.com/gmail/v1/users/sylviaangeline5%40gmail.com/messages/'+listid[i]+'?key={AIzaSyDTFzLzecUeRSFOQcHUnBg17u1NQXxOhs0}',
   dataType: 'json',
   type: 'GET',
   beforeSend: function (request)
   {
     request.setRequestHeader("Authorization", "Bearer "+accessToken);
   },
   success: function(data)
   {
     console.log("data"+data);
    messages.push(data);
   }.bind(this),
   error: function(xhr, status, err) {
     console.error(err.toString());
   }.bind(this)
});
}
},
render: function(){

  return(<div className="container-fluid">
  <table className="table table-inbox table-hover">
                     <tbody>
                       <tr className="unread">
                           <td className="inbox-small-cells">
                               <input type="checkbox" className="mail-checkbox"></input>
                           </td>
                           <td className="inbox-small-cells"><i className="glyphicon glyphicon-star-empty"></i></td>
                           <td className="view-message  dont-show"></td>
                           <td className="view-message "></td>
                           <td className="view-message  inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                           <td className="view-message  text-right"></td>
                       </tr>
                   </tbody>
                   </table>
                   </div>
                 );
                 }
                 });
                 module.exports = InboxLabel;
