// ! JANGAN DIMODIFIKASI
const promiseTheaterIXX = async () => {
  await new Promise((r) => setTimeout(r, 200));

  return new Promise((resolve) => {
    const hasilSetelahMenonton = [
      {
        namaFilm: 'World of the married',
        hasil: 'marah',
      },
      {
        namaFilm: 'Inside Out',
        hasil: 'tidak marah',
      },
      {
        namaFilm: 'Nanti Kita Cerita Tentang Hari Ini',
        hasil: 'marah',
      },
    ];

    return resolve(hasilSetelahMenonton);
  });
};

const promiseTheaterVGC = async () => {
  await new Promise((r) => setTimeout(r, 200));

  return new Promise((resolve) => {
    const hasilSetelahMenonton = [
      {
        namaFilm: 'KKN di Desa Penari',
        hasil: 'marah',
      },
      {
        namaFilm: 'Kukira Kau Rumah',
        hasil: 'tidak marah',
      },
      {
        namaFile: 'The Other Side',
        hasil: 'marah',
      },
    ];

    return resolve(hasilSetelahMenonton);
  });
};

module.exports = {
  promiseTheaterIXX,
  promiseTheaterVGC,
};
