var acc = document.getElementsByClassName("accordion");
var i;
var shares__text = document.querySelector('.shares__text'),shares__text1 = document.querySelector('.shares__text1'),shares__text2 = document.querySelector('.shares__text2'),shares__text3 = document.querySelector('.shares__text3'),shares__text4 = document.querySelector('.shares__text4'),shares__text5 = document.querySelector('.shares__text5'),shares__text6 = document.querySelector('.shares__text6'),shares__text7 = document.querySelector('.shares__text7');
var shares__textOSNV1=document.querySelector('.shares__textOSNV1');

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-nex",
      prevEl: ".swiper-button-pre",
    },
    
    keyboard: true,
  });
//   document.querySelector('.section__but1').style.backgroundColor = '#3248D2';document.querySelector('.section__but1').style.color = '#fff';
function button1(){
    document.querySelector('.shares__items2').style.opacity = '0';document.querySelector('.shares__items2').style.display = 'none';document.querySelector('.shares__items').style.opacity = '1';document.querySelector('.shares__items').style.display = 'flex';
    for(var k=1;4>k;k++){
        window['shares__text'+(k)].style.opacity ='0';window['shares__text'+(k)].style.display='none';};shares__textOSNV1.style.opacity='0';shares__textOSNV1.style.display='none';
        document.querySelector('.section__but1').style.backgroundColor = '#3248D2';document.querySelector('.section__but1').style.color = '#fff';document.querySelector('.section__but2').style.backgroundColor = '';document.querySelector('.section__but2').style.color = '';



}
function button2(){
    document.querySelector('.shares__items').style.opacity = '0';document.querySelector('.shares__items').style.display = 'none';document.querySelector('.shares__items2').style.opacity = '1';document.querySelector('.shares__items2').style.display = 'flex';
    for(var k=1;4>k;k++){
        window['shares__text'+(k)].style.opacity ='0';window['shares__text'+(k)].style.display='none';};shares__textOSNV1.style.opacity='0';shares__textOSNV1.style.display='none';
        document.querySelector('.section__but2').style.backgroundColor = '#3248D2';document.querySelector('.section__but2').style.color = '#fff';document.querySelector('.section__but1').style.backgroundColor = '';document.querySelector('.section__but1').style.color = '';


}
function sharesButton1(){
    document.querySelector('.shares__items').style.opacity = '0';document.querySelector('.shares__items').style.display = 'none';document.querySelector('.shares__items2').style.opacity = '0';document.querySelector('.shares__items2').style.display = 'none';
    shares__text1.style.opacity='1';shares__text1.style.display='flex';
}
function sharesButton2(){
    document.querySelector('.shares__items').style.opacity = '0';document.querySelector('.shares__items').style.display = 'none';document.querySelector('.shares__items2').style.opacity = '0';document.querySelector('.shares__items2').style.display = 'none';
    shares__text2.style.opacity='1';shares__text2.style.display='flex';

}
function sharesButton3(){
    document.querySelector('.shares__items').style.opacity = '0';document.querySelector('.shares__items').style.display = 'none';document.querySelector('.shares__items2').style.opacity = '0';document.querySelector('.shares__items2').style.display = 'none';
    shares__text3.style.opacity='1';shares__text3.style.display='flex';
}
function sharesButtonOSN1(){
    document.querySelector('.shares__items2').style.opacity = '0';document.querySelector('.shares__items2').style.display = 'none';
    shares__textOSNV1.style.opacity='1';shares__textOSNV1.style.display='flex';
}