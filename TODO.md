**HomeWork 1**

Buat aplikasi Reat dengan fitur-fitur berikut:

1. Bilah navigasi menggunakan Link dengan tautan ke "Home", "Products", "About", dan "Contact".

2. Rute untuk setiap halaman:

- Beranda: Pesan selamat datang.
- Produk: Daftar nama produk dengan tautan ke halaman detail produk individual (gunakan rute dinamis).
- Tentang Kami: Deskripsi singkat aplikasi.
- Kontak: Formulir dengan kolom untuk nama, email, dan pesan.

3. Rute dinamis untuk halaman detail produk, di mana setiap halaman menampilkan informasi tentang produk tertentu berdasarkan ID produk dari URL.

4. Halaman 404 yang menampilkan pesan kesalahan khusus untuk rute yang tidak terdefinisi.

5. Pastikan bilah navigasi menyoroti tautan aktif menggunakan Link.

**HomeWork 2**

Buat formulir React dengan persyaratan berikut:

1. Formulir pendaftaran dengan kolom untuk nama, email, kata sandi, dan usia

2. Gunakan `useState` untuk menangani input formulir dan mengirimkan data ke konsol

3. Refaktor formulir menggunakan `react-hook-form` untuk manajemen state yang lebih baik

4. Implementasikan validasi formulir menggunakan `zod` dengan aturan berikut:

- Nama: Wajib, minimal 3 karakter.

- Email: Harus berupa format email yang valid.

- Kata sandi: Minimal 8 karakter, berisi minimal 1 huruf besar, dan 1 angka.

- Usia: Harus berupa angka dan minimal 18 tahun.

5. Tampilkan pesan kesalahan jika validasi gagal.

6. Fitur bonus:

- Setelah pengiriman formulir, simpan data yang dikirimkan dalam daftar dan tampilkan sebagai kartu di bawah formulir.

- Setiap kartu harus menampilkan nama, email, kata sandi, dan usia yang terdaftar
- Simpan data dalam state lokal

**HomeWork 3**

Buat aplikasi React yang mengambil dan menampilkan daftar pengguna dari API https://jsonplaceholder.typicode.com/users:

1. Gunakan fetch atau axios untuk mengambil data pengguna saat tombol diklik.

2. Tampilkan detail pengguna dalam format daftar (menampilkan nama, email, dan perusahaan).

3. Tambahkan loading dan error handling. Tampilkan spinner atau pesan jika diperlukan.

4. Bonus: Perbaiki logika pengambilan data agar menggunakan react-query untuk performa yang lebih baik.