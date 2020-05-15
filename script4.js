function hora() {
    today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    document.getElementById("horario").innerHTML=h+":"+m+":"+s;
    setTimeout('time()',500);

}