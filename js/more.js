document.addEventListener('DOMContentLoaded', function (){
  document.querySelector('.more-btn').addEventListener('click', function(){
    document.querySelectorAll('.hidden').forEach(function(HidDen) {
      HidDen.classList.toggle('open')
    })
    document.querySelectorAll('.hidden-1').forEach(function(HidDen) {
      HidDen.classList.toggle('open')
    })
  })
})
