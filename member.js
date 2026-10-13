// Đăng nhập và chuyển đổi giao diện khu vực hội viên
function dangNhap() {
    var email = document.getElementById("email-dn").value;
    var pass = document.getElementById("pass-dn").value;

    if (email === "" || !email.includes("@")) {
        alert("Vui lòng nhập email hợp lệ có chứa '@'!");
        return;
    }
    if (pass === "") {
        alert("Vui lòng nhập mật khẩu!");
        return;
    }

    document.getElementById("khu-khach").style.display = "none";
    document.getElementById("khu-hoi-vien").style.display = "block";
    alert("Đăng nhập thành công!");
}

// Đăng xuất quay lại khu vực khách
function dangXuat() {
    document.getElementById("khu-khach").style.display = "block";
    document.getElementById("khu-hoi-vien").style.display = "none";
    document.getElementById("email-dn").value = "";
    document.getElementById("pass-dn").value = "";
}