const jump = function() {
  console.log('jump');
  $("#barbarian").addClass("jump");
  setTimeout(function() {
    $("#barbarian").removeClass("jump");
  }, 900);
};

const running = function() {
  console.log('running');
  $('body').addClass('fondo')
  $("#barbarian").addClass("runnerNinja");
};

const running2 = function() {
  console.log('runningIzq');
  $('body').addClass('fondo2')
  $('#barbarian').addClass('runnerNinja2')
}


$('body').keyup(function(e) {
  if (e.keyCode == 32) {
    // user has pressed space
    jump();
  }
});


$('body').keyup(function(a) {
  if (a.keyCode == 39) {
    //user has pressed right arrow
    running();
  }
});

$('body').keyup(function(a) {
  if (a.keyCode == 37) {
    running2();
  }
});
