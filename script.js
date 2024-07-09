function searchFunc() {
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("myUL");
    var li = ul.getElementsByTagName("li");
    var a = document.querySelector("a");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        };
        if(input.value.length === 0 || input.value == '') {
            ul.style.display = "none";
        } else {
            ul.style.display = "block";
        };
    };
}