$(document).ready(function(){
  $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 300) {
        $(".navbar").css("background" , "#20263e");
      }

      else{
          $(".navbar").css("background" , "");  	
      }
  })
})
                    //  motherborads
$(document).ready(function(){
 

  $("#des").click(function(){
    $(".con ").show();
  });
  $("#hide").click(function(){
    $(".con ").hide();
  });
});
                    // cameras

$(document).ready(function(){

$("#des1").click(function(){
  $(".con1 ").show();
});
$("#hide1").click(function(){
  $(".con1 ").hide();
});

});

                    // speakers

$(document).ready(function(){

$("#des2").click(function(){
  $(".con2 ").show();
});
$("#hide2").click(function(){
  $(".con2 ").hide();
});

});

                      // headphone

  $(document).ready(function(){

    $("#des3").click(function(){
      $(".con3 ").show();
    });
    $("#hide3").click(function(){
      $(".con3 ").hide();
    });
    
    });

        // headset

  $(document).ready(function(){

    $("#des4").click(function(){
      $(".con4 ").show();
    });
    $("#hide4").click(function(){
      $(".con4 ").hide();
    });
    
    });

      // laptops

  $(document).ready(function(){

    $("#des5").click(function(){
      $(".con5 ").show();
    });
    $("#hide5").click(function(){
      $(".con5 ").hide();
    });
    
    });




const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
swal("Welcome To pc-center", "...");