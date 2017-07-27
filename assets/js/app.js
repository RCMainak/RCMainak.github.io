window.onload = function () {

    var $ = function (elem) {
        return document.querySelector(elem);
    }

    var title = document.getElementsByTagName("title")[0].innerText;

    if (title == "Hello World...") {
        $("#about").className = "active";
    } else if (title == "Blog") {
        $("#blog").className = "active";
    } else if (title == "Contact Me!!!") {
        $("#contact").className = "active";
    }


    if ($("#project-1")) {
        $("#project-1").addEventListener("click", function () {

            $("#project-1 > i").classList.toggle("fa-caret-down");
            $("#project-1 > i").classList.toggle("fa-caret-right");

            if ($("#project-1 > div").classList.contains("fadeIn")) {
                $("#project-1 > div").classList.toggle("fadeIn");
                $("#project-1 > div").classList.toggle("fadeOut");

                window.setTimeout(function () {
                    $("#project-1 > div").classList.toggle("hidden");
                }, 700);

            } else if ($("#project-1 > div").classList.contains("fadeOut")) {
                $("#project-1 > div").classList.toggle("hidden");
                $("#project-1 > div").classList.toggle("fadeOut");
                $("#project-1 > div").classList.toggle("fadeIn");
            } else {
                $("#project-1 > div").classList.toggle("fadeIn");
                $("#project-1 > div").classList.toggle("hidden");
            }
        }, false);
    }
    

    if ($("#project-2")) {
        $("#project-2").addEventListener("click", function () {

            $("#project-2 > i").classList.toggle("fa-caret-down");
            $("#project-2 > i").classList.toggle("fa-caret-right");

            if ($("#project-2 > div").classList.contains("fadeIn")) {
                $("#project-2 > div").classList.toggle("fadeIn");
                $("#project-2 > div").classList.toggle("fadeOut");

                window.setTimeout(function () {
                    $("#project-2 > div").classList.toggle("hidden");
                }, 700);

            } else if ($("#project-2 > div").classList.contains("fadeOut")) {
                $("#project-2 > div").classList.toggle("hidden");
                $("#project-2 > div").classList.toggle("fadeOut");
                $("#project-2 > div").classList.toggle("fadeIn");
            } else {
                $("#project-2 > div").classList.toggle("fadeIn");
                $("#project-2 > div").classList.toggle("hidden");
            }
        }, false);
    }
}
