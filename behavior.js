document.addEventListener("DOMContentLoaded", function(event) {
  
    var thumbnailElementone = document.getElementById("smart_thumbnailone");
    var thumbnailElementtwo = document.getElementById("smart_thumbnailtwo");
    var thumbnailElementthree = document.getElementById("smart_thumbnailthree");


    thumbnailElementone.addEventListener("click", function() {

      if (thumbnailElementone.className == "") {
        document.getElementById("tit1").innerHTML = "click to see large";
        thumbnailElementone.className = "small";
      }
      else {
        document.getElementById("tit1").innerHTML = "click again to see small";
        
        thumbnailElementone.className = ""; 

      }

      });

      thumbnailElementtwo.addEventListener("click", function() {

        if (thumbnailElementtwo.className == "") {
        document.getElementById("tit2").innerHTML = "click to see large";

          thumbnailElementtwo.className = "small";
        }
        else {
        document.getElementById("tit2").innerHTML = "click again to see small";

          thumbnailElementtwo.className = ""; 
  
        }
  
        });

        thumbnailElementthree.addEventListener("click", function() {

          if (thumbnailElementthree.className == "") {
        document.getElementById("tit3").innerHTML = "click to see large";

            thumbnailElementthree.className = "small";
          }
          else {
        document.getElementById("tit3").innerHTML = "click again to see small";

            thumbnailElementthree.className = ""; 
    
          }
    
          });

      
});