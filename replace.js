/*very breakable code for replacing docs link with drive link*/
var oldContainer = document.getElementById("docs-branding-container");

if (oldContainer != null){
  oldContainer.setAttribute("background-color","#A9C8FC");
  var link = oldContainer.childNodes[0];
  link.setAttribute("href", "https://drive.google.com/#my-drive");
  link.setAttribute("title", "Drive Home");
  // link.setAttribute("aria-label", "Drive Home")
  link.childNodes[1].setAttribute("style","background: url(https://ssl.gstatic.com/docs/doclist/images/infinite_arrow_favicon_4.ico) center no-repeat");
} else {
  console.log("couldn't find the link to replace")
}

