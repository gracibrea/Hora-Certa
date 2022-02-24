let timer; //criando a variável let fora para que possa ser usada em todos os blocos

function iniciar(){
    timer = setInterval(showTime, 1000);
}

function parar(){
    clearInterval(timer);
}

function showTime() {
    let d = new Date ();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    if (h < 10) {
        h = "0"+h;
    }
    if (m < 10) {
        m = "0"+m;
    }
    if (s < 10) {
        s = "0"+s;
    }
    
    let text = `${h}:${m}:${s}`;

    document.querySelector('.demo').innerHTML = text;
}





//saída
