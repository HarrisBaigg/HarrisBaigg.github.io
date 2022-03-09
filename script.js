
$(window).on("load", start);

function start(){
    $("ul.nav a:first").click();
}

$(document).on("click", "ul.nav a", nav);

function nav(e){
    e.preventDefault();
    var url = $(this).attr("href");
    $("#content").load(url);
    $("ul.nav a").removeClass("active");
    $(this).addClass("active");
}

// Tabs
$(".category-button").click(function() {
    $(".category-button").removeClass("active");
    $(this).addClass("active");
  });
  $(".category-button:eq(0)").addClass('active')
  var $categoryButton = $(".category-button");
  var $pageContent = $(".page-content");
  $(".page-content")
    .hide()
    .first()
    .show();
  $categoryButton.on("click", function(e) {
  var $category = $(this).data("target");
    $pageContent
      .hide()
      .find('img').hide()
      .end()
      .filter("." + $category)
      .show()
      .find('img').fadeIn();
  });
  
  
  

// WHEN LOADING IS FINISHED, TRIGGER "START"
$(window).on("load", start);

function start(){
    $("ul.nav a:first").click();
}

$(document).on("click", "ul.nav a", nav);

function nav(e){
    e.preventDefault();
    var url = $(this).attr("href");
    $("#content").load(url);
    $("ul.nav a").removeClass("active");
    $(this).addClass("active");
}