# SAPA STATUS 2045
> **“Kenali. Periksa. Dukung.”**  
> *Platform Inovasi Digital Promotif & Preventif HIV/AIDS Provinsi Gorontalo Menuju Indonesia Emas 2045.*

---

## 📌 1. Gambaran Proyek (Project Overview)
**SAPA STATUS 2045** adalah sebuah ekosistem digital program kesehatan masyarakat yang dirancang untuk memperkuat upaya promotif dan preventif HIV/AIDS di Provinsi Gorontalo. Platform ini dibangun khusus untuk kebutuhan **Lomba Perencanaan Program Kesehatan**, menyajikan pendekatan akademik, profesional, modern, serta ramah bagi generasi muda.

Website ini mengintegrasikan:
1. **Literasi Medis Terbuka & Mitos vs Fakta:** Mematahkan disinformasi dan stigma sosial seputar penularan kontak harian.
2. **Data Epidemiologi Resmi Gorontalo:** Data rilis resmi Dinas Kesehatan Provinsi Gorontalo per 27 April 2026 (periode Nov 2025 – Mar 2026 dan kumulatif 2001–2026) dengan grafik interaktif.
3. **Status Check (Kuis Edukatif 100% Zero PII):** Evaluasi wawasan 5 pertanyaan tanpa menyimpan data pribadi ataupun diagnosis medis.
4. **SAPA Navigator:** Panduan 7 langkah komprehensif dari rasa khawatir hingga pendampingan medis lanjutan.
5. **Direktori Layanan HIV Gorontalo:** Pemetaan fasilitas rujukan resmi (Puskesmas Limboto, RSUD MM Dunda, RSUD Bumi Panua, Puskesmas Kota Utara, RS Bhayangkara) dengan penafian verifikasi faskes.
6. **Roadmap 2026–2045 & Dashboard Monitoring Simulasi:** Arsitektur monitoring program untuk presentasi inovasi masa depan.
7. **Ekosistem Kolaborasi & Logframe Indikator:** Tabel terstruktur Input, Proses, Output, dan Outcome multi-sektor.

---

## 🛠️ 2. Tech Stack & Arsitektur
- **Frontend Framework:** [Vue.js 3](https://vuejs.org/) (Composition API, `<script setup>`)
- **Routing Engine:** [Vue Router 4](https://router.vuejs.org/) (Full endpoint routing: `/`, `/tentang`, `/data-gorontalo`, `/kenali-hiv`, `/status-check`, `/sapa-navigator`, `/layanan`, `/roadmap`, `/referensi`)
- **Styling System:** [Tailwind CSS 3](https://tailwindcss.com/) dengan palet warna resmi (`#10B981`, `#8B5CF6`, `#F43F5E`, `#FACC15`), shadow halus anti "AI slop", dan font Inter.
- **Visualisasi Grafik:** [Chart.js](https://www.chartjs.org/) & [vue-chartjs](https://vue-chartjs.org/) (Bar Chart & Donut Chart).
- **Interaktivitas:** `canvas-confetti` untuk selebrasi Status Check, card 3D flips, selector kebutuhan dinamis.
- **Build Tool:** [Vite 6](https://vitejs.dev/)

---

## 🌐 3. Struktur Halaman & Endpoint (Vue Router)

| No | Endpoint URL | Nama Halaman | Konten Utama & Fitur |
|---|---|---|---|
| 1 | `/` | **Beranda (Home)** | Hero banner ramah pemuda, 4 Kartu "Mengapa SAPA STATUS 2045", Fitur interaktif "Aku Bisa Mulai Dari Mana?", Ringkasan Data Gorontalo, Sneak peek Mitos vs Fakta, 3 Kartu Lawan Stigma. |
| 2 | `/tentang` | **Tentang Program** | Makna SAPA, STATUS, dan 2045, Tabel Indikator Input-Proses-Output-Outcome (Logic Model), Visualisasi Ekosistem Kolaborasi 7 Sektor. |
| 3 | `/data-gorontalo` | **Data Gorontalo** | Analisis resmi Dinkes Gorontalo: 83 kasus baru (Nov 25 - Mar 26), 1.538 kasus kumulatif, 739 pengguna ARV, distribusi usia 15-24 th (34 kasus), Bar Chart & Donut Chart interaktif. |
| 4 | `/kenali-hiv` | **Kenali HIV** | Definisi HIV & AIDS, Perbedaan medis, Dari mana HIV berasal, Cara penularan & yang TIDAK menular, 8 Kartu Interaktif Mitos vs Fakta (Flip/Accordion), Alur Pengobatan ARV (5 Fase), Penjelasan Viral Load & U=U. |
| 5 | `/status-check` | **Status Check** | Kuis edukasi pemahaman publik 5 soal pilihan ganda, kalkulasi skor edukasi real-time, zero PII, strict disclaimer bukan alat diagnosis. |
| 6 | `/sapa-navigator` | **SAPA Navigator** | Panduan alur 7 langkah interaktif dari kekhawatiran hingga tindak lanjut nakes dengan checklist kesiapan mental dan tombol Cari Layanan. |
| 7 | `/layanan` | **Cari Layanan** | Direktori 5 faskes resmi Gorontalo (Pusk. Limboto, RSUD MM Dunda, RSUD Bumi Panua, Pusk. Kota Utara, RS Bhayangkara) dengan filter kategori & search bar. |
| 8 | `/roadmap` | **Roadmap & Simulasi** | Timeline jangka panjang 2026–2045 menuju Gorontalo Bebas AIDS, Dashboard Simulasi Monitoring Program dengan 7 indikator terukur (label SIMULASI). |
| 9 | `/referensi` | **Referensi & Sumber** | Sumber resmi rilis Dinkes Gorontalo 27 April 2026, Pedoman WHO & UNAIDS, Deklarasi Penafian Medis & Keamanan Privasi Pengguna. |

---

## 🚀 4. Cara Menjalankan & Membuka Website

### Prasyarat:
- [Node.js](https://nodejs.org/) (versi 18 ke atas disarankan)
- [npm](https://www.npmjs.com/)

### Langkah Menjalankan:
1. Buka terminal pada folder proyek:
   ```bash
   cd d:\website\kumpulan-web\SAPASTATUS2045
   ```
2. Jalankan server lokal:
   ```bash
   npm run dev
   ```
3. Buka browser dan akses URL lokal:
   ```
   http://localhost:5174/
   ```

---

## 📝 5. Cara Mengedit & Mengembangkan Website

- **Mengubah Teks & Data Epidemiologi:**  
  Edit file di `src/data/gorontaloData.js`. Angka grafik dan kartu statistik akan diperbarui secara otomatis.
- **Mengedit / Menambah Mitos vs Fakta:**  
  Edit file di `src/data/mitosFaktaData.js`.
- **Menambah / Memperbarui Faskes Gorontalo:**  
  Edit file di `src/data/layananData.js`.
- **Mengubah Soal Kuis Status Check:**  
  Edit file di `src/data/quizData.js`.
- **Mengubah Konten Halaman Tertentu:**  
  Buka folder `src/views/` dan pilih file `.vue` yang sesuai (contoh: `HomeView.vue`, `KenaliHivView.vue`, dll).
- **Membangun Bundle Produksi (Build Deployment):**  
  ```bash
  npm run build
  ```
  File statis siap deploy akan terdistribusi di folder `dist/`.

---

## 🔒 6. Kepatuhan Medis & Privasi (Zero PII Statement)
Website ini tunduk pada etika kesehatan masyarakat:
- **Bukan Alat Diagnosis:** Tidak ada diagnosis medis atau klaim penentuan status positif/negatif.
- **Zero PII (Personally Identifiable Information):** Tidak meminta Nama, NIK, nomor telepon, alamat, ataupun data riwayat medis pengguna. Jawaban kuis hanya berada di memori sesi sementara browser dan langsung hilang saat di-refresh.
- **Anti-Stigma:** Seluruh narasi mengangkat empati, sains, dan solidaritas kemanusiaan menuju **Indonesia Emas 2045**.

---
*© 2026 SAPA STATUS 2045. All rights reserved.*
