var React = require('react');
var {Link}=require('react-router');
//var ComposeChildComponent=require('./ComposeChild.js');
var Compose=require('./Compose.js');
//var ComposeGrandChildComponent=require('./ComposeGrandChild.js');
var Nav2ChildComponent = React.createClass({
render: function(){
  return(<div className="container-fluid">
  <ul className="nav navbar-nav navbar-left ">
      <li>
        <Link to="MyGmailData" id="labelclick" className="btn btn-primary">GET</Link>
      </li>
      <li>
           <div className="chk-all">
                  <input type="checkbox" className="mail-checkbox mail-group-checkbox"/>
                      <div className="btn-group">
                          <a data-toggle="dropdown" href="#" className="btn mini all active" aria-expanded="false">
                              All
                              <span className="caret"></span>
                          </a>
                          <ul className="dropdown-menu active">
                              <li><a href="#"> None</a></li>
                              <li><a href="#"> Read</a></li>
                              <li><a href="#"> Unread</a></li>
                          </ul>
                      </div>
            </div>
      </li>
      <li>
            <div className="btn-group">
                <a data-original-title="Refresh" data-placement="top" data-toggle="dropdown" href="#" className="btn mini tooltips"></a>
            </div>
            <div className="btn-group hidden-phone">
                <a data-toggle="dropdown" href="#" className="btn mini blue active" aria-expanded="false">
                    More
                    <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                    <li><a href="#"><i className="fa fa-pencil"></i> Mark as Read</a></li>
                    <li><a href="#"><i className="fa fa-ban"></i> Spam</a></li>
                    <li className="divider"></li>
                    <li><a href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                </ul>
            </div>
        </li>
            <div className="btn-group">
                <a data-toggle="dropdown" href="#" className="btn mini blue active">
                    Move to
                    <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                    <li><a href="#"><i className="fa fa-pencil"></i> Mark as Read</a></li>
                    <li><a href="#"><i className="fa fa-ban"></i> Spam</a></li>
                    <li className="divider"></li>
                    <li><a href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                </ul>
          </div>
    </ul>
    <div className="container-fluid pull-right">
    <ul className="unstyled inbox-pagination pull-left" >

                                <li>
                                    <a className="np-btn" id="paginationleft" href="#"><span className="glyphicon glyphicon-chevron-left  pagination-left"></span></a>
                                </li>
                                <li><span >1-50 of 234</span></li>
                                <li>
                                    <a className="np-btn" href="#" id="paddingright"><span className="glyphicon glyphicon-chevron-right  pagination-right"></span></a>
                                </li>
                                <li>
                                    <a className="np-btn" id="paddingright"><b><i>Vignesh Selvaraj</i></b></a>
                                </li>

                            </ul>
            <div id="profile">

                  <a className="twPc-avatarLink pull-right">
                              <img alt="Mert Salih Kaplan" src="https://pbs.twimg.com/profile_images/378800000352678934/34f9e192635975bf42e534434e2b6273_bigger.jpeg" className="twPc-avatarImg" />
                  </a>

            </div>
        </div>

     </div>

       )
       }
       })
       module.exports = Nav2ChildComponent;
