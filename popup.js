document.addEventListener('DOMContentLoaded', function() {
  var checkSearchButton = document.getElementById("searchbutton");
  checkSearchButton.addEventListener('click', function() {
    document.getElementById("searchform").submit();
  });
});