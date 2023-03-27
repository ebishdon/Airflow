function validate() {
    var email = document.querySelector('#email').value
    var pass = document.querySelector('#pass').value

    var len = email.length



    if (email.length >= 8 && pass.length >= 8) {
        alert("Success")
        window.location.href = 'index.html';

    } else {
        alert('Input should be more than 8 character')
    }
}