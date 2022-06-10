const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (esmosi)=>{
  try {
    const jumlahEsmosi = (await promiseTheaterIXX()).concat(await promiseTheaterVGC());
    const hasilEsmosi = jumlahEsmosi.filter(element => (element.hasil === esmosi));
    return hasilEsmosi.length;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
