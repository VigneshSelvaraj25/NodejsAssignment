var React = require('react');
var InboxLabel = require('./inbox');
var RightSide = React.createClass({
getInitialState: function() {
  return {data3:[],ids1:[]};
},
componentWillMount: function() {
  var row1=[];
 this.props.data2.forEach(function(msgdetail){
   var ids = msgdetail.messages.id;
   row1.push(ids);
    this.setState({data3:row1});
 });
},
render: function() {
return(
<div>
  <InboxLabel ids1={this.state.data3} />
</div>);
}
});
module.exports=RightSide
