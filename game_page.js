function send() 
{
    Number1 = document.getElementById("number_1").value ;
    Number2 = document.getElementById("number_2").value ;
    actual_answer = parseInt(Number1) * parseInt(Number2);


}

question_number = "<h4>" + Number1 + "X" + Number2 +"</h4>";

input_box = "<br>Answer : <input type='text' id='input_check_box'>";

check_button ="<br><br><button class='btn btn-info'  onclick='check'>CHECK</button>";

row = question_number + input_box + check_button ;

document.getElementById("output").innerHTML = row;

document.getElementById("number1").value="";
document.getElementById("number2").value="";


player1_name = localStorage.getItem("player1_input") ;
player2_name = localStorage.getItem("player2_input") ;
player1_score =0;
player2_score =0;
document.getElementById("player1_name").innerHTML= player1_name + ":";
document.getElementById("player2_name").innerHTML= player2_name + ":";