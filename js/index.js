function convert() {    
    var codes = document.getElementById("codes").value.toString().match(/.{1,3}/g)
    var result = "";

   

    for (const rawCode of codes) {
        code = rawCode
        result = result + code + ": " + alarms_rlp[parseInt(code)] + "<br><br>"
    }

    document.getElementById("ResultTextBox").innerHTML = result
}
