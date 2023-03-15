const form = document.getElementById("formulario");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    ingresoUsuario();
});


async function ingresoUsuario() {
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    let response = await fetch(`http://168.194.207.98:8081/tp/login.php?user=${user}&pass=${password}`)
    let data = await response.json();
    if (data.respuesta === "OK") {
        console.log("a");
        window.open("http://localhost:5500/lista.html", "_self");
    } else {
        document.getElementById("loginErr") == null ?
            form.innerHTML += `<p id="loginErr">${data.mje}</p>` :
            (document.getElementById("loginErr").remove(),
                form.innerHTML += `<p id="loginErr">${data.mje}</p>`);
    }

}


