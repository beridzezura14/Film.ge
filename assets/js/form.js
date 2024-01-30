const loginForm = document.querySelector('.login-form')
const done = document.querySelector('.done')
const submit = document.querySelector('#submit')

const errorName = document.querySelector('.text')
const errorEmail = document.querySelector('.email')
const errorPassOne = document.querySelector('.pass-one')
const errorPassTwo = document.querySelector('.pass-two')
const check = document.querySelector('#checkbox')
const agree = document.querySelector('#agree')
const incorrectTextLabel = document.querySelector('.incorrect-text-label')
const incorrectEmailLabel = document.querySelector('.incorrect-email-label')
const incorrectPasswordLabel = document.querySelector('.incorrect-password-label')
const incorrectPasswordLabelTwo = document.querySelector('.incorrect-password-label-Two')

submit.addEventListener('click', function(e){
    const text = document.querySelector('#text').value
    const email = document.querySelector('#email').value
    const passone = document.querySelector('#passone').value
    const passtwo = document.querySelector('#passtwo').value
    e.preventDefault();

    if(text.length < 1){
        errorName.style.border = '2px solid red'
        incorrectTextLabel.textContent = 'სახელის ველი ცარიელია!'
    }else{
      errorName.style.border = '2px solid green'
      incorrectTextLabel.textContent = ''
    }
    if(!email.includes('@') && !email.includes('.')){
        errorEmail.style.border = '2px solid red'
        incorrectEmailLabel.textContent = 'მეილის ფორმატი არასწორია!'
    }else{
        errorEmail.style.border = '2px solid green'
        incorrectEmailLabel.textContent = ''
    }
    if(passone.length < 5){
        errorPassOne.style.border = '2px solid red'
        incorrectPasswordLabel.textContent = 'პაროლი უნდა შეიცვდეს 8 სიმბოლოს!'
    }else{
        errorPassOne.style.border = '2px solid green'
        incorrectPasswordLabel.textContent = ''
    }
    // if(passone != passtwo){
    //     errorPassTwo.style.border = '2px solid red'
    //     incorrectPasswordLabelTwo.textContent = 'პაროლი უნდა შეიცვდეს 8 სიმბოლოს!'
    // }else{
    //     errorPassTwo.style.border = '2px solid green'
    //     incorrectPasswordLabelTwo.textContent = ''
    // }
    if(passone != passtwo || passtwo.length < 1){
        errorPassTwo.style.border = '2px solid red'
        incorrectPasswordLabelTwo.textContent = 'პაროლი არ ემთხვევა!'
    }else{
        errorPassTwo.style.border = '2px solid green'
        incorrectPasswordLabelTwo.textContent = ''
    }
    if(check.checked){
        agree.textContent = 'you agree!'
        agree.style.color = 'green'
    }else{
        agree.textContent = 'you disagree!'
        agree.className = 'incorrect';
    }
    if(text.length > 0 && 
        (email.includes('@') && email.includes('.')) && 
        passone.length >= 2 && 
        (passone === passtwo && passtwo.length > 5) && 
        check.checked 
      ){
        loginForm.style.display = 'none'
        done.style.display = 'flex'
    }
    
})


const showPassword = document.querySelector('.showpassword')
const hidePassword = document.querySelector('.hidepassword')

function password(){
    const showPassOne = document.querySelector('#passone')
    showPassword.style.display = 'block'
    if (showPassOne.type === "password") {
        showPassOne.type = "text";
        showPassword.style.display = 'none'
        hidePassword.style.display = 'block'
    } else {
        showPassOne.type = "password";
        showPassword.style.display = 'block'
        hidePassword.style.display = 'none'
    }
}
showPassword.addEventListener('click', password)
hidePassword.addEventListener('click', password)

const showPasswordTwo = document.querySelector('.showpasswordtwo')
const hidePasswordTwo = document.querySelector('.hidepasswordtwo')

function passwordTwo(){
    const showPasstwo = document.querySelector('#passtwo')
    if (showPasstwo.type === "password") {
        showPasstwo.type = "text";
        showPasswordTwo.style.display = 'none'
        hidePasswordTwo.style.display = 'block'
    } else {
        showPasstwo.type = "password";
        showPasswordTwo.style.display = 'block'
        hidePasswordTwo.style.display = 'none'
    }
}

showPasswordTwo.addEventListener('click', passwordTwo)
hidePasswordTwo.addEventListener('click', passwordTwo)