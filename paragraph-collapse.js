/* crappy code for making google docs paragraphs collapsible*/

var paragraphs = document.getElementsByClassName("kix-paragraphrenderer")

function clickHandler(e){
  var classList = e.target.classList;
  var lines = e.target.parentNode.getElementsByClassName("kix-lineview");
  if (classList.contains("rotated-arrow")){
    classList.remove("rotated-arrow");
    for (var i = 1, len=lines.length; i < len; ++i){
      lines[i].classList.remove("hidden")
    }
  }
  else {
    classList.add("rotated-arrow")
    for (var i = 1, len=lines.length; i < len; ++i){
      lines[i].classList.add("hidden")
    }
  }
}


if(paragraphs != null){
  for (var i = 0, len=paragraphs.length; i < len; ++i) {
    var pgraph = paragraphs[i];

    if (pgraph.childNodes.length > 1 &&  !pgraph.arrow){
      var arrowdiv = document.createElement("div");
      arrowdiv.className += "paragraph-indicator";
      arrowdiv.innerHTML = "&#x25BC";

      pgraph.insertBefore(arrowdiv,pgraph.firstChild);
      arrowdiv.addEventListener('click', clickHandler);
      pgraph.arrow = true;
    }
  }
}
    // for each paragraph, we want to:
      //if there is one line:
        //do nothing
      // if there are more than one lines
        // add an arrow character before the paragraph element
        // add a script so the arrow is clickable to 
            //hide the below lines when toggled
            //show the below lines when toggled

    //fix the cursor issue

// &#9654; Right-pointing arrow
// &#x25BC  down pointing arrow