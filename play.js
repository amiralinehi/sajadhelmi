$(document).ready(function () {
  $(".play").click(function () {
    if ($(this).parent().prev().get(0).paused) {
      $(this).parent().prev().get(0).play();
      $(this).parent().prev().removeClass("blurEffect");
      $(".content").hide();
    }
  });

  $(".video").on("ended", function () {
    $(this).addClass("blurEffect");
    $(".content").show();
  });
});
