/**
 * Data Struktur Program SAPA STATUS 2045
 * Meliputi Makna Filosofis, Indikator Program (Input, Proses, Output, Outcome),
 * Roadmap 2026-2045, Ekosistem Kolaborasi, dan Simulasi Dashboard Monitoring.
 */

export const programIdentity = {
  name: "SAPA STATUS 2045",
  tagline: "Kenali. Periksa. Dukung.",
  subtagline: "Langkah kecil mengenali risiko, memeriksa status, dan mendukung sesama untuk Gorontalo sehat menuju Indonesia 2045.",
  description: "Platform edukasi dan navigasi layanan HIV untuk mendukung upaya promotif dan preventif di Provinsi Gorontalo menuju generasi sehat dan unggul 2045.",
  makna: {
    sapa: [
      { letter: "S", word: "Menyapa", desc: "Membangun komunikasi hangat, ramah, dan empatik tanpa membedakan latar belakang." },
      { letter: "A", word: "Memberikan Informasi", desc: "Menyediakan edukasi ilmiah, transparan, dan terpercaya tentang HIV/AIDS." },
      { letter: "P", word: "Mengarahkan", desc: "Menavigasi masyarakat dengan jelas menuju faskes pemeriksaan dan pengobatan." },
      { letter: "A", word: "Mendampingi", desc: "Hadir merangkul dan mendampingi perjalanan kesehatan mental maupun fisik tanpa stigma." }
    ],
    status: "Mengajak masyarakat memahami pentingnya mengetahui status HIV melalui pemeriksaan yang tepat dan layanan kesehatan yang terpercaya.",
    tahun2045: "Menempatkan kesehatan generasi muda sebagai bagian integral dari upaya mewujudkan Indonesia Emas 2045 yang berdaya saing global."
  }
}

// 4 Kartu "Mengapa SAPA STATUS 2045?"
export const whyCards = [
  {
    title: "KENALI",
    subtitle: "Literasi Tanpa Mitos",
    description: "Dapatkan informasi HIV/AIDS yang benar, sederhana, dan mudah dipahami oleh seluruh lapisan generasi muda.",
    icon: "BookOpen",
    color: "emerald"
  },
  {
    title: "PERIKSA",
    subtitle: "Kepastian Status Kesehatan",
    description: "Mengetahui status HIV melalui layanan pemeriksaan merupakan langkah penting dalam menjaga kesehatan dan masa depan.",
    icon: "CheckCircle",
    color: "purple"
  },
  {
    title: "DUKUNG",
    subtitle: "Solidaritas Tanpa Stigma",
    description: "Ciptakan lingkungan yang bebas stigma dan diskriminasi terhadap ODHIV agar setiap individu merasa dirangkul dan dihargai.",
    icon: "HeartHandshake",
    color: "rose"
  },
  {
    title: "AKSES",
    subtitle: "Navigasi Layanan Terpadu",
    description: "Temukan informasi dan arah menuju fasilitas pelayanan kesehatan rujukan resmi di seluruh Provinsi Gorontalo.",
    icon: "MapPin",
    color: "yellow"
  }
]

// Indikator Program (Tabel Input, Proses, Output, Outcome) - Bagian 16
export const indikatorProgram = {
  input: [
    { item: "SDM Tenaga Kesehatan & Konselor", detail: "Dokter, perawat, konselor VCT terlatih, dan kader pemuda sebaya (peer educator)." },
    { item: "Media Digital & Platform SAPA", detail: "Website interaktif, sistem navigasi responsif, modul edukasi digital, materi multimedia." },
    { item: "Fasilitas Kesehatan Terintegrasi", detail: "Puskesmas rujukan, laboratorium tes cepat, poli PDP rumah sakit di Provinsi Gorontalo." },
    { item: "Mitra Program & Pemangku Kepentingan", detail: "Dinas Kesehatan, Perguruan Tinggi, BEM/organisasi pemuda, komunitas peduli HIV." }
  ],
  proses: [
    { item: "Edukasi Digital Berkelanjutan", detail: "Penyebarluasan konten edukatif interaktif melalui web dan kanal digital pemuda." },
    { item: "Kampanye Bebas Stigma", detail: "Advokasi publik, seminar kampus, dan kampanye digital 'Stop Stigma, Start Support'." },
    { item: "Status Check Interaktif", detail: "Simulasi evaluasi pemahaman publik 5 pertanyaan tanpa pengumpulan data pribadi." },
    { item: "Navigasi Layanan (SAPA Navigator)", detail: "Panduan alur 7 langkah dari rasa khawatir hingga pendampingan medis." },
    { item: "Promosi Skrining Sukarela", detail: "Mengajak kelompok usia produktif memanfaatkan faskes untuk tes kesehatan berkala." }
  ],
  output: [
    { item: "Masyarakat Terliterasi", detail: "Peningkatan jumlah remaja dan pemuda yang terpapar informasi HIV yang valid." },
    { item: "Peningkatan Skor Pengetahuan", detail: "Skor pemahaman mitos vs fakta meningkat secara terukur pada komunitas target." },
    { item: "Kesadaran Skrining Tumbuh", detail: "Peningkatan kemauan mandiri untuk mendatangi faskes melakukan tes sukarela." },
    { item: "Akses Layanan Tepat Sasaran", detail: "Pengguna website terhubung dan mengetahui rute ke faskes rujukan yang sesuai." }
  ],
  outcome: [
    { item: "Pemanfaatan Layanan Meningkat", detail: "Kunjungan ke klinik VCT dan puskesmas rujukan meningkat secara bertahap." },
    { item: "Penguatan Deteksi Dini", detail: "Kasus terdeteksi pada fase awal (HIV) sebelum berkembang menjadi infeksi lanjut (AIDS)." },
    { item: "Kepatuhan Pengobatan (ARV)", detail: "Retensi pengobatan ARV tinggi dan tercapainya supresi viral load (Undetectable)." },
    { item: "Lingkungan Bebas Stigma", detail: "Terwujudnya iklim sosial yang ramah, inklusif, dan mendukung produktivitas ODHIV menuju 2045." }
  ]
}

// Roadmap 2026 - 2045 (Bagian 17)
export const roadmapData = [
  {
    year: "2026",
    title: "Inisiasi, Pengembangan & Uji Coba",
    description: "Peluncuran platform digital SAPA STATUS 2045, standardisasi materi edukasi bersama Dinkes Gorontalo, dan uji coba di lingkungan kampus serta puskesmas percontohan.",
    milestones: [
      "Peluncuran prototipe web platform SAPA STATUS 2045",
      "Kemitraan strategis dengan Dinkes Gorontalo & Puskesmas rujukan",
      "Uji coba fitur Status Check & SAPA Navigator pada 1.000 mahasiswa"
    ],
    status: "Fase Berjalan (Saat Ini)",
    active: true
  },
  {
    year: "2027–2030",
    title: "Penguatan Edukasi Digital & Kolaborasi Layanan",
    description: "Integrasi menyeluruh dengan jejaring faskes kabupaten/kota, pembentukan duta pemuda SAPA di seluruh perguruan tinggi Gorontalo, dan penguatan kampanye anti-stigma.",
    milestones: [
      "Perluasan ke 6 Kabupaten/Kota di Provinsi Gorontalo",
      "Pelatihan 500 Peer Educators (Duta Pemuda Sehat 2045)",
      "Peningkatan akses rujukan pemeriksaan tes cepat di FKTP"
    ],
    status: "Rencana Menengah 1",
    active: false
  },
  {
    year: "2031–2035",
    title: "Perluasan Cakupan & Pendampingan Komprehensif",
    description: "Peningkatan kapasitas faskes rujukan viral load, perluasan program PPIA untuk ibu hamil di daerah terpencil, dan otomatisasi rujukan digital.",
    milestones: [
      "Cakupan skrining dini menyentuh 80% kelompok sasaran usia 15–24 tahun",
      "Peningkatan retensi terapi ARV dan pemeriksaan viral load rutin",
      "Penyediaan hotline tele-konseling psikososial terpadu"
    ],
    status: "Rencana Menengah 2",
    active: false
  },
  {
    year: "2036–2040",
    title: "Integrasi & Penguatan Sistem Kesehatan Daerah",
    description: "Penyatuan sistem pemantauan dengan data kesehatan nasional SatuSehat, penguatan perlindungan sosial bagi ODHIV, dan evaluasi dampak epidemiologis.",
    milestones: [
      "Sistem pemantauan epidemiologi digital yang tangguh dan terdesentralisasi",
      "Penurunan angka kasus baru infeksi HIV secara drastis",
      "Zero stigma sosial di sektor pendidikan dan ketenagakerjaan daerah"
    ],
    status: "Rencana Lanjutan",
    active: false
  },
  {
    year: "2041–2045",
    title: "Generasi Sehat, Unggul & Berkelanjutan (Indonesia Emas 2045)",
    description: "Tercapainya target Ending AIDS di Gorontalo: Zero New Infections, Zero AIDS-Related Deaths, Zero Discrimination menuju generasi emas berdaya saing.",
    milestones: [
      "Tercapainya target Three Zeroes (0 Kasus Baru, 0 Kematian AIDS, 0 Diskriminasi)",
      "Generasi muda Gorontalo produktif, sehat mental dan fisik",
      "Model percontohan nasional program promotif-preventif digital berkelanjutan"
    ],
    status: "Visi Puncak 2045",
    active: false
  }
]

// Ekosistem Kolaborasi (Bagian 18)
export const ecosystemLayers = [
  {
    level: 1,
    role: "Dinas Kesehatan Provinsi & Daerah",
    fokus: "Regulator, Pengarah Kebijakan & Penyedia Pedoman Resmi",
    action: "Menyediakan data resmi, kurikulum edukasi, standarisasi faskes, dan alokasi logistik ARV.",
    color: "emerald"
  },
  {
    level: 2,
    role: "Puskesmas / Rumah Sakit Rujukan",
    fokus: "Pelaksana Layanan Medis, VCT & Terapi PDP",
    action: "Melakukan pemeriksaan darah terstandar, konseling pra/pasca-tes, inisiasi ARV, dan cek viral load.",
    color: "purple"
  },
  {
    level: 3,
    role: "Perguruan Tinggi & Akademisi",
    fokus: "Riset, Inovasi Program & Edukasi Kampus",
    action: "Melakukan riset perilaku kesehatan, integrasi KKN tematik kesehatan, dan forum ilmiah pemuda.",
    color: "yellow"
  },
  {
    level: 4,
    role: "Organisasi Kepemudaan & BEM",
    fokus: "Penggerak Sebaya & Fasilitator Dialog Remaja",
    action: "Menyelenggarakan workshop santai tanpa tabu, menyebarkan kampanye ramah pemuda, dan advokasi sebaya.",
    color: "rose"
  },
  {
    level: 5,
    role: "Komunitas Peduli HIV & Kelompok Dukungan Sebaya",
    fokus: "Pendampingan Moral & Pembongkar Stigma Sosial",
    action: "Mendampingi pengobatan ODHIV, memfasilitasi safe space, dan mengedukasi keluarga pasien.",
    color: "emerald"
  },
  {
    level: 6,
    role: "Media Massa & Platform Digital",
    fokus: "Penyebarluasan Pesan Publik & Penjernih Hoaks",
    action: "Mengamplifikasi narasi optimisme, meluruskan disinformasi, dan menyuarakan toleransi.",
    color: "purple"
  },
  {
    level: 7,
    role: "Masyarakat Umum & Keluarga",
    fokus: "Lingkungan Pendukung yang Rangkul & Inklusif",
    action: "Menciptakan ruang aman tanpa diskriminasi di rumah, sekolah, dan tempat kerja.",
    color: "rose"
  }
]

// Dashboard Monitoring Simulasi (Bagian 15)
export const simulationMetrics = [
  {
    id: "jangkauan-edukasi",
    label: "Jangkauan Edukasi Digital",
    value: "14.280",
    unit: "Generasi Muda",
    change: "+28.4% bln ini",
    isPositive: true,
    desc: "Jumlah pemuda yang mengakses materi literasi HIV melalui web dan media digital."
  },
  {
    id: "pengguna-status-check",
    label: "Pengguna Status Check",
    value: "4.150",
    unit: "Sesi Selesai",
    change: "+19.2% bln ini",
    isPositive: true,
    desc: "Jumlah kuis edukasi pemahaman HIV yang diselesaikan (tanpa simpan PII)."
  },
  {
    id: "pengguna-sapa-navigator",
    label: "Pengguna SAPA Navigator",
    value: "2.340",
    unit: "Alur Dituntaskan",
    change: "+15.7% bln ini",
    isPositive: true,
    desc: "Pengguna yang menuntaskan alur 7 langkah persiapan dan pencarian panduan."
  },
  {
    id: "rujukan-ke-layanan",
    label: "Rujukan ke Direktori Layanan",
    value: "890",
    unit: "Akses Direktori",
    change: "+31.0% bln ini",
    isPositive: true,
    desc: "Interaksi klik mencari lokasi faskes terdekat di Provinsi Gorontalo."
  },
  {
    id: "pemeriksaan-hiv",
    label: "Estimasi Pemeriksaan Sukarela",
    value: "420",
    unit: "Pemeriksaan Terfasilitasi",
    change: "+12.8% bln ini",
    isPositive: true,
    desc: "Estimasi konfirmasi pemeriksaan skrining sukarela yang terdorong oleh platform."
  },
  {
    id: "keterhubungan-layanan",
    label: "Keterhubungan dengan Layanan",
    value: "96.4%",
    unit: "Tingkat Terhubung",
    change: "+3.2% vs baseline",
    isPositive: true,
    desc: "Persentase kasus terindikasi yang berhasil terhubung dengan konselor/faskes."
  },
  {
    id: "edukasi-anti-stigma",
    label: "Interaksi Edukasi Anti-Stigma",
    value: "9.850",
    unit: "Kartu Terbaca",
    change: "+42.1% bln ini",
    isPositive: true,
    desc: "Jumlah kartu Mitos vs Fakta dan materi anti-stigma yang dibuka oleh pengunjung."
  }
]
