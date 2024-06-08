var superLabel = document.getElementById('super_label');
var click = 0;
superLabel.addEventListener('click', function() {
    if(click % 2 === 0){
        document.querySelector('.right').style.display='none';document.querySelector('.left').style.display='none';
    }
    else{
        document.querySelector('.right').style.display='block';document.querySelector('.left').style.display='block';
    }
    click+=1;
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbzknznle0965VixbB0KTW5eGscxpuXW9l9x1pp0OYIOkLSEu-H4nOi9AugFVdU4ufR1VA/exec'
        const form = document.forms['submit-to-google-sheet']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => alert('Отправлено', response,document.querySelector('.link__zaivka').style.display = 'none'))
            .catch(error => alert('Error!', error.message))
        })
var krest = document.querySelector(".krest");
krest.addEventListener("click", function() {
    document.querySelector('.link__zaivka').style.display='none';
  });
  


  document.querySelectorAll('.section__polosa-two-button').forEach(function(button) {
    button.addEventListener("click", function() {
      document.querySelector('.link__zaivka').style.display = 'block';
    });
  });
