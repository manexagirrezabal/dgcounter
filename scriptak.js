
//Code based on https://codepen.io/juliogcampos/pen/BzdjwY


function load_button() {
    var button = document.getElementById("clickme");
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me : " + count;
};

}

function create_button(k) {
    var button = document.createElement("clickme"+k);
    var maindiv = document.getElementById("maindiv");
    maindiv.appendChild(button);
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me "+k+" : " + count;
};
    maindiv.appendChild(button);

}
