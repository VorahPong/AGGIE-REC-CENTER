const userId = localStorage.getItem('userId');

const qrImage = document.querySelector('#qrImage');
qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + userId;
