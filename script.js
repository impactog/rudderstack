
document.querySelector("#web-visit-form").addEventListener("submit", function(event){
    event.preventDefault()
    
    //  Referencia: https://www.rudderstack.com/docs/event-spec/standard-events/page/
    rudderanalytics.page(rudderanalytics.getUserId(), { url: document.querySelector("#email").value })

    emailForm.value = ""
} )


document.querySelector("#email-form").addEventListener("submit", function(event){
    event.preventDefault()

    const emailForm = document.querySelector("#email")
    const email = emailForm.value

    rudderanalytics.identify(email, { email: email })

    emailForm.value = ""
} )
