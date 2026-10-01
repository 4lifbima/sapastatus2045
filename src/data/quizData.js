/**
 * Data Kuis Edukatif STATUS CHECK
 * Sesuai Bagian 8 & 23 Dokumen REQUIREMENT_WEBSITE.md
 * 
 * ATURAN KETAT:
 * 1. Ini adalah kuis edukasi pemahaman publik, BUKAN skrining klinis.
 * 2. Tidak ada istilah positif / negatif / diagnosis HIV.
 * 3. Tidak ada penyimpanan data pribadi (Zero PII).
 */

export const statusCheckQuestions = [
  {
    id: 1,
    question: "Apakah HIV dapat menular melalui aktivitas sehari-hari seperti berjabat tangan atau berpelukan?",
    options: [
      { text: "Ya, bisa menular", isCorrect: false },
      { text: "Tidak, tidak menular", isCorrect: true }
    ],
    explanation: "Tepat sekali! HIV tidak menular melalui sentuhan kulit, jabat tangan, keringat, maupun pelukan. Virus HIV hanya menular lewat pertukaran cairan tubuh spesifik seperti darah atau hubungan seksual tanpa pengaman.",
    hint: "Pikirkan tentang sifat penularan virus dan mitos kontak sosial sehari-hari."
  },
  {
    id: 2,
    question: "Apakah pemeriksaan HIV di fasilitas kesehatan penting untuk mengetahui status kesehatan diri secara pasti?",
    options: [
      { text: "Ya, sangat penting", isCorrect: true },
      { text: "Tidak penting", isCorrect: false }
    ],
    explanation: "Benar! Infeksi HIV seringkali tidak menimbulkan gejala fisik luar selama bertahun-tahun. Satu-satunya cara mengetahui status kesehatan secara pasti adalah dengan pemeriksaan tes darah di faskes.",
    hint: "Status kesehatan tidak bisa ditebak dari penampilan fisik luar."
  },
  {
    id: 3,
    question: "Apakah Orang dengan HIV (ODHIV) berhak mendapatkan perlakuan bermartabat, dukungan moral, dan lingkungan bebas stigma?",
    options: [
      { text: "Ya, harus didukung", isCorrect: true },
      { text: "Tidak perlu", isCorrect: false }
    ],
    explanation: "Luar biasa! Stigma dan diskriminasi adalah penghambat terbesar upaya penanggulangan HIV. Dukungan sosial keluarga dan masyarakat mempercepat pemulihan dan kualitas hidup ODHIV.",
    hint: "Kemanusiaan dan solidaritas adalah kunci Indonesia Emas 2045."
  },
  {
    id: 4,
    question: "Apakah konsumsi obat Antiretroviral (ARV) secara rutin dan disiplin dapat membantu mengendalikan infeksi HIV?",
    options: [
      { text: "Ya, dapat mengendalikan", isCorrect: true },
      { text: "Tidak ada pengaruhnya", isCorrect: false }
    ],
    explanation: "Tepat! Terapi ARV bekerja dengan menghentikan penggandaan virus sehingga jumlah virus dalam darah tersupresi (undetectable). Hal ini menjaga imunitas tubuh tetap prima.",
    hint: "ARV adalah pengobatan standar ilmiah internasional untuk HIV."
  },
  {
    id: 5,
    question: "Apakah mengetahui status HIV sedini mungkin dapat membantu seseorang memperoleh layanan pengobatan dan perawatan yang tepat waktu?",
    options: [
      { text: "Ya, sangat membantu", isCorrect: true },
      { text: "Tidak berpengaruh", isCorrect: false }
    ],
    explanation: "Sangat benar! Deteksi dini membuka pintu akses perawatan segera sebelum virus merusak sistem kekebalan tubuh, mencegah timbulnya komplikasi AIDS.",
    hint: "Deteksi dini merupakan kunci utama pencegahan keparahan penyakit."
  }
]
