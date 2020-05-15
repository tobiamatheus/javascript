function calculaIMC() {
    var pes = document.getElementById("peso").value
    var alt = document.getElementById("altura").value
    
    var res = pes / (alt*alt)

    document.write('O seu IMC é: ' + res)

}