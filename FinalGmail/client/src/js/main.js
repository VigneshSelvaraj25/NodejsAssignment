var React = require('react');
var ReactDOM = require('react-dom');
var {Router,Route,browserHistory}=require('react-router');
var  GmailBox= require('./Components/GmailBox');

ReactDOM.render(<GmailBox/>,document.getElementById('app'));
//render(<MainComponent/>,document.getElementById('app1'));
