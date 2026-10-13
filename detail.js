// Tăng giảm số lượng sản phẩm
function doiSL(n) {
    var so = Number(document.getElementById("sl").innerText);
    so = so + n;
    if (so < 1) { so = 1; }
    if (so > 10) { so = 10; }
    document.getElementById("sl").innerText = so;
}

// Thông báo thêm vào giỏ hàng
function themVaoGio() {
    var so = document.getElementById("sl").innerText;
    alert("Đã thêm " + so + " sản phẩm vào giỏ hàng thành công!");
}