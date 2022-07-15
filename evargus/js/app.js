$('.review__box').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: 'linear',
    touchMove: true,
  });

function myAlert() {

  document.querySelector('.alert').style.display = "flex";
  document.querySelector('.alert').style.position = "fixed";

  var array = [".header", ".main", ".info", ".review", ".footer"]

  for (let index = 0; index <= array.length; index++) {

    const element = array[index];
    document.querySelector(element).style.filter = "blur(40px)";

  }
}

function myClose() {

  document.querySelector('.alert').style.display = "none";

  var array = [".header", ".main", ".info", ".review", ".footer"]

  for (let index = 0; index <= array.length; index++) {

    const element = array[index];
    document.querySelector(element).style.filter = "blur(0px)";

  }
}


    

  