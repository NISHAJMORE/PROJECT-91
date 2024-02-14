function addUser()
{
    document.getElementById("player1_input").value;
    document.getElementById("player2_input").value;
    localStorage.setItem("player1_input", player1_input);
    localStorage.setItem("player2_input", player2_input);

    window.location.replace("game_page.html");
}

