
var namSinh = prompt("Nhập năm sinh của bạn:");
namSinh = parseInt(namSinh);
if (isNaN(namSinh)) {
    alert("Vui lòng nhập một năm hợp lệ!");
} else {
    var tuoi = new Date().getFullYear() - namSinh;
    if (tuoi > 18) {
        alert("Bạn đã đủ tuổi.");
    } else {
        alert("Bạn chưa đủ tuổi.");
    }
}