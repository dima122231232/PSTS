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
  
  document.querySelectorAll('.section_content-block-button').forEach(function(button) {
    button.addEventListener("click", function() {
      document.querySelector('.link__zaivka').style.display = 'block';
    });
  });
document.querySelector('.section__biznec-button').addEventListener("click", function() {
    document.querySelector('.link__zaivka').style.display='block';
  });

  document.querySelectorAll('.section__polosa-two-button').forEach(function(button) {
    button.addEventListener("click", function() {
      document.querySelector('.link__zaivka').style.display = 'block';
    });
  });
