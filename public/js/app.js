console.log('Client side js file is loaded!')

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

    fetch('http://127.0.0.1:3000/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                return messageOne.textContent =data.error
            }        

            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast

        })
    })
})