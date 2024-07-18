let favNumber = 9;
let baseURL = "https://numbersapi.com";

// one
$.getJSON(`${baseURL}/${favorNumber}?json`).then(data => {
    console.log(data);
});

// two

let favNumbers = [1, 2, 3];
$.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
    console.log(data);
});

// three
Promise.all(
    Array.from({ length: 4}, () => {
        return $.getJSON(`${baseURL}/${favNumber}?json`);
    })

).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}<p>`));
});
