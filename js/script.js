let cronometroId = 0;

function iniciarCronometro() {
    let horas = document.getElementById("horas");
    let minutos = document.getElementById("minutos");
    let segundos = document.getElementById("segundos");
    let decimo = document.getElementById("decimo");

    let h = 0; m = 0; s = 0; d = 0;

    cronometroId = setInterval(function() {

        document.getElementById("btnIniciar").style.display = "none";
        document.getElementById("btnZerar").style.display = "inline";

        horas.innerHTML = h < 10 ? '0' + h : h;
        minutos.innerHTML = m < 10 ? '0' + m : m;
        segundos.innerHTML = s < 10 ? '0' + s : s;
        decimo.innerHTML = d < 10 ? '0' + d : d;

        if(d < 9){
            d += 1; 
        } else if(s < 59) {
            d = 0;
            s += 1;
        } else if(m < 59) {
            d = 0;
            s = 0;
            m += 1;
        } else if(h < 24) {
            d = 0;
            s = 0;
            m = 0;
            h +=1
        } else {
            alert("Limite de 24h");
        }

    }, 100)

    
    

    
}

function zerarCronometro() {

    document.getElementById("btnIniciar").style.display = "inline";
    document.getElementById("btnZerar").style.display = "none";

    clearInterval(cronometroId);

    document.getElementById("horas").innerHTML = "00";
    document.getElementById("minutos").innerHTML = "00";
    document.getElementById("segundos").innerHTML = "00";
    document.getElementById("decimo").innerHTML = "00";

    

}