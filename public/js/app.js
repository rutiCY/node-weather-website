
const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
//messageOne.textContent = 'From js'

weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault()

    const location = searchElement.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                return messageOne.textContent =data.error
            }        

            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast

        })
    })
})