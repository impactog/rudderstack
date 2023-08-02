// Event listener on the form submit
document.querySelector("#email-form").addEventListener("submit", function(event){
    event.preventDefault()

    const emailForm = document.querySelector("#email")
    const email = emailForm.value

    console.log(email)

    // Make RudderStack Identify Call
    rudderanalytics.identify(email, { email: email })

    emailForm.value = ""
} )
