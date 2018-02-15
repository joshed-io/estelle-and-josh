$("input[name='rsvp']").on("change", function(event) {
  var rsvp = $("input[name='rsvp']:checked").val();
  if (rsvp === "Yes") {
    $(".you-section, .guest-section, .allergies-section").removeClass("hidden");
  } else {
    $(".guest-section, .allergies-section").addClass("hidden");
    $(".you-section").removeClass("hidden");
  }
});

$("#rsvp-form").on("submit", function(event) {
  event.preventDefault();

  var rsvp = $("input[name='rsvp']:checked").val();
  var youName = $("input[name='you_name']").val();
  var guestName = $("input[name='guest_name']").val();
  var foodAllergies = $("input[name='food_allergies']").val()
  if (!(youName && rsvp)) {
    alert('Please fill out your RSVP and your name in the form!');
    return;
  }

  $.ajax({
    url: "https://hooks.zapier.com/hooks/catch/880865/z60o8j/",
    method: "POST",
    data: {
      rsvp: rsvp,
      you_name: youName,
      guest_name: guestName,
      food_allergies: foodAllergies
    },
    success: function() {
      if (rsvp === "Yes") {
        document.location.href = "/rsvp-yes";
      } else {
        document.location.href = "/rsvp-no";
      }
    }
  });
});
