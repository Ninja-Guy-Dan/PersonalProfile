  window.onload=function() {
    // get tab info
      var container = document.getElementById("profile_display");
      var contents = document.getElementById("tab_contents");
      var pages = contents.getElementsByClassName("tab_display");
      
    // initialize first tab (general info) as the current tab
      var tab_header = document.getElementById("tab_header_1");
      // get the current tab number
      // spit formating returns{[tab][header][n]}
      var curr_tab = tab_header.id.split("_")[2];

      tab_header.parentNode.setAttribute("data-current",curr_tab);
      // add a class so I know which tab is active
      tab_header.setAttribute("class","active_tab");
      // hide inactive tab contents
      for (var i = 1; i < pages.length; i++) {
         pages.item(i).style.display="none";
      };

      // give tabs the gift of click-events
      var tabs = container.getElementsByTagName("li");
      for (var i = 0; i < tabs.length; i++) {
        tabs[i].onclick=displayTab;
      }
  }

// function is called when a tab is clicked
function displayTab() {
  var curr_tab = this.parentNode.getAttribute("data-current");
  //remove active_tab class and tab display
  document.getElementById("tab_header_" + curr_tab).removeAttribute("class");
  document.getElementById("tab_display_" + curr_tab).style.display="none";

  // spit formating returns{[tab][header][n]}
  var tab_no = this.id.split("_")[2];
  // add active_tab class display new tab
  this.setAttribute("class","active_tab");
  document.getElementById("tab_display_" + tab_no).style.display="block";
  this.parentNode.setAttribute("data-current", tab_no);
}

/*Slideshow design was adapted from http://www.w3schools.com/howto/howto_js_slideshow.asp*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}