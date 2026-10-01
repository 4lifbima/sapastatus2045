/**
 * Fasilitas Pelayanan Kesehatan Rujukan Resmi HIV di Provinsi Gorontalo
 * Sesuai Dokumen Publikasi & Perencanaan Dinas Kesehatan Provinsi Gorontalo
 * 
 * CATATAN PENTING:
 * Data fasilitas kesehatan ini dikutip dari rilis resmi Dinas Kesehatan Provinsi Gorontalo.
 * Alamat detail, jam layanan, dan nomor telepon tidak direka-reka demi menjaga validitas informasi publik.
 */

export const layananGorontalo = [
  {
    id: "pusk-limboto",
    nama: "Puskesmas Limboto",
    wilayah: "Kabupaten Gorontalo",
    kategori: "Puskesmas",
    fokusLayanan: "Layanan HIV/PIMS & Skrining Dasar",
    layananTersedia: [
      "Layanan HIV dan Infeksi Menular Seksual (PIMS)",
      "Pemeriksaan dan Tes HIV Sukarela (VCT/PITC)",
      "Informasi & Konseling Layanan Edukasi Kesehatan"
    ],
    deskripsi: "Fasilitas pelayanan kesehatan primer yang menyediakan layanan terintegrasi HIV/PIMS serta pendampingan edukasi dini bagi masyarakat umum dan remaja.",
    statusRujukan: "Faskes Tingkat Pertama (FKTP) Rujukan HIV/PIMS",
    tagColor: "emerald"
  },
  {
    id: "rsud-mm-dunda",
    nama: "RSUD MM Dunda Limboto",
    wilayah: "Kabupaten Gorontalo",
    kategori: "Rumah Sakit Daerah",
    fokusLayanan: "Perawatan, Dukungan & Pengobatan (PDP)",
    layananTersedia: [
      "Layanan Perawatan, Dukungan, dan Pengobatan HIV (PDP)",
      "Inisiasi dan Distribusi Terapi Antiretroviral (ARV)",
      "Konseling Klinis Lanjutan dan Manajemen Komorbiditas"
    ],
    deskripsi: "Rumah sakit rujukan utama untuk tata laksana komprehensif orang dengan HIV, mulai dari inisiasi pengobatan ARV hingga monitoring klinis berkelanjutan.",
    statusRujukan: "Faskes Rujukan Lanjutan (FKRTL) Layanan PDP",
    tagColor: "purple"
  },
  {
    id: "rsud-bumi-panua",
    nama: "RSUD Bumi Panua",
    wilayah: "Kabupaten Pohuwato",
    kategori: "Rumah Sakit Daerah",
    fokusLayanan: "Pemantauan Viral Load & Pengobatan HIV",
    layananTersedia: [
      "Layanan terkait Pemeriksaan & Pemantauan Viral Load HIV",
      "Pemeriksaan Laboratorium Evaluasi Terapi ARV",
      "Konseling Keberhasilan Pengobatan (Supresi Virus)"
    ],
    deskripsi: "Fasilitas kesehatan rujukan di wilayah barat Gorontalo yang memperkuat kapasitas pemantauan efektivitas pengobatan melalui pemeriksaan viral load.",
    statusRujukan: "Faskes Rujukan Evaluasi Viral Load",
    tagColor: "yellow"
  },
  {
    id: "pusk-kota-utara",
    nama: "Puskesmas Kota Utara",
    wilayah: "Kota Gorontalo",
    kategori: "Puskesmas",
    fokusLayanan: "Kolaborasi Layanan TB-HIV",
    layananTersedia: [
      "Layanan Kolaborasi TB-HIV (Skrining Silang Terpadu)",
      "Pemeriksaan Dahak & Skrining HIV bagi Pasien TB",
      "Edukasi Pencegahan Koinfeksi TB dan HIV"
    ],
    deskripsi: "Puskesmas pelopor kolaborasi layanan terpadu Tuberkulosis dan HIV di Kota Gorontalo untuk percepatan deteksi dini koinfeksi pernapasan.",
    statusRujukan: "Faskes FKTP Kolaborasi TB-HIV",
    tagColor: "rose"
  },
  {
    id: "rs-bhayangkara",
    nama: "RS Bhayangkara Gorontalo",
    wilayah: "Kota Gorontalo",
    kategori: "Rumah Sakit Khusus/Polri",
    fokusLayanan: "Layanan Ibu Hamil & PPIA",
    layananTersedia: [
      "Layanan Terkait HIV pada Ibu Hamil (Program PPIA)",
      "Pemeriksaan Skrining Antenatal Terpadu (Triple Eliminasi)",
      "Konseling Persalinan Aman & Pencegahan Transmisi ke Bayi"
    ],
    deskripsi: "Fasilitas kesehatan dengan komitmen pencegahan penularan HIV dari ibu ke anak (PPIA) guna memastikan generasi masa depan Gorontalo lahir sehat dan bebas HIV.",
    statusRujukan: "Faskes Rujukan Layanan Maternal & PPIA",
    tagColor: "emerald"
  }
]
