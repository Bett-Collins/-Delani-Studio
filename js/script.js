$(document).ready(function () {
    $("#design-p").click(function () {
        $("#design").show();
        $("#design-p").hide();


    });
    $("#development").click(function () {
        $("#develop").show();
        $("#devopment").hide();

    });

    $("#product-design").click(function () {
        $("#product").show();
        $("#product-design").hide();
    });


    $(".one").mouseenter(function () {
        $("#one").show();
    });

    $(".one").mouseenter(function () {
        $("#one").hide();

    });

    $(".two").mouseenter(function () {
        $("#two").show();

    });

    $(".two").mouseenter(function () {
        $("#two").hide();

    });
    $(".three").mouseenter(function () {
        $("#three").show();

    });

    $(".three").mouseenter(function () {
        $("#three").hide();

    });

    $(".four").mouseenter(function () {
        $("#four").show();

    });

    $(".four").mouseenter(function () {
        $("#four").hide();

    });
    $(".five").mouseenter(function () {
        $("#five").show();

    });

    $(".five").mouseenter(function () {
        $("#five").hide();

    });
    $(".six").mouseenter(function () {
        $("#six").show();

    });

    $(".six").mouseenter(function () {
        $("#six").hide();

    });
    $(".seven").mouseenter(function () {
        $("#seven").show();

    });

    $(".seven").mouseenter(function () {
        $("#seven").hide();

    });
    $(".eight").mouseenter(function () {
        $("#eight").show();

    });

    $(".eight").mouseenter(function () {
        $("#eight").hide();

    });

});
function submit() {

    var enteredName = validName();
    enteredName = document.getElementById("name").value;
    validEmail()
    message();
    alert("Hey " + enteredName + " ,We have received your message. Thank you for reaching out to us.");

}
function validName() {
    var name = document.getElementById("name").value;
    if (name == "") {
        alert("please provide name");
    }
}
function validEmail() {
    var email = document.getElementById("email").value;
    if (email == "") {
        alert("please provide email");
    }
}

function validMessage() {
    var message = document.getElementById("message").value;
    if (message == "") {
        alert("please provide message");
    }
}