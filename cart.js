// Thay đổi số lượng và tính tiền trong giỏ hàng
function doiSL(id, n) {
    var slEl = document.getElementById("sl-" + id);
    var so = Number(slEl.innerText) + n;
    if (so < 1) so = 1;
    if (so > 10) so = 10;
    slEl.innerText = so;

    var gia = Number(document.getElementById("gia-" + id).innerText);
    var thanhTien = gia * so;
    document.getElementById("thanhtien-" + id).innerText = thanhTien.toLocaleString() + "đ";
    
    document.getElementById("tamtinh").innerText = thanhTien.toLocaleString() + "đ";
    document.getElementById("tongtien").innerText = (thanhTien + 15000).toLocaleString() + "đ";
}

// Xóa sản phẩm khỏi giỏ hàng
function xoaDong(rowId) {
    var row = document.getElementById(rowId);
    if (row) {
        row.remove();
        document.getElementById("tamtinh").innerText = "0đ";
        document.getElementById("tongtien").innerText = "15.000đ";
    }
}

// Kiểm tra form và đặt hàng
function datHang() {
    var ten = document.getElementById("ten").value;
    var sdt = document.getElementById("sdt").value;
    var diachi = document.getElementById("diachi").value;

    if (ten === "") { alert("Vui lòng nhập họ tên!"); return; }
    if (sdt.length !== 10) { alert("Số điện thoại phải có đúng 10 chữ số!"); return; }
    if (diachi === "") { alert("Vui lòng nhập địa chỉ nhận hàng!"); return; }

    alert("Đặt hàng thành công! Mã đơn hàng: MM" + Math.floor(Math.random() * 90000 + 10000));
}