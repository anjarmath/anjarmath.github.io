var nim = ["190312617652","170511623038","170311611602","180321614505","170431622005","180412620088",'190521648826','190321624023','190332622445','180411619519','190411630464','190351620411',
			'190312617608','180513626502','190412630102','190514650004','190153602878','190221612480','190612642887','190711637282','190331622812','190141602059','190811636888','190151602403','190151602596',
			'180811642145','190253608875','180222607517','190612642900','190422627682','180312613038','190231611644','190331622835','190212614019','180422623093','190513631611','190331622806','190321624015',
			'180221607046','190516649239','180221607008','180413620502','170121600544','180631638021','180811642048','180722639542','180431624552'];

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
				document.getElementById("log").style.display = "none";
				document.getElementById("out").style.display = "block";
				window.open("http://anjarmath.github.io/sertif-pan-opc/"+isi_nim+".zip");
			}
}
