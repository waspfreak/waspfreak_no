(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $('.materialboxed').materialbox();

      $('.scrollspy').scrollSpy();

    $('.modal-trigger').leanModal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .6, // Opacity of modal background
    in_duration: 300, // Transition in duration
    out_duration: 200, // Transition out duration
  }
);


}); // end of document ready

})(jQuery); // end of jQuery name space
