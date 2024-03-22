function update() {
    console.log("updating results");
    var input = document.getElementById('myinput');
    var output = document.getElementById('output');
    output.innerHTML = input.value;
}