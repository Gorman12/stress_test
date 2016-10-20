function stress(array) {
  if (array.length <= 3) {
    return "low";
  } else if (array.length <= 7) {
    return "medium";
  } else if (array.length > 7) {
    return "high";
  } else {
    return false;
  }
}


$(document).ready(function() {
  $("form#stress-test").submit(function(event) {
    event.preventDefault();
    $(".results").show();
    var array = [];
    $("input:checkbox[name=genral_stressors]:checked").each(function() {
      var checked = $(this).val();

      array.push(checked);
    });
    $("input:checkbox[name=stress_symptoms]:checked").each(function() {
      var checked = $(this).val();

      array.push(checked);
    })

    var results = stress(array);
    $("#stress-test").hide();
    $(".results").show();
    $(".results").text("your stress level is " + results + ".");

  })
});
