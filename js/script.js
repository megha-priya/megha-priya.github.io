window.addEventListener("load",function(){
    setTimeout(function(){
      var load_screen = document.getElementById("loading");
      document.body.removeChild(load_screen);
    },3000);
    // var load_screen = document.getElementById("loading");
    // document.body.removeChild(load_screen);
  });