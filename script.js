$(document).ready(function () {
  // Fade In Card on page load
  $(".card").fadeIn(1000);

  // Mouse Hover Event to change border color
  $(".card").hover(
      function () {
          $(this).css("border-color", "#3498db");
      },
      function () {
          $(this).css("border-color", "#ddd");
      }
  );

  // Click Event to Toggle Show/Hide Content
  $(".toggle-btn").click(function () {
      var content = $(this).siblings(".content");
      if (content.is(":visible")) {
          content.slideUp(500);
      } else {
          content.slideDown(500);
      }
  });

  // Keyboard Event - Focus input
  $("#inputText").on('focus', function () {
      $(this).css("background-color", "#eaf1f8");
  }).on('blur', function () {
      $(this).css("background-color", "#fff");
  });

  // Form Submit Event
  $("#cardForm").submit(function (event) {
      event.preventDefault(); // Prevent form submission
      var inputText = $("#inputText").val();
      alert("Form Submitted! You typed: " + inputText);
  });

  // Window Resize Event
  $(window).resize(function () {
      console.log("Window resized!");
  });

  // Animation - Apply custom animation to header
  $(".card-header").animate({
      fontSize: "22px",
      padding: "15px"
  }, 500);

  // Delete Card and Alert
  $(".delete-btn").click(function () {
      var confirmDelete = confirm("Are you sure you want to delete this card?");
      if (confirmDelete) {
          $(this).closest(".card").fadeOut(500, function () {
              $(this).remove();
          });
      }
  });
});
