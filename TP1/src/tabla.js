let filtro=document.getElementById("filtro");

filtro.addEventListener("submit",(e)=>{
    e.preventDefault();
    filtrarUsuarios();
})

window.onload = async () => {
    const res = await fetch(`http://168.194.207.98:8081/tp/lista.php?action=BUSCAR`)
    let usuarios = await res.json();

    let tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML += `
    <table id="tabla">
    <thead>
        <th>Id</th>
        <th>Usuario</th>
        <th>Bloqueado</th>
        <th>Apellido</th>
        <th>Nombre</th>
        <th>Bloqueado</th>
        <th>Desbloqueado</th>
    </thead>
    <tbody id="tablaBody">
    ${crearFilasUsuarios(usuarios)}
    </tbody>
</table>`
}

const crearFilasUsuarios =  (usuarios) => {
    let filas = "";
    usuarios.forEach(usuario => {
         filas += `
        <tr id="tr${usuario.id}" style=${usuario.bloqueado==='N'? "background:#cef8c6":"background:#fd9f8b"}>
        <td>${usuario.id}</td>
        <td>${usuario.usuario}</td>
        <td>${usuario.bloqueado}</td>
        <td>${usuario.apellido}</td>
        <td>${usuario.nombre}</td>
        <td><button class="btnBlocked" onClick=bloquear(${usuario.id})>Bloquear</button></td>
        <td><button class="btnNonBlocked" onClick=desbloquear(${usuario.id})>Desbloquear</button></td>
        `
    });
    return filas;
}


async function filtrarUsuarios() {
    
    let filtro=document.getElementById("filtroValue").value;
    const res = await fetch(`http://168.194.207.98:8081/tp/lista.php?action=BUSCAR&usuario=${filtro}`)
    let usuarios = await res.json();

    if(usuarios.length>0){
        let tableContainer = document.getElementById("tableContainer");

        tableContainer.innerHTML = `
        <table id="tabla">
        <thead>
            <th>Id</th>
            <th>Usuario</th>
            <th>Bloqueado</th>
            <th>Apellido</th>
            <th>Nombre</th>
        </thead>
        <tbody id="tablaBody">
        ${crearFilasUsuarios(usuarios)}
        </tbody>
    </table>`
    }else{
        alert("No se encuentran usuarios con ese filtro de busqueda")
    }
    
}
async function bloquear(userID){
    
   let response=await fetch(`http://168.194.207.98:8081/tp/lista.php?action=BLOQUEAR&idUser=${userID}&estado=Y`)
   let status=response.status;
   if(status===200){
    let fila=document.getElementById("tr"+userID)
    fila.style.backgroundColor="#fd9f8b"
    fila.childNodes.item(5).textContent="Y";
   }else{
    alert(status)
   }
   
}
async function desbloquear(userID){
    let response =await fetch(`http://168.194.207.98:8081/tp/lista.php?action=BLOQUEAR&idUser=${userID}&estado=N`)
    let status= response.status;
    if(status===200){
        let fila=document.getElementById("tr"+userID)
        fila.style.backgroundColor="#cef8c6"
        fila.childNodes.item(5).textContent="N";
       }else{
        alert(status)
       }
   
    
 }