let posishon = 1;
var acc = document.getElementsByClassName("accordion");
var i;
var bot1 = document.querySelector('.oo'),bot2 = document.querySelector('.tt'),bot3 = document.querySelector('.th'),bot4 = document.querySelector('.ff');

var but1 = document.querySelector('.but1'),but2 = document.querySelector('.but2'),but3 = document.querySelector('.but3'),but4 = document.querySelector('.but4');
but1.style.backgroundColor = '#3248D2';but1.style.color = '#fff';
function changePosition(position) {
    posishon = position;
    but1.style.backgroundColor = '';but1.style.color = '';but2.style.backgroundColor = '';but2.style.color = '';
    but3.style.backgroundColor = '';but3.style.color = '';but4.style.backgroundColor = '';but4.style.color = '';
    if (posishon !== 1) {document.querySelector('.onee').style.display = 'none';document.querySelector('.onee').style.opacity= '0';}
    else{document.querySelector('.onee').style.display = 'flex';document.querySelector('.onee').style.opacity= '1';}
    if(posishon == 1){but1.style.backgroundColor = '#3248D2';but1.style.color = '#fff';but2.classList.add('hovered')};if(posishon == 2){but2.style.backgroundColor = '#3248D2';but2.style.color = '#fff';but2.classList.add('hovered')};if(posishon == 3){but3.style.backgroundColor = '#3248D2';but3.style.color = '#fff';but2.classList.add('hovered')};if(posishon == 4){but4.style.backgroundColor = '#3248D2';but4.style.color = '#fff';but2.classList.add('hovered')}
    for (let i = 1; i <= 4; i++) {
        let element = document.getElementById(i.toString());
        if (element) {
            element.style.opacity = (i === position) ? '1' : '0';
            element.style.display = (i === position) ? 'flex' : 'none';
        }
    }
}

document.querySelectorAll('.section__menu-button').forEach((button, index) => {
    button.addEventListener('click', () => changePosition(index + 1));
});

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

