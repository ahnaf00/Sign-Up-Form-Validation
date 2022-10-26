const usernameELm           = document.querySelector("#usernameId")
const emailELm              = document.querySelector("#emailId")
const phoneELm              = document.querySelector("#phoneId")
const passwordELm           = document.querySelector("#password")
const reTypepasswordELm     = document.querySelector("#reTypepassword")
const form                  = document.querySelector("form")


form.addEventListener("submit", e =>{
    e.preventDefault()

    validateInputs()
})

const setError = ( element, message ) => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message
    inputControl.classList.add("error")
    inputControl.classList.remove("success")
}
const setSuccess = element =>{
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector(".error")

    errorDisplay.innerText = ""
    inputControl.classList.add("success")
    inputControl.classList.remove("error")
}

const isValidusername = username =>{
    const rUsername = /^[a-z]{3,}\d*$/
    return rUsername.test(usernameELm)
}

const isValidEmail = email =>{
    const rEmail = /^\w{5,15}@[a-z A-Z]{2,8}\.[a-z A-Z]{2,3}$/
    return rEmail.test(emailELm)
}

const isValidPhoneNum = phone => {
    const rPhone = /\+(88)?01[3-9]\d-?\d{3}-?\d{4}/
    return rPhone.test(phoneELm)
}

const isValidPassword = password => {
    const rPassword = /^[a-zA-Z0-9!@#$%^&*]{8,}$/
    return rPassword.test(passwordELm)
}

const validateInputs = () =>{
    const usernameValue         = usernameELm.value
    const emailValue            = emailELm.value
    const phoneValue            = phoneELm.value
    const passwordValue         = passwordELm.value
    const reTypepassworValue    = reTypepasswordELm.value
    
    // Username validation
    if( usernameValue === "" )
    {
        setError(usernameELm, "Username is required")
    }else if (!isValidusername(usernameValue)) {
        setError(usernameELm, "Provide a valid username")
    }
    else{
        setSuccess(usernameELm)
    }

    // Email validation
    if( emailValue === "" )
    {
        setError(emailELm, "Email address is required")
    }else if (!isValidEmail(emailValue)){
        setError(emailELm, "Provide a valid email address")
    }else{
        setSuccess(emailELm)
    }

    // Phone number validation
    if( phoneValue === "" )
    {
        setError(phoneELm, "Phone number is required for varification")
    }else if (!isValidPhoneNum(phoneValue)){
        setError(phoneELm, "Provide a valid Phone Number")
    }else{
        setSuccess(phoneELm)
    }

    // Password validation
    if( passwordValue === "" )
    {
        setError(passwordELm, "Password can not be empty")
    }else if ( !isValidPassword(passwordValue) || passwordValue.length < 8  )
    {
        setError(passwordELm, "Please provide a valid password" )
    }
    else {
        setSuccess(passwordELm)
    }

    if( reTypepassworValue === "" )
    {
        setError( reTypepasswordELm, "Please Re-Type your Password" )
    }else if ( reTypepassworValue !== passwordValue )
    {
        setError( reTypepasswordELm, "Password did not match" )
    }else{
        setSuccess( reTypepasswordELm )
    }
}

