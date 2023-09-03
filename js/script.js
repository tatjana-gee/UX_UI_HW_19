/*const scriptcopy= document.querySelector (".intro_copy")
scriptcopy.addEventListener("mouseover",()=> {
    scriptcopy.style.visibility="hidden"
    let newscript= document.createElement("p")
    scriptcopy.append(newscript)
    newscript.setAttribute

    ScrollReveal().reveal('.containergrid');
})

  $("quote2").click(function(){
    $(this).hide();

    function doSomething() {
        // Code here
  }*/
    
 //scroll reveal 
    ScrollReveal().reveal('.Tempest');
    ScrollReveal().reveal('.Alls_Well', { delay: 350 });
    ScrollReveal().reveal('.Much_Ado', { delay: 200 });
    ScrollReveal().reveal('.King_Lear', { delay: 400 });
    ScrollReveal().reveal('.Julius_Caesar', { delay: 550 });
    ScrollReveal().reveal('.Richard', { delay: 750 });
    ScrollReveal().reveal('.Comedy', { delay: 720 });

  //beginning of carousel
    let slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
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
//end of carousel

//column reveals
$('.tab').on("click", function(){
  
  if ($(this).hasClass("tab1")){
    $(".tab1").addClass("active");
    $(".tab2").removeClass("active");
    $(".tab3").removeClass("active");
    $(".lady_mac_desc").css("display", "block");
    $(".iago_desc").css("display", "none");
    $(".rich_desc").css("display", "none");
    $(".lady_mac_img").css("display", "block");
    $(".iago_img").css("display", "none");
    $(".rich_img").css("display", "none");
  }
  else if ($(this).hasClass("tab2")){
    $(".tab2").addClass("active");
    $(".tab1").removeClass("active");
    $(".tab3").removeClass("active");
    $(".iago_desc").css("display", "block");
    $(".lady_mac_desc").css("display", "none");
    $(".rich_desc").css("display", "none");
    $(".lady_mac_img").css("display", "none");
    $(".iago_img").css("display", "block");
    $(".rich_img").css("display", "none");
  }
  else if ($(this).hasClass("tab3")){
    $(".tab3").addClass("active");
    $(".tab1").removeClass("active");
    $(".tab2").removeClass("active");
    $(".rich_desc").css("display", "block");
    $(".lady_mac_desc").css("display", "none");
    $(".iago_desc").css("display", "none");
    $(".lady_mac_img").css("display", "none");
    $(".iago_img").css("display", "none");
    $(".rich_img").css("display", "block");
  }

});