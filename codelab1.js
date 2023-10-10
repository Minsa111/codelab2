function onSubmit(){
    const angka1 = parseFloat(document.getElementById("angka-satu").value);
    const angka2 = parseFloat(document.getElementById("angka-dua").value);

    const hasil = angka1 + angka2;

    alert("Hasil penjumlahan: " + hasil);
    document.getElementById("hasil").textContent = hasil;
    console.log(hasil)
}

document.getElementById("resetButton").addEventListener("click", function() {
    document.getElementById("angka-satu").value = ""; // Menghapus nilai input angka pertama
    document.getElementById("angka-dua").value = ""; // Menghapus nilai input angka kedua
    document.getElementById("hasil").textContent = ""; // Menghapus hasil
});