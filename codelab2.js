function Register(){
    const nama = document.getElementById("nama-lengkap").value;
    const email = document.getElementById("email").value;
    const alamat = document.getElementById('alamat').value;

    if (nama === "" || email === "" || alamat === "") {
        alert("Error");
    }else{
        alert("Nama " + nama + "\nEmail " + email + "\nAlamat " +alamat);
    }
}