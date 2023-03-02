var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var btn_two = document.getElementById("myBtn_two");

var btn_three = document.getElementById("myBtn_three");

var span = document.getElementsByClassName("close")[0];

var body = document.getElementById("body");

btn.addEventListener("click", open_modal);

btn_two.addEventListener("click", open_modal);

btn_three.addEventListener("click", open_modal);

function open_modal() {
    modal.style.display = "block";
    body.style.overflow = "hidden";
}

span.onclick = function() {
    modal.style.display = "none";
    body.style.overflow = "visible";
}
