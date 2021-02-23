$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.left_sidebar').toggleClass('menu_active');
    $('.main_content').toggleClass('content_active');
    $('.menu-btn').css("display","none");
    $('.left_sidebar').css('overflowX','hidden')
})
$('.cancel-btn').on('click', function(e) {
    e.preventDefault();
    $('.left_sidebar').toggleClass('menu_active');
    $('.main_content').toggleClass('content_active');
    $('.left_sidebar').css('overflowX','inherit')
    setTimeout(()=>{
        $('.menu-btn').css("display","flex");
    }, 280)
});

// $('.codrops-demos_sidebar a').on('click', (e)=>{
//     $('.left_sidebar').toggleClass('menu_active');
//     $('.main_content').toggleClass('content_active');
//     $('.left_sidebar').css('overflowX','inherit')
//     setTimeout(()=>{
//         $('.menu-btn').css("display","flex");
//     }, 280)
// })
// DROPDOWN MENU
// $('.menu li:nth-child(2) a').remove();
$('.menu li:nth-child(2)').click(()=>{
    $('.menu li:nth-child(2) .sub-menu').css('display', 'block');
    function closeMenu(event){
        if (!event.target.closest('.sub-menu')){
            document.querySelector('.menu li:nth-child(2) .sub-menu').style.display = 'none'
            document.removeEventListener('click', closeMenu)
        }
    }
    setTimeout( () => {document.addEventListener('click', closeMenu)})
})



jQuery(document).ready(function(){

     jQuery('.header__phone_block-open').click(function () {
     jQuery(".header__cont_top").toggleClass('active-form');
     });

});

$('#primary-menu>ul>li:last>a').click((e)=>{
    e.preventDefault()
});