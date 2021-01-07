function StartTimer(){
    var TimeLeft = 59;
    var Timer = setInterval(function(){
    if(TimeLeft <= 0){
      clearInterval(Timer);
    }
    document.getElementById("countdown").innerHTML = TimeLeft;
    TimeLeft -= 1;
    }, 1000);
    }
    function DisableInputs(){
      setTimeout(() => {
          Array.from(document.getElementsByClassName("form-input")).forEach(
    function(element, index, array) 
    {
    element.disabled=true;
    }
    );
    }, 60 * 1000)
    }
    document.getElementById("signin").addEventListener("click", function(){
    Array.from(document.getElementsByClassName("form-input")).forEach(
    function(element, index, array) {
      element.disabled=false; 
    }
    );
    StartTimer();
    DisableInputs();
    });
    StartTimer();
    DisableInputs();
