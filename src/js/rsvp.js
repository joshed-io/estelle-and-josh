$("#rsvp-form").on("submit", function(event) {
  console.log("here");
  var youName = $("input[name='you_name']")[0].value;
  var guestName = $("input[name='guest_name']")[0].value;
  var foodAllergies = $("input[name='food_allergies']")[0].value;
  if (!(youName)) {
    alert('Please fill out your name in the form!');
  }

  event.preventDefault();
  $.ajax({
    url: "https://hooks.zapier.com/hooks/catch/880865/z60o8j/",
    method: "POST",
    data: {
      you_name: youName,
      guest_name: guestName,
      food_allergies: foodAllergies
    },
    success: function() {
      document.location.href = "/rsvp/confirmed";
    }
  });
});
