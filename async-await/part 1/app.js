let favNumber = 5;
let baseUrl = "http://numbersapi.com";

// part 1

async function part1() {
    let data = await $.getJSON(`${baseUrl}/${favNumber}?json`);
    console.log(data);
}
part1();

// part 2
const favNumbers = [1, 2, 3, 4, 5];
async function part2() {
    let data = await $.getJSON(`${baseUrl}/${favNumbers}?json`);
    console.log(data);
}
part2();

// part 3
async function part3() {
    let facts = await Promise.all(
      Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
    );
    facts.forEach(data => {
      $('body').append(`<p>${data.text}</p>`);
    });
  }
  part3();
