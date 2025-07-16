// Copy WhatsApp number to clipboard
function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(function() {
        alert('WhatsApp number copied to clipboard!');
    }, function(err) {
        alert('Failed to copy!');
    });
}
