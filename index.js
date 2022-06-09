// ! JANGAN DIMODIFIKASI
const { promiseOutput } = require("./promise.js");

(async () => {
  console.log(await promiseOutput("tidak marah")); // Output: 2
  console.log(await promiseOutput("marah")); // Output: 4
})();
