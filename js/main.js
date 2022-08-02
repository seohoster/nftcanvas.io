// ## HEADER ## //

fetch("./includes/header.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.querySelector("header").innerHTML = data;
    });

    
// ## FOOTER ## //
fetch("./includes/footer.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });