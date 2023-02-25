
let externalScript = document.createElement('script');
externalScript.setAttribute('src', 'https://smtpjs.com/v3/smtp.js');
document.head.appendChild(externalScript)

document.addEventListener("click",sendEmail,false)

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "venkat.krishna.teja.066@gmail.com",
        Password : "A4842C493C3C2D173EA0851DECB0A4A38386",
        To : 'starteja.007@gmail.com',
        From : "venkat.krishna.teja.066@gmail.com",
        Subject : "Test email",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
        message => alert(message)
    );
}