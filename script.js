function calculaIMC() {
    var pes = window.prompt('Qual o seu peso (Kg)?')
    var alt = window.prompt('Qual a sua altura (m)?')
    
    var res = pes / (alt*alt)

    window.alert('O seu IMC é: ' + res)

}