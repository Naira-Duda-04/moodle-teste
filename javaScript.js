const checkbox = document.querySelector('#checkbox')
if (window.matchMedia('(prefers-color-scheme: dark)').matches){
  console.log()
  checkbox.setAttribute('checkd', true)
}

document.body.style.setProperty('--darkFundoBackground', 'black')
checkbox.addEventListener('change',function(event)  {
    document.body.classList.toggle('is-dark-mode')
    if (this.checkd){
      document.body.classList.remove('is-light-mode')
      document.body.classList.add('is-dark-mode')
    }
    else{
      document.body.classList.remove('is-light-mode') 
      document.body.classList.add('is-dark-mode')
    }
})

