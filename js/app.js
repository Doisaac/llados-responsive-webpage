const menu = document.querySelector('.nav-bar-menu');

const menuList = document.querySelector('.nav-list');

const links = document.querySelectorAll('.nav-link');

/* MENU-BAR FUNCTION TO DISPLAY THE LIST*/
menu.addEventListener('click', function() {
    menuList.classList.toggle('nav-list-show');
});

/* WHEN A LINK IS CLICKED THE LIST IS HIDDEN */
links.forEach(function(link){

    link.addEventListener('click', function(){
        menuList.classList.remove('nav-list-show');
    })
})