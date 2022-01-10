$(document).ready(function () {
    $("#design").click(function () {
        $("#design-p").toggle();
        $("#design").toggle();


    });
    $("#design-p").click(function () {
        $("#design").toggle()
        $("#design-p").toggle()


    });
    $("#development").click(function () {
        $("#develop").show();
        $("#development").hide();

    });
    $("#develop").click(function () {
        $("#development").show();
        $("#develop").hide();

    });

    $("#product-design").click(function () {
        $("#product").show();
        $("#product-design").hide();
    });
    $("#product").click(function () {
        $("#product-design").show();
        $("#product").hide();
    });
});

$(".one").mouseover(function () {
    $("#one").show();
});
$(".one").mouseout(function () {
    $("#one").hide();
});


$(".two").mouseover(function () {
    $("#two").show();
});
$(".two").mouseout(function () {
    $("#two").hide();

});

$(".three").mouseover(function () {
    $("#three").show()
});
$(".three").mouseout(function () {
    $("#three").hide()
});



$(".four").mouseover(function () {
    $("#four").show();
});
$(".four").mouseout(function () {
    $("#four").hide();
});



$(".five").mouseover(function () {
    $("#five").show();
});
$(".five").mouseout(function () {
    $("#five").hide();
});



$(".six").mouseover(function () {
    $("#six").show();

});
$(".six").mouseout(function () {
    $("#six").hide();
});


$(".seven").mouseover(function () {
    $("#seven").show()
});
$(".seven").mouseout(function () {
    $("#seven").hide()


});


$(".eight").mouseover(function () {
    $("#eight").show();
});
$(".eight").mouseout(function () {
    $("#eight").hide();
});

 function validate() {
    var enteredName = validName();
    enteredName = document.getElementById("name").value;
    validEmail()
    message();
    alert("Hi " + enteredName + " ,We have received your message. Thank you for reaching out to us.");


}

function validName() {
    var name = document.getElementById("name").value;
    if (name == "") {
        alert("please provide your name");
        document.getElementById("name").focus();
        return false;
    }
}

function validEmail() {
    var email = document.getElementById("email").value;
    if (email == "") {
        alert("please provide your email");
        document.email.email.focus();
        return false;
    }
}


function message() {
    var message = document.getElementById("message").value;
    if (message == "") {
        alert("please input your message");
        document.message.message.focus();
        return true;
    }



}


