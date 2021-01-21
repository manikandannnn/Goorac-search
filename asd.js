function result1() {
var a = document.getElementById("text").value;
  var x = document.createElement("EMBED");
  x.setAttribute("src", "https://search.bing.com/search?q=" + a);
  x.height = "600px";
x.width = "100%" ;
  document.body.appendChild(x);

}