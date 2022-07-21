$(document).ready(function () {
    console.log('Hello');

    // all custom jQuery will go here
    $("#firstbutton").click(function () {
        $.ajax({
            url: "http://192.168.33.10:30002", success: function (result) {
                $("#firstbutton").toggleClass("btn-primary:focus");
                }
        });
    });
    $("#secondbutton").click(function () {
        $.ajax({
            url: "http://192.168.33.10:30003", success: function (result) {
                $("#secondbutton").toggleClass("btn-primary:focus");
            }
        });
    });    
});
