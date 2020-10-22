// const xhr = new XMLHttpRequest();
// xhr.open(
//   "GET",
//   "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/advertisments"
// );

// xhr.send();
// console.log("1");
// xhr.onload = () => {
//   console.log("2");
//   console.log("RESPONSE", xhr.response);
// };
// console.log("3");


fetch("https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/advertisments");

.then((resp) => {
    return resp.json();
})

.then((data) => {
   console.log(data)
});