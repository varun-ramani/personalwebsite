var numWindows = 0;

function createPages(page) {
    var newWindow = open(page);
    var newWindow2 = open(page);
    var newWindow3 = open(page);
    setTimeout(() => {
        newWindow.close();
        newWindow2.close();
        newWindow3.close();
    }, 3000);
}

var domain = prompt("Enter the URL of the page: ");

setInterval(() => createPages(domain), 5000);
