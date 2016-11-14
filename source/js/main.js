if (!!$.prototype.justifiedGallery) {  // if justifiedGallery method is defined
  var options = {
    rowHeight: 140,
    margins: 4,
    lastRow: 'justify'
  };
  $('.article-gallery').justifiedGallery(options);
}

$(document).ready(function(){
  $("#menu-icon").click(function(){
    if ( $('#menu').css('visibility') == 'hidden' ) {
      $('#menu').css('visibility','visible');
      $('#menu-icon').addClass('active');

      var topDistance = $("#menu > #nav").offset().top;

      if ( $('#menu').css('visibility') != 'hidden' && topDistance < 50 ) {
        $("#menu > #nav").show();
      } else if ($('#menu').css('visibility') != 'hidden' && topDistance > 100) {
        $("#menu > #nav").hide();
      }
      return false;
    } else {
      $('#menu').css('visibility','hidden');
      $('#menu-icon').removeClass('active');
      return false;
    }
  });

    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  $("#header > #nav > ul > .icon").click(function() {
    $("#header > #nav > ul").toggleClass("responsive");
  });

  if ( $( "#menu" ).length ) {
    $(window).on('scroll', function() {
      var topDistance = $("#menu > #nav").offset().top;

      if ( $('#menu').css('visibility') != 'hidden' && topDistance < 50 ) {
        $("#menu > #nav").show();
      } else if ($('#menu').css('visibility') != 'hidden' && topDistance > 100) {
        $("#menu > #nav").hide();
      }
    });
  }
});
