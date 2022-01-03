$(document).ready(function () {
    $("#design").click(function () {
        $("#design-p").show()
        $("#design").hide()


    })
    $("#design-p").click(function () {
        $("#design").show()
        $("#design-p").hide()


    })
    $("#development").click(function () {
        $("#develop").show()
        $("#development").hide()

    })
    $("#develop").click(function () {
        $("#development").show()
        $("#develop").hide()

    })

    $("#product-design").click(function () {
        $("#product").show()
        $("#product-design").hide()
    })
    $("#product").click(function () {
        $("#product-design").show()
        $("#product").hide()
    })
    $(".one").mouseenter(function () {
        $("#one").show()
    })

    $(".one").mouseenter(function () {
        $("#one").hide()

    })

    $(".two").mouseenter(function () {
        $("#two").show()

    })

    $(".two").mouseenter(function () {
        $("#two").hide()

    })
    $(".three").mouseenter(function () {
        $("#three").show()

    })

    $(".three").mouseenter(function () {
        $("#three").hide()

    })

    $(".four").mouseenter(function () {
        $("#four").show()

    })

    $(".four").mouseenter(function () {
        $("#four").hide()

    })
    $(".five").mouseenter(function () {
        $("#five").show()

    })

    $(".five").mouseenter(function () {
        $("#five").hide()

    })
    $(".six").mouseenter(function () {
        $("#six").show()

    })

    $(".six").mouseenter(function () {
        $("#six").hide()

    })
    $(".seven").mouseenter(function () {
        $("#seven").show()

    })

    $(".seven").mouseenter(function () {
        $("#seven").hide()

    })
    $(".eight").mouseenter(function () {
        $("#eight").show();

    })

    $(".eight").mouseenter(function () {
        $("#eight").hide()

    })
    
    function submit() {
            if( document.contact_us.name.value == "" ) {
               alert( "Please provide your name!" );
               document.contact_us.name.focus() ;
               return false;
            }
            if( document.contact_us.email.value == "" ) {
                alert( "Please provide your email!" );
                document.contact_us.email.focus() ;
                return false;
             }
           
             }
             if( document.contact_us.message.value == "" ) {
                alert( "Please write your Message first" );
                document.contact_us.message.focus() ;
                return false;
             }
             else{
                alert("Message Submitted Successfully")
                return true ;
            }
         })