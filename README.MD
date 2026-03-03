# Dokumentasi

File ini dibuat untuk membantu memahami ngoding aplikasi FE dengan Library React.js

## Prerequisite

1. Nodejs

## Materi Yang Ada Disini

- Setup React
- Setup React Router
- Setup Tailwind
- Setup Axios
- Components Base

## Instalasi

1. Setup projek node.js `npm init -y`
2. Install React Vite `npm create vite@latest .` kita gunakan `.` untuk menginstall di folder sekarang
3. Setelah itu pilih yang `Ignore files and continue`, sesuai dengan yang kalian butuhkan
4. Lalu pilih `React` karena kita bakal buat projek react
5. Lalu pilih `Javascript` karena kita pake bahasa javascript saja yagn mudah
6. Pilih `No` karena masih beta skip dulu
7. Pilih `No` lagi karena kita mau ngutak ngatik terlebih dahulu.
8. Instlasi react berhasil

## Instlasi Opsional dan Wajib

1. Untuk yang wajib adalah `axios` untuk fetch API / hit API / ngambil data dari API agar lebih mudah
2. Commandnya itu `npm install axios`
3. Untuk opsional untuk styling, disini admin pake `tailwind` karena bisa leluasa walau rumit. Dan kalian bisa nyoba styling yang lain
4. Commandnya itu `npm install tailwindcss @tailwindcss/vite`
5. Lalu settingnya ada di dokumentasi, dan cek file yang bersangkutan

## Instlasi Lanjutan

1. Untuk lanjutan adalah `react-router-dom` untuk routing pada halaman, atau perpindahan halaman

## Langkah-langkah utama yang dilakukan

1. Kita akan bermain di file `src` dan ada yang perlu diubah agar saat maintance lebih nyaman. Ubah menjadi seperti ini.

```
assets/ --> untuk menaruh asset gambar atau lainnya
components/ --> untuk menaruh component kayak button, card, dll
pages/ --> untuk menaruh halaman kayak home, about, dll
styles/ --> untuk menaruh styling kayak tailwind
App.jsx --> Kita taruh untuk menaruh routesnya
main.jsx --> File utama
```

2. Silahkan setting sesuai kebutuhan, disini admin ubah `index.html` untuk bagian judul tabnya, lalu bagian `main.jsx` diganti ke stylenya agar menjadi tailwind, lalu `App.jsx` buat testing tailwindnya jalan gak

```(App.jsx)
function App() {
  return (
    <>
      <h1 className='text-red-500'>Test</h1>
    </>
  )
}

export default App
```

3. Lalu setting untuk routes agar bisa pindah pindah halaman caranya ...
4. Ubah `App.jsx` menjadi router, silahkan lihat filenya, lalu buat file `HomePage.jsx` di folder `src/pages` untuk testingnya.

## Langkah Selanjutnya

1. Buat file di folder `pages/` dijadikan untuk pagesnya
2. BUat file di folder `components/` dijadikan untuk componentnya
3. Lalu tinggal di combine kan saja

## Untuk Menjalankan

1. `npm run dev` untuk menjalankan projeknya
