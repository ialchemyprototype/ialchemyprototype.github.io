// This is a function called on click by the menu button in the html. It toggles
// the menu list between display block and none
function myFunction() {
   var x = document.getElementById("menulist");
   if (x.style.display === "block") {
      x.style.display = "none";
   } else {
      x.style.display = "block";
   }
};

// This makes the page responsive at 1000 pixl width it changes to mobile
function responsive() {
	var wi = $(window).width();

	if (wi <= 999){
		$(".menu").removeClass("menu").addClass("menu-mobile");
		$(".content").removeClass("content").addClass("content-mobile");
		}
	else if (wi >= 1000){
		$(".menu-mobile").removeClass("menu-mobile").addClass("menu");
		$(".content-mobile").removeClass("content-mobile").addClass("content");
		}
};

// This toggles through a set of typefaces for all h1 tags on
// the page when one is clicked
function typetoggle() {
   $("h1").click(function() {
      if ($(this).hasClass( "roboto" )) {
         $("h1").removeClass("roboto").addClass("slab");
      } else if ($(this).hasClass( "slab" )){
         $("h1").removeClass("slab").addClass("chenga");
      } else if ($(this).hasClass( "chenga" )){
         $("h1").removeClass("chenga").addClass("crimson");
      } else if ($(this).hasClass( "crimson" )){
         $("h1").removeClass("crimson").addClass("encode");
      } else if ($(this).hasClass( "encode" )){
         $("h1").removeClass("encode").addClass("open");
      } else if ($(this).hasClass( "open" )){
         $("h1").removeClass("open").addClass("brother");
      } else if ($(this).hasClass( "brother" )){
         $("h1").removeClass("brother").addClass("roboto");
      } else {
         $("h1").removeClass().addClass("roboto");
      }
   })
};

// This toggles any h2 tags to itallics when clicked
function italicstoggle() {
   $("h2").click(function() {
      $(this).toggleClass("italic");
   })
}

$(document).ready(function() {
	responsive();
	$(window).resize(responsive);
   typetoggle();
   italicstoggle();
});

// This controlls the inpage scroll link arrow
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
