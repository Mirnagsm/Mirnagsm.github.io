(function(){
    const openButton = document.querySelector('.nav___menu');
const menu = document.querySelector('.nav___link');
const closeMenu = document.querySelector('.nav___close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav___link--show')

        closeMenu.addEventListener('click', ()=>{
            menu.classList.remove('nav___link--show')
        });

    });
})();