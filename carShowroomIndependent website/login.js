function login(){
    player_name = document.getElementById("loginInputCarShowroom").value;

    localStorage.setItem("user_name", player_name);

    window.location = "showroom.html";



}