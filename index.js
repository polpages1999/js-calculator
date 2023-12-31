let ans = "";
let clear = false;
let calc = "";

$(document).ready(function() {
  
  $("button").click(function() {
    let text = $(this).attr("value");
    
    if (parseInt(text, 10) == text || 
        text === "." || 
        text === "/" || 
        text === "*" || 
        text === "-" || 
        text === "+" || 
        text === "%") 
    {
      if (clear === false) {
        calc += text;
        $(".textbox").val(calc);
      } else {
        calc = text;
        $(".textbox").val(calc);
        clear = false;
      }
    } else if (text === "AC") {
      calc = "";
      $(".textbox").val("");
    } else if (text === "CE") {
      calc = calc.slice(0, -1);
      $(".textbox").val(calc);
    } else if (text === "=") {
      ans = eval(calc);
      $(".textbox").val(ans);
      clear = true;
    } else if (text === "And") { 
      calc = $(".textbox").val(); 
      $(".textbox").val(calc); 
      clear=false;
    }
  });
});
