var nim = ["190312617652","19021612480","1806142066","200110180339","180711638586","180801025","180521629003","195223007","1804441020","1906323","190413629650","19406241026","180211604579"
,"D72218030","190342621216","3.11.19.2.13","190731638418","190151602458","18.1600.003","190731638491","A24190060","170904044","1910305003","F1A019014","191221013"
,"190331622801","180211604580","217441001","1174050002","197031008","18030100","170610180117","53020180021","196151003","1191040015","190210104043","190111600027"
,"185130101111002","195223007","181610101063","190321624056","B0118010","1110191031","180422623055","1118147","190342621216","03311840000037","180341617528","190151602852"
,"170421100051","17/412726/PA/18045","D1E0190611517011033","190141602039","190141602070","180432626080","180321614541","170151602631","190704065","363836109999"
,"180121600562","19013010128","19404019","220110170046","170110201050","180252611008","180253611522","F1A019014","180331616010","130110180004","190212614028"
,"20100119007","190811636850","1917031008","190111100142","190321624016","195040100111016","170111100218","19042627644","19406241026","170535629526","041811233092","190212614026"
,"180331616025","190211614870","218321012","04211940000038","180341617528","3.11.19.2.13","16072100911","190721637647","195080201111018","190751639617","190151602562"
,"18.21.00228","190141602039","05181064","190721637704","190141602005","193111132","190631100066","190111100157","818101","190153602861","190212614028"];

function mulai(){
	alert(nim.length);
	var patokan = 0;
	var isi_nim = document.getElementById("nim").value;
		if (isi_nim == "")
			{
				alert("masukkan NIM anda");
			}
		else if (nim.indexOf(isi_nim)<0)
			{
				alert("NIM tidak terdaftar, pastikan NIM anda benar");
			}
		else
			{
				if (document.getElementById("submit").value == "="){
				document.getElementById("container-thanks").style.height = "0px";
				document.getElementById("container-thanks").style.width = "110px";
				document.getElementById("container-thanks").style.borderRadius = "0px 0px 100% 100%";
				
				document.getElementById("nim").disabled = false;
				
				document.getElementById("unduh").style.minHeight = "0px";
				document.getElementById("unduh").style.minWidth = "0px";
				document.getElementById("unduh").style.display = "none";
				
				document.getElementById("thanks").style.display = "none";
				document.getElementById("submit").style.width = "160px";
				document.getElementById("submit").style.margin = "0px";
				document.getElementById("submit").value = "SUBMIT";
				document.getElementById("submit").style.borderRadius = "25px";
				} else {
				document.getElementById("container-thanks").style.height = "200px";
				document.getElementById("container-thanks").style.width = "100%";
				document.getElementById("container-thanks").style.borderRadius = "0px 0px 30px 30px";
				
				document.getElementById("unduh").style.minHeight = "50px";
				document.getElementById("unduh").style.minWidth = "120px";
				document.getElementById("unduh").style.display = "block";
				
				document.getElementById("nim").disabled = true;
				
				document.getElementById("thanks").style.display = "block";
				document.getElementById("submit").style.width = "100%";
				document.getElementById("submit").value = "=";
				document.getElementById("submit").style.borderRadius = "30px 30px 0px 0px";
				}
			}
}
