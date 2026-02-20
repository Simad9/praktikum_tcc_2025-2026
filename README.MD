# Dokumentasi

File ini dibuat untuk membantu memahami konsep database dan ORM di Node.js menggunakan Prisma v6

## Prerequisite

1. Nodejs
2. MySQL pake XAMPP

## Instalasi

1. Setup projek node.js `npm init -y`
2. install nodemon `npm i --save-dev nodemon`
3. install package lainnya `npm i express dotenv mysql2`
4. Install prisma versi 6 `npm i prisma@6 @prisma/client@6`

## Langkah langkah untuk Prisma

1. Hapus `prisma.config.ts`
2. Di folder pisma file `schema.prisma` edit sesuai dengan yang ada di file, wajib ini

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

3. Ketika muncul pop up minta pilih versi 6, maka Oke saja
4. Nextnya bikin schmea modelnya dibagian bawah menjadi

```
model User {
  id        Int      @id @default(autoincrement())
  username  String   @unique
  email     String   @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

5. Di file `.env` disetting dulu untuk username password port dan nama_database
6. Lanjut generate `npx prisma generate`
7. Lanjut migrate ``npx prisma migrate dev --name init`
8. Tabel berhasil dibuat

## Langkah Yang dilakukan

1. Buat struktur foldernya dulu

```
config/ --> untuk  naruh config
controllers/ --> untuk logika API nya
models/ --> untuk query nya
routes/ --> untuk route atau endopintnya
index.js --> untuk menjalankan server bisa juga index.js
```

2. Ubah file `.env.example` menjadi `.env` dan ubah dalam sesuai database masing masing
3. Lalu buat bagian models (models/userModels.js) untuk querynya. Berpatokan pada dokumentasi prisma untuk Query nya
4. Lalu untuk controllers (controllers/userController.js) digunakan untuk input user dan menghubungkan dengan models
5. Buat file routes/userRoutes.js untuk route API nya
6. Buat file index.js untuk menjalankan server
7. Test API pake api.rest pake extenstion REST.API
