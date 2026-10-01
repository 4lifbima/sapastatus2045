/**
 * Data Resmi Dinas Kesehatan Provinsi Gorontalo
 * Sumber: "Deteksi Dini Meningkat, 83 Kasus HIV-AIDS Ditemukan di Gorontalo", 27 April 2026
 * Catatan: Data digunakan sebagai gambaran situasi dan dasar perencanaan program inovasi.
 */

export const gorontaloOverview = {
  sourceTitle: "Deteksi Dini Meningkat, 83 Kasus HIV-AIDS Ditemukan di Gorontalo",
  sourceDate: "27 April 2026",
  sourcePublisher: "Dinas Kesehatan Provinsi Gorontalo",
  totalRecentCases: 83, // Nov 2025 - Mar 2026
  totalCumulativeCases: 1538, // 2001 - Mar 2026
  activeARV: 739,
  pendingARV: 39,
  
  // Periods
  periods: [
    {
      period: "November – Desember 2025",
      total: 31,
      hiv: 22,
      aids: 9,
      note: "Peningkatan penjaringan awal program skrining terpadu"
    },
    {
      period: "Januari – Maret 2026",
      total: 52,
      hiv: 41,
      aids: 11,
      note: "Perluasan deteksi dini faskes dan layanan sukarela"
    }
  ],

  // Age distribution for Jan-Mar 2026
  ageDistribution: [
    {
      range: "15–24 tahun",
      label: "Usia Muda / Remaja Produktif",
      count: 34,
      percentage: "41.0%",
      color: "#8B5CF6", // Secondary Purple
      highlight: true
    },
    {
      range: "25–49 tahun",
      label: "Usia Dewasa Produktif",
      count: 45,
      percentage: "54.2%",
      color: "#10B981", // Primary Emerald
      highlight: true
    },
    {
      range: ">50 tahun",
      label: "Usia Lanjut",
      count: 4,
      percentage: "4.8%",
      color: "#FACC15", // Tertiary Yellow
      highlight: false
    }
  ],

  // Cumulative breakdown
  cumulative: {
    total: 1538,
    hiv: 913,
    aids: 625,
    hivPercentage: 59.36,
    aidsPercentage: 40.64
  },

  // Treatment status
  treatmentStatus: {
    onARV: 739,
    notStarted: 39,
    retentionRate: "95.0%"
  }
}
