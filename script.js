
//  Referencia: https://www.rudderstack.com/docs/event-spec/standard-events/page/

document.querySelector("#web-visit-form").addEventListener("submit", function(event){
    event.preventDefault();
    rudderanalytics.page({ url: document.querySelector("#email").value });
} )


document.querySelector("#email-form").addEventListener("submit", function(event){
    event.preventDefault();
    const email = document.querySelector("#email").value;
    rudderanalytics.identify(email, { email: email });
} )

document.querySelector("#linkedin-form").addEventListener("submit", function(event){
    event.preventDefault();
    rudderanalytics.identify(rudderanalytics.getUserId(), {website: document.querySelector("#url_linkedin").value });
} )

document.querySelector("#foto-form").addEventListener("submit", function(event){
    event.preventDefault();
    rudderanalytics.identify(rudderanalytics.getUserId(), {avatar: document.querySelector("#url_foto").value });
} )

document.querySelector("#evento-form").addEventListener("submit", function(event){
    event.preventDefault();

    if (typeof rudderanalytics.getUserTraits().eventos !== 'undefined') {
        var eventos = rudderanalytics.getUserTraits().eventos;
    } else {
        var eventos = []; 
    }

    eventos.push ({"date": document.querySelector("#evento_fecha").value, "title": document.querySelector("#evento").value, "country": document.querySelector("#pais").value, "type": document.querySelector("#evento_tipo").value});    
    rudderanalytics.identify(rudderanalytics.getUserId(), {"eventos": eventos})
    
} )
