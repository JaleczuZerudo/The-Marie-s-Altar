const input_welcome = document.getElementById("input_welcome");
const button_continue = document.getElementById("button_continue");

button_continue.addEventListener("click", function() {
    if (input_welcome.value.toLowerCase() === 'marie es nuestra reina'){
        // alert("Bienvenido")
        window.location.href = "welcome_screen.html";
    }
    else {
        // alert("Morirás")
        window.location.href = "dead_screen.html";
    }
});