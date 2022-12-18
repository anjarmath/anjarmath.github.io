//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//Navbar fix
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;

    if (window.pageYOffset > fixNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

//kirim Email
function kirimkan (){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "creative.anjar@gmail.com",
        Password : "89F67319D59AC9C086E701B160BC15408E4A",
        To : 'creative.anjar@gmail.com',
        From : document.getElementById('emailnya').value,
        Subject : "Pesan Untuk Layanan di Website",
        Body : "Nama: " + document.getElementById('name').value +
                 "<br/> Pesan: <br/>" + document.getElementById('pesan').value
    }).then(
      function (message) {
        alert("Yeay! pesan Anda terkirim, kami akan membalasnya segera");
      }
    );
}

