faq_text_arr = document.querySelectorAll(".faq-text");
faq_btn_arr = document.querySelectorAll(".faq-info-button");
faq_btn_show_arr = document.querySelectorAll(".faq-button-cancel");
// let deg = 45;
for (let i = 0; i < faq_btn_arr.length; i++){
    faq_btn_arr[i].addEventListener('click',()=>{
        faq_text_arr[i].style.display = "flex";
        faq_btn_arr[i].style.display = "none";
        faq_btn_show_arr[i].style.display = "flex";
        // faq_btn_arr[i].querySelector('img').style.transform = 'rotate(' + deg + 'deg)';
        // console.log(i);
    })
    faq_btn_show_arr[i].addEventListener('click',()=>{
        faq_text_arr[i].style.display = "none";
        faq_btn_show_arr[i].style.display = "none";
        faq_btn_arr[i].style.display = "flex";
    })
}