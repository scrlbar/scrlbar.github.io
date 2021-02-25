window.onscroll = function () {
           scrollIndicator()          
};
function scrollIndicator() {
           var windowScroll = document.documentElement.scrollTop;
          //  var height =       document.documentElement.clientHeight;
          var hheight = 735;
          //  if (window.matchMedia("(width : 375)")) {
          //           var scroll = (windowScroll/height) * 68.2;
          // }
          //  if (window.matchMedia("(width: 1366px)")) 
          // {
          //            var scroll = (windowScroll/height) * 63.2;
          // }
          // else {
                    var scroll = (windowScroll/hheight) * 62.6;
          // }
           document.getElementById("scrollIndicator").style.width = scroll + "cm";
           console.log(document.getElementById("scrollIndicator").style.width = scroll + "%");
           document.getElementById("circularScrollIndicator").style.height =  100 + "cm";
}
var window;
function Horizontal() {
          Window = window.open(
          "./horizontalScroll.html", "height = 12cm", "width = 30.2cm"
          )
}
function Flow() {
          Window = window.open(
                    "./FlowScroll.html", "_blank", "height = 1rem", "width = 1rem"
          )
}