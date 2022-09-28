const Name = document.getElementById('name');
const nav = document.getElementById('nav');
const email = document.getElementById('email');
const message = document.getElementById('message');
const btn = document.getElementById('btn-submit')

btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const nameValue = Name.value
    const emailValue = email.value
    const messageValue = message.value
    try {
        const { data } = await axios.post('api/form', {personName: nameValue, personEmail: emailValue, personMessage: messageValue})  
    } catch (error) {
        console.log(error)
    }

})
