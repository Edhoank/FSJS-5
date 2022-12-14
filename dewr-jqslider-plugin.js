$(document).ready(function() {
  $(".next").click(function() {
    var currentImg = $(".active");
    var nextImg = currentImg.next();

    if(nextImg.length) {
      currentImg.removeClass("active").fadeOut(300).css("z-index", "-10");
      nextImg.addClass("active").delay(300).fadeIn(300).css("z-index", "10");
    } else {
    currentImg.removeClass("active").fadeOut(300).css("z-index", "-10");
    $(".first-image").addClass("active").delay(300).fadeIn(300).css("z-index", "10");
  }
    });

    $(".prev").click(function() {
      var currentImg = $(".active");
      var prevImg = currentImg.prev();

      if(prevImg.length){
        currentImg.removeClass("active").fadeOut(300).css("z-index", "-10");
        prevImg.addClass("active").delay(300).fadeIn(300).css("z-index", "10");
      } else {
        currentImg.removeClass("active").fadeOut(300).css("z-index", "-10");
        $(".last-image").addClass("active").delay(300).fadeIn(300).css("z-index", "10");
      }

    });
});