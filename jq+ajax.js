$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "https://randomuser.me/api/",
    })
        .done(function (msg) {
            console.log(msg);
            alert("Data Saved: " + msg);
        });
})