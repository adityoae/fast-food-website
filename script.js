let keranjang = [];

function tambahKeranjang(nama, harga, idQty) {
  const qty = parseInt(document.getElementById(idQty).value);
  if (qty > 0) {
    keranjang.push({ nama, qty, harga, total: harga * qty });
    tampilkanKeranjang();
  } else {
    alert("Pilih jumlah dulu!");
  }
}

function tampilkanKeranjang() {
  let output = "<h3>Keranjang Belanja:</h3><ul>";
  keranjang.forEach(item => {
    output += `<li>${item.nama} x ${item.qty} = Rp${item.total.toLocaleString()}</li>`;
  });
  output += "</ul>";
  document.getElementById("keranjang").innerHTML = output;
}

function resetForm() {
  document.getElementById("nama").value = "";
  document.getElementById("alamat").value = "";
  document.getElementById("telepon").value = "";
  keranjang = [];
  tampilkanKeranjang();
}

function pesan() {
  const nama = document.getElementById("nama").value;
  const alamat = document.getElementById("alamat").value;
  const telepon = document.getElementById("telepon").value;
  
  if (!nama || !alamat || !telepon) {
    alert("Harap lengkapi semua data pemesan!");
    return;
  }

  alert(`Terima kasih ${nama}, pesanan Anda sedang diproses!`);
  resetForm();
}
