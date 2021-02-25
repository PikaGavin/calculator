var num1 = 11;
var num2 = 11;
var $screen = $("#screen");
var $number = $(".number");

$number.on('click', function() {
  var numberPressed = $(this).html();
  $screen.append(numberPressed);
    if (num1 == 11) {
    num1 = numberPressed;
  } if else (num2 == 11) {
    num2 = numberPressed;
  }
});

document.getElementById("clear").onclick = function write1()
        {
           document.getElementById("screen").innerHTML = "";
        }
        /*
document.getElementById("num1").onclick = function write1()
    {
           $("#screen").append("1");
    }
document.getElementById("num2").onclick = function write1()
            {
          $("#screen").append("2");
            }
document.getElementById("num3").onclick = function write1()
                {
          $("#screen").append("3");
                }
document.getElementById("num4").onclick = function write1()
                    {
          $("#screen").append("4");
                    }
document.getElementById("num5").onclick = function write1()
                        {
          $("#screen").append("5");
                        }
document.getElementById("num6").onclick = function write1()
                            {
          $("#screen").append("6");
                            }
document.getElementById("num7").onclick = function write1()
                                {
          $("#screen").append("7");
                                }
document.getElementById("num8").onclick = function write1()
                                    {
          $("#screen").append("8");
                                    }
document.getElementById("num9").onclick = function write1()
                                        {
          $("#screen").append("9");
                                        }
document.getElementById("num0").onclick = function write1()
                                                {
          $("#screen").append("0");
                                                }
                                                */
document.getElementById("+").onclick = function write1()
{
          $("#screen").append("+");
          op = "+";
}
document.getElementById("-").onclick = function write1()
{
          $("#screen").append("-");
          op = "-";
}
document.getElementById("x").onclick = function write1()
{
          $("#screen").append("x");
          op = "x";
}
document.getElementById("/").onclick = function write1()
{
          $("#screen").append("/");
          op = "/";
}
document.getElementById("=").onclick = function write1()
{

          $screen.append("=");
          num1 = ParseInt(num1);
          num2 = ParseInt(num2);
          console.log(num1, op, num2);
            if (op == "+") {
              answer = num1 + num2;
            }
            if (op == "-") {
              answer = num1 - num2;
            }
            if (op == "x") {
              answer = num1 * num2
            }
            if (op == "/") {
              answer = num1 / num2
            }
            $screen.append(answer);
            num1 = 11;
            num2 = 11;
};
