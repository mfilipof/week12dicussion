document.querySelector("#sameAddress").addEventListener("click", function(){
    if (this.checked) {
        document.getElementById("home").value = document.getElementById("bill").value;
        document.getElementById("home").ReadOnly = true;
    }
    else {
        document.getElementById("home").ReadOnly = false;
    }
});