document.getElementById('emailLink').addEventListener('click', function(e) {
    e.preventDefault();
    var encodedEmail = 'ZW1lci5hcmVAcHJvdG9ubWFpbC5jb20='; // Base64 encoded email
    var email = atob(encodedEmail);
    navigator.clipboard.writeText(email).then(function() {
        var message = document.getElementById('copyMessage');
        message.style.display = 'block';
        setTimeout(function() {
            message.style.display = 'none';
        }, 2000);
    }).catch(function(err) {
        console.error('Failed to copy: ', err);
    });
});