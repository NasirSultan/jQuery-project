$(document).ready(function () {

  $(".card").fadeIn(1000);

 
  $(".card").hover(
      function () {
          $(this).css("border-color", "#3498db");
      },
      function () {
          $(this).css("border-color", "#ddd");
      }
  );

  
  $(".toggle-btn").click(function () {
      var content = $(this).siblings(".content");
      if (content.is(":visible")) {
          content.slideUp(5000);
      } else {
          content.slideDown(500);
      }
  });

  
  $("#inputText").on('focus', function () {
      $(this).css("background-color", "#eaf1f8");
  }).on('blur', function () {
      $(this).css("background-color", "#fff");
  });


  $("#cardForm").submit(function (event) {
      event.preventDefault(); 
      var inputText = $("#inputText").val();
      alert("Form Submitted! You typed: " + inputText);
  });

 
  $(window).resize(function () {
      console.log("Window resized!");
  });

  $(".card-header").animate({
      fontSize: "22px",
      padding: "15px"
  }, 500);

  
  $(".delete-btn").click(function () {
      var confirmDelete = confirm("Are you sure you want to delete this card?");
      if (confirmDelete) {
          $(this).closest(".card").fadeOut(1400, function () {
              $(this).remove();
          });
      }
  });
});
