var React=require('react');
var {render}=require('react-dom');
var ComposeChildComponent=require('./Components/ComposeChild.js');
var MainComponent=React.createClass({
  render:function(){
    return (
  <div>
  <h2>hai</h2>
      <ComposeChildComponent />
  </div>);
  }
})
render(<MainComponent/>,document.getElementById('app'));




var DATA = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

var React = require('react');
var {render} = require('react-dom');
var NavChildComponent = require('./Components/NavChildComponents.js');
var Nav2ChildComponent = require('./Components/Nav2ChildComponent.js');
var ChildHolderComponent = require('./Components/childholder.js');
var MainComponent = React.createClass({
  render: function(){
    return(
      <div>
      <NavChildComponent/>
      <Nav2ChildComponent/>
      <ChildHolderComponent data={this.props.data}/>
      </div>
    );
  }
})
render(<MainComponent data={DATA}/>,document.getElementById('app'));
//render(<MainComponent/>,document.getElementById('app1'));
