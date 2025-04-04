function convert() {
    var codes = document.getElementById("codes").value.split(',')
    var result = "";

   

    for (const code of codes) {
        result = result + code + ": " + alarms_rlp[parseInt(code)] + "<br><br>"
    }

    document.getElementById("ResultTextBox").innerHTML = result
}