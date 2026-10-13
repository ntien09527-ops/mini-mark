// Lọc sản phẩm theo danh mục
function loc(loai) {
    var cacThe = document.getElementsByClassName("the");
    for (var i = 0; i < cacThe.length; i++) {
        if (loai === "tatca" || cacThe[i].dataset.category === loai) {
            cacThe[i].style.display = "block";
        } else {
            cacThe[i].style.display = "none";
        }
    }
}

// Tìm kiếm sản phẩm theo tên
function timKiemSP() {
    var tu = document.getElementById("timkiem").value.toLowerCase();
    var cacThe = document.getElementsByClassName("the");
    for (var i = 0; i < cacThe.length; i++) {
        var ten = cacThe[i].querySelector(".ten-sp").innerText.toLowerCase();
        if (ten.includes(tu)) {
            cacThe[i].style.display = "block";
        } else {
            cacThe[i].style.display = "none";
        }
    }
}