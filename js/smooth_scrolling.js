  // <!-- smooth scrolling -->
    $(document).ready(function(){
      // Add scrollspy to <body>
      //$('body').scrollspy({target: ".navbar", offset:1});

      // Add smooth scrolling on all links inside the navbar
      $("#mainNav a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top - 60
          }, 1000, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            //window.location.hash = hash;
          });
        }  // End if
      });
    });
    // <!-- smooth scrolling -->

    // <!-- smooth scrolling ON SLIDER -->
    $(document).ready(function(){
      // Add scrollspy to <body>
      //$('body').scrollspy({target: ".navbar", offset:1});

      // Add smooth scrolling on all links inside the navbar
      $(".marek-string, .anna-string").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = '#box';

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top - 60
          }, 1000, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            //window.location.hash = hash;
          });
        }  // End if
      });
    });
    // <!-- smooth scrolling ON SLIDER-->
