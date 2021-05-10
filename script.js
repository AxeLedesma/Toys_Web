fn_ocultarEtiquetas();


var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close2")[0];

span.onclick = function () {
    modal.style.display = "none";
}

var modal = document.getElementById("myModal");
var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close2")[0];

span.onclick = function () {
    modal.style.display = "none";
}
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg3");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close2")[0];

span.onclick = function () {
    modal.style.display = "none";
}
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg4");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close2")[0];

span.onclick = function () {
    modal.style.display = "none";
}
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg5");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close2")[0];

span.onclick = function () {
    modal.style.display = "none";
}
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg6");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close2")[0];

span.onclick = function () {
    modal.style.display = "none";
}
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg7");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close2")[0];

span.onclick = function () {
    modal.style.display = "none";
}
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg8");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close2")[0];

span.onclick = function () {
    modal.style.display = "none";
}
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg9");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close2")[0];



function fn_ocultarEtiquetas() {

    $('#lbl_nombre').hide();

    $('#lbl_apellido').hide();

    $('#lbl_rut').hide();

    $('#lbl_correo').hide();

    $('#lbl_contrasena').hide();

    $('#lbl_contrasena2').hide();
}

function fn_nombreVacio() {

    var nombre = $('#txt_nombre').val();

    if (nombre == "") {

        $('#lbl_nombre').show();

        $('#txt_nombre').addClass('is-invalid');

    } else {

        $('#lbl_nombre').hide();

        $('#txt_nombre').removeClass('is-invalid');

        $('#txt_nombre').addClass('is-valid');

    }
}

function fn_apellidoVacio() {

    var apellido = $('#txt_apellido').val();

    if (apellido == "") {

        $('#lbl_apellido').show();

        $('#txt_apellido').addClass('is-invalid');

    } else {

        $('#lbl_apellido').hide();

        $('#txt_apellido').removeClass('is-invalid');

        $('#txt_apellido').addClass('is-valid');

    }
}

function fn_correoVacio() {

    var correo = $('#txt_correo').val();

    if (correo == "") {

        $('#lbl_correo').show();

        $('#txt_correo').addClass('is-invalid');

    } else {

        $('#lbl_correo').hide();

        $('#txt_correo').removeClass('is-invalid');

        $('#txt_correo').addClass('is-valid');

    }
}

function fn_contrasenaVacia() {

    var contrasena = $('#txt_contrasena').val();

    if (contrasena == "") {

        $('#lbl_contrasena').show();

        $('#txt_contrasena').addClass('is-invalid');

    }
    else {
        $('#lbl_contrasena').hide();

        $('#txt_contrasena').removeClass('is-invalid');

        $('#txt_contrasena').addClass('is-valid');

    }
}

function fn_contrasenasIguales() {

    var contrasena = $('#txt_contrasena').val();
    var contrasena2 = $('#txt_contrasena2').val();

    if (contrasena != contrasena2) {

        $('#lbl_contrasena2').show();
        $('#txt_contrasena2').addClass('is-invalid');

    }
    else if (contrasena2 == "") {
        $('#lbl_contrasena2').show();
        $('#txt_contrasena2').addClass('is-invalid');
    }
    else {
        $('#lbl_contrasena2').hide();
        $('#txt_contrasena2').removeClass('is-invalid');
        $('#txt_contrasena2').addClass('is-valid');
    }
}


