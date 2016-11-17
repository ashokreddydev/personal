





  var PARSE_APP="eSHV7WdzInVcImWI9nCwywFydsu9UVP8t1BWPfMj";
  var PARSE_JS="eDzFHgHSeMxiqjdlAba4DFcpvyTAFxh5Q4gl9tyc";
  
  $(document).ready(function(){
    $("#login").click(function(){
        
var user=$("#inputEmail").val();
var pwd=$("#inputPassword").val();
alert(user);
  
  Parse.initialize(PARSE_APP,PARSE_JS);
  var connection = Parse.Object.extend("personal");
var SearchlocQuery = new Parse.Query(connection);
		 SearchlocQuery.equalTo("User",user);
		 SearchlocQuery.find().then(function(result){
			 
			 if(result.length==0)
			 {
				 alert("invalid id")
				 
			 }
			 else{
				 //console.log(result[0].get("User"));
				 if(result[0].get("Password")==pwd)
				 {
					window.open(result[0].get("url"),"_self")
					 
				 }
				 else
				 {
					 alert("password wrong")
					 
				 }
				 
			 }
			 



		}, 
		function(err) {
		console.log(err);
		});
  
      });
});
	