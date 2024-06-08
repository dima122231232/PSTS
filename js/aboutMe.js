const one = document.querySelector(".content__block_aboutMe-1");const b_one = document.querySelector('.aboutMe__button-1')
const two = document.querySelector(".content__block_aboutMe-2");const b_two = document.querySelector('.aboutMe__button-2')
const three = document.querySelector(".content__block_aboutMe-3");const b_three = document.querySelector('.aboutMe__button-3')
function button1(){
    one.style.display = 'flex';
    two.style.display = 'none';
    three.style.display = 'none';
    b_one.style.backgroundColor ='#3248D2';b_one.style.color ='#fff';b_one.style.border ='none';
    b_two.style.backgroundColor ='#fff';b_two.style.color ='#003366';b_two.style.border ='1px solid #003366';
    b_three.style.backgroundColor ='#fff';b_three.style.color ='#003366';b_three.style.border ='1px solid #003366';
}
function button2(){
    two.style.display = 'flex';
    one.style.display = 'none';
    three.style.display = 'none';
    b_two.style.backgroundColor ='#3248D2';b_two.style.color ='#fff';b_two.style.border ='none';
    b_one.style.backgroundColor ='#fff';b_one.style.color ='#003366';b_one.style.border ='1px solid #003366';
    b_three.style.backgroundColor ='#fff';b_three.style.color ='#003366';b_three.style.border ='1px solid #003366';
}
function button3(){
    three.style.display = 'flex';
    two.style.display = 'none';
    one.style.display = 'none';
    b_three.style.backgroundColor ='#3248D2';b_three.style.color ='#fff';b_three.style.border ='none';
    b_two.style.backgroundColor ='#fff';b_two.style.color ='#003366';b_two.style.border ='1px solid #003366';
    b_one.style.backgroundColor ='#fff';b_one.style.color ='#003366';b_one.style.border ='1px solid #003366';

}