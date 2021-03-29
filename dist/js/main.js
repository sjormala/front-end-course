// Select DOM Items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const menuLogo = document.getElementById('springi-logo');

const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menuLogo.style.visibility = "hidden";
        menu.classList.add('show');
        menuBranding.classList.add('show');
        menuNav.classList.add('show');

        navItems.forEach(item => item.classList.add('show'));
        
        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        menuNav.classList.remove('show');
        menuLogo.style.visibility = "visible";


        navItems.forEach(item => item.classList.remove('show'));
        
        // SEt Menu State
        showMenu = false;
 
    }
}

function toggleService(itemNum) {
    var dots = document.getElementById("dots" + itemNum);
    var moreText = document.getElementById("more" + itemNum);
    var btnText = document.getElementById("moreBtn"+itemNum);

    console.log("painettu: "+itemNum);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Lue Lisää";
        btnText.style.maxWidth = "70px";
        moreText.style.display = "none";
        } else {
        dots.style.display = "none";
        btnText.innerHTML = "Piilota";
        btnText.style.maxWidth = "50px";
        moreText.style.display = "inline";
        }
}