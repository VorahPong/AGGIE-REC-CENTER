const functions = document.querySelectorAll('img');

for (let index = 0; index < functions.length; index++) {
    const element = functions[index];
    element.addEventListener('click', function() {
        switch (element.id) {
            case 'schedule' :
                window.location.href = './functionsPage/schedule/schedule.html';
                break;
            case 'scanner' :
                window.location.href = './functionsPage/scanner/scanner.html';
                break;
        }
    });
    
}