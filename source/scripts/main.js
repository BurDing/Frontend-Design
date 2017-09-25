//###################################Slide funtion
var slideIndex = 1;

//The showSlides(n) function code is from https://www.w3schools.com/howto/howto_js_slideshow.asp ##################
function showSlides(n) {
    var slides = document.getElementsByClassName("city");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
//The showSlides(n) function code is from https://www.w3schools.com/howto/howto_js_slideshow.asp ##################

showSlides(slideIndex);
function plusSlides() {
    showSlides(slideIndex += 1);
}
function minusSlides() {
    showSlides(slideIndex -= 1);
}

//getElementsByClassName doesn't work in addEventListener function
document.getElementById("p").addEventListener("click", minusSlides);
document.getElementById("n").addEventListener("click", plusSlides);

//###################################Scroll funtion
window.onscroll = function() {scroll()};
document.getElementById("scroll1").style.background = "grey";

function scroll() {
    var w = window.innerWidth;

    if (document.body.scrollTop < w * 0.5825 && document.body.scrollTop >= 0) {
        document.getElementById("scroll1").style.background = "grey";
        document.getElementById("scroll2").style.background = "white";
        document.getElementById("scroll3").style.background = "white";
    } else if (document.body.scrollTop > w * 0.5825 && document.body.scrollTop < w * 1.0825) {
        document.getElementById("scroll1").style.background = "white";
        document.getElementById("scroll2").style.background = "grey";
        document.getElementById("scroll3").style.background = "white";
    } else {
        document.getElementById("scroll1").style.background = "white";
        document.getElementById("scroll2").style.background = "white";
        document.getElementById("scroll3").style.background = "grey";
    }

    if (document.body.scrollTop >= w * 0.05) {
        //header
        document.getElementById("scrollhead").style.height = "3vw";
        //icon
        document.getElementById("scrollicon").style.height = "2.4vw";
        document.getElementById("scrollicon").style.fontSize = "1.8vw";
        document.getElementById("scrollicon").style.lineHeight = "2.4vw";
        //nav
        var i;
        for (i = 1; i <= 3; i++) {
          document.getElementById("scroll" + i).style.height = "3vw";
          document.getElementById("scroll" + i).style.fontSize = "1.2vw";
          document.getElementById("scroll" + i).style.lineHeight = "3vw";
        }
    } else {
        //header
        document.getElementById("scrollhead").style.height = "5vw";
        //icon
        document.getElementById("scrollicon").style.height = "4vw";
        document.getElementById("scrollicon").style.fontSize = "3vw";
        document.getElementById("scrollicon").style.lineHeight = "4vw";
        //nav
        var i;
        for (i = 1; i <= 3; i++) {
          document.getElementById("scroll" + i).style.height = "5vw";
          document.getElementById("scroll" + i).style.fontSize = "2vw";
          document.getElementById("scroll" + i).style.lineHeight = "5vw";
        }
    }
}

//###################################Smooth Scroll funtion
//intro
document.getElementById("scroll1").addEventListener("click", smooth1);
function smooth1() {
  var w1 = window.innerWidth;
  var nowY1 = window.pageYOffset;
  var speed1 = w1 * 0.003;
  var t1 = setInterval(smoothscroll1, 10);
  var time1 = setTimeout(function () {
    clearInterval(t1);
  }, 1200);
  function smoothscroll1() {
    window.onclick = function(event) {
      if (event.target == document.getElementById("scroll2") || event.target == document.getElementById("scroll3")) {
          clearInterval(t1);
      }
    }
    //bottom
    if (window.pageYOffset === 0) {
      clearInterval(t1);
    } else if (window.pageYOffset > nowY1 / 2) {
      speed1 = speed1 * 1.1;
      window.scrollBy(0,-speed1);
    } else {
      speed1 = speed1 / 1.1;
      window.scrollBy(0,-speed1);
    }
  }
}
//Advise
document.getElementById("scroll2").addEventListener("click", smooth2);
function smooth2() {
  var w2 = window.innerWidth;
  var nowY2 = window.pageYOffset;
  var speed2 =w2 * 0.003;
  var t2 = setInterval(smoothscroll2, 10);
  var time2 = setTimeout(function () {
    clearInterval(t2);
  }, 1200);
  function smoothscroll2() {
    window.onclick = function(event) {
      if (event.target == document.getElementById("scroll3") || event.target == document.getElementById("scroll1")) {
          clearInterval(t2);
      }
    }
    //top part
    if (nowY2 < w2 * 0.5825) {
      if (window.pageYOffset > w2 * 0.5825 + w2 * 0.01) {
        clearInterval(t2);
      } else if (window.pageYOffset < (w2 * 0.5825 + nowY2)/ 2) {
        speed2= speed2 * 1.1;
        window.scrollBy(0,speed2);
      } else {
        speed2 = speed2 / 1.1;
        window.scrollBy(0,speed2);
      }
    }
    //bottom part;
    if (nowY2 > w2 * 0.5825) {
      if (window.pageYOffset < w2 * 0.5825 + w2 * 0.01) {
        clearInterval(t2);
      } else if (window.pageYOffset > (w2 * 0.5825 + nowY2)/ 2) {
        speed2 = speed2 * 1.1;
        window.scrollBy(0,-speed2);
      } else {
        speed2 = speed2 / 1.1;
        window.scrollBy(0,-speed2);
      }
    }
  }
}
//Route
document.getElementById("scroll3").addEventListener("click", smooth3);
function smooth3() {
  var w3 = window.innerWidth;
  var nowY3 = window.pageYOffset;
  var speed3 = w3 * 0.003;
  var t3 = setInterval(smoothscroll3, 10);
  var time3 = setTimeout(function () {
    clearInterval(t3);
  }, 1200);
  function smoothscroll3() {
    window.onclick = function(event) {
      if (event.target == document.getElementById("scroll2") || event.target == document.getElementById("scroll1")) {
          clearInterval(t3);
      }
    }
    //top part
    if (nowY3 < w3 * 1.0825) {
      if (window.pageYOffset > w3 * 1.0825 + w3 * 0.01) {
        clearInterval(t3);
      } else if (window.pageYOffset < (w3 * 1.0825 + nowY3)/ 2) {
        speed3 = speed3 * 1.1;
        window.scrollBy(0,speed3);
      } else {
        speed3 = speed3 / 1.1;
        window.scrollBy(0,speed3);
      }
    }
    //bottom part
    if (nowY3 > w3 * 1.0825) {
      if (window.pageYOffset < w3 * 1.0825 + w3 * 0.01) {
        clearInterval(t3);
      } else if (window.pageYOffset > (w3 * 1.0825 + nowY3)/ 2) {
        speed3 = speed3 * 1.1;
        window.scrollBy(0,-speed3);
      } else {
        speed3 = speed3 / 1.1;
        window.scrollBy(0,-speed3);
      }
    }
  }
}

//###################################Modal function
  //close
  document.getElementById("closemodal1").addEventListener("click", closeit1);
  function closeit1() {
    document.getElementById("modalid1").style.display = "none";
  }
  document.getElementById("closemodal2").addEventListener("click", closeit2);
  function closeit2() {
    document.getElementById("modalid2").style.display = "none";
  }
  document.getElementById("closemodal3").addEventListener("click", closeit3);
  function closeit3() {
    document.getElementById("modalid3").style.display = "none";
  }
  document.getElementById("closemodal4").addEventListener("click", closeit4);
  function closeit4() {
    document.getElementById("modalid4").style.display = "none";
  }
  //open
  document.getElementById("modal1").addEventListener("click", open1);
  function open1() {
    document.getElementById("modalid1").style.display = "block";
  }
  document.getElementById("modal2").addEventListener("click", open2);
  function open2() {
    document.getElementById("modalid2").style.display = "block";
  }
  document.getElementById("modal3").addEventListener("click", open3);
  function open3() {
    document.getElementById("modalid3").style.display = "block";
  }
  document.getElementById("modal4").addEventListener("click", open4);
  function open4() {
    document.getElementById("modalid4").style.display = "block";
  }
