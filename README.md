# Tantangan: Promise

Seorang developer diminta untuk membuat suatu program yang menghitung jumlah film yang menyebabkan penontonnya `'marah'` atau `'tidak marah'` di sebuah bioskop.

Disediakan 2 buah file yang **TIDAK PERLU DIMODIFIKASI**:  `external.js` dan `index.js`.

**HANYA LAKUKAN MODIFIKASI PADA FILE `promise.js`**

`external.js` berisi dua buah promise `promiseTheaterIXX` dan `promiseTheaterVGC`. Saat resolve/fulfilled, promise tersebut akan mengembalikan sebuah array of object dengan format sebagai berikut:

```
[
    {
        namaFilm: "Film A",
        hasil: "marah"
    },
    {
        namaFilm: "Film B",
        hasil: "tidak marah"
    },
    ...
]
```

`index.js` adalah file utama tempat memanggil promise yang perlu kalian buat, untuk mengembalikan jumlah film yang membuat `'marah'` dan `'tidak marah'`.

Buatlah sebuah promise pada file `promise.js` dengan nama `promiseOutput`. `promiseOutput` akan menerima parameter `emosi` yang berisi `'marah'` atau `'tidak marah'`. 

Fungsi `promiseOutput` ini akan membaca data dari `promiseTheaterIXX` dan `promiseTheaterVGC` secara berurutan, kemudian menghitung jumlah `'marah'` atau `'tidak marah'` dari film yang ditonton oleh seseorang.

Contoh:
- `promiseOutput('marah')` akan menghasilkan output `4`
- `promiseOutput('tidak marah')` akan menghasilkan output `2`
