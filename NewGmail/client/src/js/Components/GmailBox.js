var React=require('react');
//var ChildGmail=require('./ChildGmail');
//var InboxFolder=require('./InboxFolder.js');
var loggedIn=false;
var GmailBox=React.createClass({
    getInitialState: function() {
      return ({mydata:[]});
    },
    allLabels: function()
    {

      //var that=this;
     var accessToken = localStorage.getItem('gToken');
     $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/vigneshselvaraj25%40gmail.com/messages?key={AIzaSyDDSwQi_4o9S58qyhq4BJtRVJJwH9DzwFM}',
      dataType: 'json',
      type: 'GET',
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      async : false,
       success: function(data)
      {
        //this.setState({allLabelsData:data.labels});
        //console.log(this.state.allLabelsData);
        this.setState({
            mydata:data.messages
        });
         //console.log(data);
         console.log(this.state.mydata);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
   });
 },
gmailLogin: function()
 {
   var acToken, tokenType, expiresIn;
   var OAUTHURL    =   'https://accounts.google.com/o/oauth2/v2/auth?';
   var VALIDURL    =   'https://www.googleapis.com/oauth2/v4/token?access_token=';
   var SCOPE       =   'https://mail.google.com/ https://www.googleapis.com/auth/gmail.readonly';
   var CLIENTID    =   '7758425165-mngktjg0t7hbm2mpldlgej3kiehp61f7.apps.googleusercontent.com';
   var REDIRECT    =   'http://localhost:8080';
   var TYPE        =   'token';
   var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
   var win         =   window.open(_url, "windowname1", 'width=800, height=600');
   var pollTimer   =   window.setInterval(function()
   {
       try
       {
           if (win.document.URL.indexOf(REDIRECT) != -1)
           {
               window.clearInterval(pollTimer);
               var url =   win.document.URL;
               acToken =   gup(url, 'access_token');
               tokenType = gup(url, 'token_type');
               expiresIn = gup(url, 'expires_in');
               localStorage.setItem('gToken',acToken);
               localStorage.setItem('gTokenType',tokenType);
               localStorage.setItem('gExprireIn',expiresIn);
               console.log("gToken.."+localStorage.getItem('gToken'));
               console.log("gTokenType.."+localStorage.getItem('gTokenType'));
               console.log("gExprireIn.."+localStorage.getItem('gExprireIn'));
               function gup(url, name) {
                   name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
                   var regexS = "[\\#&]"+name+"=([^&#]*)";
                   var regex = new RegExp( regexS );
                   var results = regex.exec( url );
                   if( results == null )
                       return "";
                   else
                       return results[1];
               }
               win.close();
           }
       }
       catch(e)
       {
         console.log(e);
       }
   }, 500);
   this.allLabels();
 },
    render : function()
    {

        return (<div>
            <button id="authorize-button" onClick={this.gmailLogin}
            className="btn btn-primary pull-right">Login
            </button>
            <ChildGmail data={this.state.mydata}/>
            </div>
        );
    }
});
module.exports=GmailBox;
