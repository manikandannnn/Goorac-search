function check_val()
{
 var bad_words=new Array("death","kill","murder");
 var check_text=document.getElementById("text").value;
 var error=0;
 for(var i=0;i<bad_words.length;i++)
 {
  var val=bad_words[i];
  if((check_text.toLowerCase()).indexOf(val.toString())>-1)
  {
   error=error+1;
  }
 }
	
 if(error>0)
 {  alert("Sorry")
setTimeout(function(){
   window.location.reload(1);
}, 300);
 }
 else
 {
  document.getElementById("bad_notice").innerHTML="";
 }
}