
function add() 
{

    if(document.getElementById("first").value=="")
  {
     alert("Please enter a First  Number ...");
	 return;
  }
  if(document.getElementById("second").value=="")
  {
     alert("Please enter a  Second Number ...");
	 return;
  }

    var a = parseInt(document.getElementById("first").value);
    var b =parseInt(document.getElementById("second").value);
    var sum = a + b;
    document.getElementById("answer").value= sum; 
}


function sub() {

    if(document.getElementById("first").value=="")
  {
     alert("Please enter a First  Number ...");
	 return;
  }
  if(document.getElementById("second").value=="")
  {
     alert("Please enter a  Second Number ...");
	 return;
  }

    var a = parseInt(document.getElementById("first").value);
    var b =parseInt(document.getElementById("second").value);
    var minus= a-b;
    document.getElementById("answer").value= minus;
}

function multi() {

    if(document.getElementById("first").value=="")
  {
     alert("Please enter a First  Number ...");
	 return;
  }
  if(document.getElementById("second").value=="")
  {
     alert("Please enter a  Second Number ...");
	 return;
  }


    var a = parseInt(document.getElementById("first").value);
    var b =parseInt(document.getElementById("second").value);
    var multipy = a*b;
    document.getElementById("answer").value= multipy;
}

function divi() {

    if(document.getElementById("first").value=="")
  {
     alert("Please enter a First  Number ...");
	 return;
  }
  if(document.getElementById("second").value=="")
  {
     alert("Please enter a  Second Number ...");
	 return;
  }


    var a = parseInt(document.getElementById("first").value);
    var b = parseInt(document.getElementById("second").value);
    var division = a/b ;
    document.getElementById("answer").value= division;
}

function reset() {
    
    var reset = null ;
    document.getElementById("first").value =  reset;
    document.getElementById("second").value =  reset;
    document.getElementById("third").value =  reset;
    document.getElementById("answer").value =  reset;
}

function prime() {

    if(document.getElementById("third").value=="")
  {
     alert("Please enter the Third Number ...");
	 return;
  }

    var a = document.getElementById("third").value;
    
    document.getElementById("answer").value="";
     for ( var i = 2; i <= a; i++) {
        isPrime = 1;

        for ( var j = 2; j <= i/2; j++) {
            if (i % j == 0) {
                isPrime = 0;
            }
        }

        if(isPrime == 1) {
            //document.write(i+ "<br>") ;
            document.getElementById("answer").value = document.getElementById("answer").value+i+", "
        }
     }

     var ln=document.getElementById("answer").value.length

     document.getElementById("answer").value= document.getElementById("answer").value.substring(2,ln-2)

}