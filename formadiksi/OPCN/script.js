var nim = ["190312617652"];

function mulai(){
	var isi_nim = document.getElementById("nim").value;
		if (isi_nim == "")
			{
				document.getElementById("err").innerHTML = "masukkan NIM anda";
			}
		else if (nim.indexOf(isi_nim)<0)
			{
				document.getElementById("err").innerHTML = "NIM tidak terdaftar, pastikan NIM anda benar";
			}
		else
			{
				document.getElementById("err").innerHTML = "Terima kasih atas partisipasi anda dalam Lomba Cipta Opini, Puisi, dan Cerpen Mahasiswa Penerima Bidikmisi Tingkat Nasional Tahun 2020";
				window.open("http://anjarmath.github.io/contoh.zip");
			}
}