<template>
  <div class="space-y-10 sm:space-y-14 pb-16">
    <!-- Header Pattern Banner -->
    <PageHeader
      badge="Literasi Medis Terbuka"
      badgeColor="emerald"
      :breadcrumbs="[
        { label: 'Beranda', to: '/' },
        { label: 'Edukasi & Data' },
        { label: 'Kenali HIV & AIDS' }
      ]"
      title="Kenali HIV & AIDS"
      subtitle="Pemahaman berbasis ilmu kedokteran untuk mematahkan ketakutan yang tidak beralasan, melindungi diri, serta merangkul sesama tanpa stigma."
    />

    <div class="max-w-5xl mx-auto px-4 sm:px-6 space-y-14 sm:space-y-20">
      <!-- 1. Definisi & Perbedaan HIV vs AIDS -->
      <section class="space-y-6">
      <div class="border-b border-slate-200 pb-3">
        <h2 class="text-xl sm:text-2xl font-black text-[#1E293B]">
          Apa Itu HIV & Apa Itu AIDS?
        </h2>
        <p class="text-slate-500 text-xs mt-0.5">
          Dua istilah medis yang saling berkaitan namun memiliki perbedaan stadium klinis yang sangat nyata.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <!-- HIV Card -->
        <div class="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#10B981] font-extrabold text-[10px] uppercase">
              Virus (Penyebab)
            </span>
            <span class="text-[10px] font-bold text-slate-400">Human Immunodeficiency Virus</span>
          </div>

          <h3 class="text-xl font-black text-[#1E293B]">Apa Itu HIV?</h3>
          
          <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
            <strong>HIV</strong> adalah virus yang menyerang sistem kekebalan tubuh manusia, khususnya sel darah putih CD4 yang bertugas mempertahankan tubuh dari infeksi kuman penyakit.
          </p>

          <p class="text-slate-600 text-xs leading-relaxed">
            Jika tidak ditangani, virus dapat melemahkan daya tahan tubuh. Namun dengan pengobatan rutin, virus dapat ditekan sehingga seseorang tetap hidup sehat dan bugar.
          </p>

          <div class="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2">
            <InformationCircleIcon class="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
            <p><strong>Kunci Medis:</strong> HIV adalah virusnya. Dengan pengobatan dini, orang dengan HIV dapat tetap produktif tanpa mengalami gangguan kesehatan.</p>
          </div>
        </div>

        <!-- AIDS Card -->
        <div class="bg-white p-6 sm:p-7 rounded-3xl border border-purple-200 shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-0.5 rounded-full bg-purple-100 text-[#8B5CF6] font-extrabold text-[10px] uppercase">
              Stadium Lanjut
            </span>
            <span class="text-[10px] font-bold text-slate-400">Acquired Immunodeficiency Syndrome</span>
          </div>

          <h3 class="text-xl font-black text-[#1E293B]">Apa Itu AIDS?</h3>
          
          <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
            <strong>AIDS</strong> adalah kondisi tahap paling lanjut dari infeksi HIV ketika daya tahan tubuh sudah sangat lemah akibat tidak mendapatkan pengobatan dalam jangka panjang.
          </p>

          <p class="text-slate-600 text-xs leading-relaxed">
            Pada kondisi ini, tubuh rentan terhadap berbagai infeksi oportunistik. Tidak semua orang yang terinfeksi HIV akan mengalami AIDS apabila rutin meminum obat ARV.
          </p>

          <div class="p-3 rounded-2xl bg-purple-50 border border-purple-200 text-xs text-purple-950 flex items-start gap-2">
            <ShieldCheckIcon class="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
            <p><strong>Kunci Medis:</strong> Pengobatan ARV teratur mencegah HIV berkembang menjadi AIDS. Deteksi dini adalah kunci perlindungan utama!</p>
          </div>
        </div>

      </div>

      <!-- Dari Mana HIV Berasal? & Gejala Awal -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
          <span class="text-[10px] font-bold text-slate-400 uppercase">Sejarah Epidemiologi</span>
          <h4 class="font-extrabold text-[#1E293B] text-sm">Dari Mana HIV Berasal?</h4>
          <p class="text-xs text-slate-600 leading-relaxed">
            HIV diperkirakan berasal dari virus pada primata di Afrika yang kemudian berpindah ke manusia dan menyebar antarmanusia melalui pertukaran cairan tubuh tertentu.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
          <span class="text-[10px] font-bold text-slate-400 uppercase">Tanda Klinis</span>
          <h4 class="font-extrabold text-[#1E293B] text-sm">Apa Gejala HIV?</h4>
          <p class="text-xs text-slate-600 leading-relaxed">
            Tahap awal dapat menimbulkan gejala mirip flu (demam, ruam, pembengkakan kelenjar). Namun sebagian besar orang tidak memiliki gejala fisik luar. Tes darah di faskes adalah satu-satunya kepastian.
          </p>
        </div>
      </div>
    </section>

    <!-- 2. Bagaimana HIV Menular vs TIDAK Menular -->
    <section class="space-y-6">
      <div class="border-b border-slate-200 pb-3">
        <h2 class="text-xl sm:text-2xl font-black text-[#1E293B]">
          Jalur Penularan: Fakta vs Non-Risiko
        </h2>
        <p class="text-slate-500 text-xs mt-0.5">
          Pahami rute penularan nyata secara ilmiah dan pastikan Anda mengetahui hal-hal yang sama sekali tidak menularkan HIV.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <!-- DAPAT MENULAR -->
        <div class="bg-white p-6 sm:p-7 rounded-3xl border border-rose-200 shadow-sm space-y-3">
          <div class="flex items-center gap-2 text-[#F43F5E]">
            <XCircleIcon class="w-5 h-5 text-[#F43F5E]" />
            <h3 class="text-base font-black text-[#1E293B]">HIV DAPAT Menular Melalui:</h3>
          </div>

          <p class="text-xs text-slate-500">
            Hanya terjadi melalui pertukaran cairan tubuh spesifik yang langsung masuk ke peredaran darah:
          </p>

          <ul class="space-y-2 pt-1">
            <li class="p-3 rounded-2xl bg-rose-50/40 border border-rose-100 flex items-start gap-2.5">
              <span class="w-1.5 h-1.5 rounded-full bg-[#F43F5E] mt-1.5 shrink-0"></span>
              <div>
                <p class="text-xs font-bold text-[#1E293B]">Hubungan seksual tanpa pengaman</p>
                <p class="text-[11px] text-slate-600">Dengan orang yang terinfeksi HIV dan belum menjalani pengobatan supresi virus.</p>
              </div>
            </li>

            <li class="p-3 rounded-2xl bg-rose-50/40 border border-rose-100 flex items-start gap-2.5">
              <span class="w-1.5 h-1.5 rounded-full bg-[#F43F5E] mt-1.5 shrink-0"></span>
              <div>
                <p class="text-xs font-bold text-[#1E293B]">Penggunaan jarum suntik bergantian</p>
                <p class="text-[11px] text-slate-600">Alat suntik atau benda tajam tidak steril yang terkontaminasi darah penderita.</p>
              </div>
            </li>

            <li class="p-3 rounded-2xl bg-rose-50/40 border border-rose-100 flex items-start gap-2.5">
              <span class="w-1.5 h-1.5 rounded-full bg-[#F43F5E] mt-1.5 shrink-0"></span>
              <div>
                <p class="text-xs font-bold text-[#1E293B]">Ibu dengan HIV kepada bayinya</p>
                <p class="text-[11px] text-slate-600">Selama kehamilan, persalinan, atau menyusui (dapat dicegah dengan program PPIA).</p>
              </div>
            </li>

            <li class="p-3 rounded-2xl bg-rose-50/40 border border-rose-100 flex items-start gap-2.5">
              <span class="w-1.5 h-1.5 rounded-full bg-[#F43F5E] mt-1.5 shrink-0"></span>
              <div>
                <p class="text-xs font-bold text-[#1E293B]">Paparan transfusi darah tak tersaring</p>
                <p class="text-[11px] text-slate-600">Kini sangat dieliminasi melalui protokol uji saring darah ketat di unit donor darah faskes.</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- TIDAK MENULAR -->
        <div class="bg-white p-6 sm:p-7 rounded-3xl border border-emerald-200 shadow-sm space-y-3">
          <div class="flex items-center gap-2 text-[#10B981]">
            <CheckCircleIcon class="w-5 h-5 text-[#10B981]" />
            <h3 class="text-base font-black text-[#1E293B]">HIV TIDAK Menular Melalui:</h3>
          </div>

          <p class="text-xs text-slate-500">
            Aman 100%! Kontak sosial sehari-hari sama sekali tidak memiliki risiko transmisi virus:
          </p>

          <div class="grid grid-cols-2 gap-2 pt-1">
            <div class="p-2.5 rounded-2xl bg-emerald-50/40 border border-emerald-100 flex items-center gap-2">
              <UserGroupIcon class="w-4 h-4 text-[#10B981] shrink-0" />
              <span class="text-xs font-bold text-slate-800">Berjabat tangan</span>
            </div>
            <div class="p-2.5 rounded-2xl bg-emerald-50/40 border border-emerald-100 flex items-center gap-2">
              <HeartIcon class="w-4 h-4 text-[#10B981] shrink-0" />
              <span class="text-xs font-bold text-slate-800">Berpelukan</span>
            </div>
            <div class="p-2.5 rounded-2xl bg-emerald-50/40 border border-emerald-100 flex items-center gap-2">
              <ChatBubbleBottomCenterTextIcon class="w-4 h-4 text-[#10B981] shrink-0" />
              <span class="text-xs font-bold text-slate-800">Berbicara bersama</span>
            </div>
            <div class="p-2.5 rounded-2xl bg-emerald-50/40 border border-emerald-100 flex items-center gap-2">
              <SparklesIcon class="w-4 h-4 text-[#10B981] shrink-0" />
              <span class="text-xs font-bold text-slate-800">Makan bersama</span>
            </div>
            <div class="p-2.5 rounded-2xl bg-emerald-50/40 border border-emerald-100 flex items-center gap-2">
              <BuildingOffice2Icon class="w-4 h-4 text-[#10B981] shrink-0" />
              <span class="text-xs font-bold text-slate-800">Toilet bersama</span>
            </div>
            <div class="p-2.5 rounded-2xl bg-emerald-50/40 border border-emerald-100 flex items-center gap-2">
              <ShieldCheckIcon class="w-4 h-4 text-[#10B981] shrink-0" />
              <span class="text-xs font-bold text-slate-800">Gigitan nyamuk</span>
            </div>
          </div>

          <div class="p-3 rounded-2xl bg-emerald-100/70 border border-emerald-200 text-xs text-emerald-950 font-bold flex items-center gap-2">
            <CheckIcon class="w-4 h-4 text-[#10B981] shrink-0" />
            <span>“Jangan takut untuk berteman dan berinteraksi dengan orang yang hidup dengan HIV.”</span>
          </div>
        </div>

      </div>
    </section>

    <!-- 3. Mitos vs Fakta Lengkap (8 Kartu Interaktif) -->
    <section class="space-y-4">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 pb-3">
        <div>
          <span class="text-[11px] font-bold uppercase tracking-widest text-[#F43F5E] bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
            EDUKASI INTERAKTIF
          </span>
          <h2 class="text-xl sm:text-2xl font-black text-[#1E293B] mt-1.5">
            8 Mitos vs Fakta Seputar HIV
          </h2>
          <p class="text-slate-500 text-xs">
            Klik kartu mana pun untuk membalik dan membaca fakta ilmiah dari pedoman kesehatan.
          </p>
        </div>

        <button
          @click="flipAllCards"
          class="px-3.5 py-1.5 rounded-full border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors self-start sm:self-auto"
        >
          {{ allFlipped ? 'Tutup Semua Kartu' : 'Buka Semua Kartu' }}
        </button>
      </div>

      <!-- 8 Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="item in mitosFaktaList"
          :key="item.id"
          @click="toggleCard(item.id)"
          class="cursor-pointer bg-white rounded-3xl p-5 border transition-all flex flex-col justify-between min-h-[220px] select-none"
          :class="activeCards.includes(item.id) 
            ? 'border-[#10B981] bg-emerald-50/30 shadow-sm' 
            : 'border-slate-200 hover:border-slate-300 shadow-sm'"
        >
          <div>
            <div class="flex items-center justify-between mb-3">
              <span
                class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full"
                :class="activeCards.includes(item.id) ? 'bg-emerald-100 text-[#10B981]' : 'bg-rose-100 text-[#F43F5E]'"
              >
                {{ activeCards.includes(item.id) ? 'FAKTA ILMIAH' : 'MITOS' }}
              </span>
              <span class="text-[11px] font-bold text-slate-400">#0{{ item.id }}</span>
            </div>

            <div v-if="!activeCards.includes(item.id)" class="space-y-1.5">
              <p class="text-xs sm:text-sm font-bold text-[#1E293B] leading-snug">
                “{{ item.mitos }}”
              </p>
              <p class="text-[11px] text-slate-400 pt-1">
                Klik kartu ini untuk membaca kebenaran medis.
              </p>
            </div>

            <div v-else class="space-y-1.5">
              <p class="text-xs sm:text-sm font-bold text-emerald-950 leading-snug">
                “{{ item.fakta }}”
              </p>
              <p class="text-[11px] text-slate-600 leading-relaxed pt-1">
                {{ item.penjelasan }}
              </p>
            </div>
          </div>

          <div class="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400">
            <span>{{ item.category }}</span>
            <span class="text-[#10B981] flex items-center gap-1" v-if="activeCards.includes(item.id)">
              <CheckCircleIcon class="w-3.5 h-3.5" />
              <span>Valid</span>
            </span>
            <span v-else>Klik buka</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Edukasi ARV (Bagian 11 Requirement) -->
    <section id="arv-section" class="scroll-mt-20 space-y-4">
      <div class="border-b border-slate-200 pb-3">
        <span class="text-[11px] font-bold uppercase tracking-widest text-[#10B981] bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          PENGOBATAN MEDIS
        </span>
        <h2 class="text-xl sm:text-2xl font-black text-[#1E293B] mt-1.5">
          ARV: Pengobatan untuk Mengendalikan HIV
        </h2>
        <p class="text-slate-500 text-xs">
          ARV (Antiretroviral) digunakan dalam pengobatan HIV untuk membantu menekan jumlah virus dalam tubuh sehingga kekebalan tubuh tetap prima.
        </p>
      </div>

      <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        
        <div class="space-y-2">
          <h3 class="text-base font-black text-[#1E293B]">
            Bagaimana Terapi ARV Bekerja?
          </h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Obat ARV bukan untuk memusnahkan virus seketika, melainkan menghentikan penggandaan (replikasi) virus HIV di dalam sel darah. Ketika virus berhenti berkembang, sistem imun tubuh dapat pulih dan bekerja normal.
          </p>
          <div class="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 font-bold flex items-center gap-2">
            <ExclamationTriangleIcon class="w-4 h-4 text-amber-600 shrink-0" />
            <span>Pengobatan harus dilakukan secara teratur, disiplin, dan sesuai arahan tenaga kesehatan di faskes.</span>
          </div>
        </div>

        <!-- 5-Step Treatment Pathway (Sesuai Line 358) -->
        <div class="space-y-2.5">
          <h4 class="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Alur Perjalanan Terapi Terpadu:
          </h4>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
            
            <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <span class="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-black inline-flex items-center justify-center">1</span>
              <p class="font-extrabold text-xs text-[#1E293B]">TES</p>
              <p class="text-[10px] text-slate-500">Skrining darah di faskes untuk konfirmasi status</p>
            </div>

            <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <span class="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-black inline-flex items-center justify-center">2</span>
              <p class="font-extrabold text-xs text-[#1E293B]">KONSELING</p>
              <p class="text-[10px] text-slate-500">Diskusi persiapan terapi bersama konselor nakes</p>
            </div>

            <div class="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
              <span class="w-5 h-5 rounded-full bg-[#10B981] text-white text-[10px] font-black inline-flex items-center justify-center">3</span>
              <p class="font-extrabold text-xs text-[#10B981]">TERAPI</p>
              <p class="text-[10px] text-emerald-800">Inisiasi obat ARV sesuai regimen resep dokter</p>
            </div>

            <div class="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
              <span class="w-5 h-5 rounded-full bg-[#10B981] text-white text-[10px] font-black inline-flex items-center justify-center">4</span>
              <p class="font-extrabold text-xs text-[#10B981]">KEPATUHAN</p>
              <p class="text-[10px] text-emerald-800">Minum obat setiap hari tepat waktu tanpa jeda</p>
            </div>

            <div class="p-3.5 rounded-2xl bg-purple-50 border border-purple-200 text-center space-y-1">
              <span class="w-5 h-5 rounded-full bg-[#8B5CF6] text-white text-[10px] font-black inline-flex items-center justify-center">5</span>
              <p class="font-extrabold text-xs text-[#8B5CF6]">VIRAL LOAD</p>
              <p class="text-[10px] text-purple-800">Pemantauan rutin hingga virus tak terdeteksi</p>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- 5. Viral Load (Bagian 12 Requirement) -->
    <section class="space-y-4">
      <div class="border-b border-slate-200 pb-3">
        <span class="text-[11px] font-bold uppercase tracking-widest text-[#8B5CF6] bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
          TUJUAN PENGELOLAAN HIV
        </span>
        <h2 class="text-xl sm:text-2xl font-black text-[#1E293B] mt-1.5">
          Kenapa Viral Load Penting?
        </h2>
        <p class="text-slate-500 text-xs">
          Tolok ukur keberhasilan penanganan medis dalam menjaga kesehatan individu dan menekan risiko penularan.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div class="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div class="w-8 h-8 rounded-2xl bg-purple-50 text-[#8B5CF6] flex items-center justify-center font-bold">
            <ChartBarIcon class="w-4 h-4" />
          </div>
          <h3 class="text-sm font-black text-[#1E293B]">Mengukur Jumlah Virus</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Viral load menunjukkan berapa banyak jumlah virus HIV dalam darah. Semakin sedikit jumlah virus, semakin kuat sistem imunitas tubuh bekerja.
          </p>
        </div>

        <div class="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div class="w-8 h-8 rounded-2xl bg-emerald-50 text-[#10B981] flex items-center justify-center font-bold">
            <ShieldCheckIcon class="w-4 h-4" />
          </div>
          <h3 class="text-sm font-black text-[#1E293B]">Supresi Virus Maksimal</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Pengobatan yang efektif dapat menekan viral load hingga ke tingkat yang tidak terdeteksi (Undetectable).
          </p>
        </div>

        <div class="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div class="w-8 h-8 rounded-2xl bg-amber-50 text-[#FACC15] flex items-center justify-center font-bold">
            <HeartIcon class="w-4 h-4 text-amber-700" />
          </div>
          <h3 class="text-sm font-black text-[#1E293B]">Menurunkan Risiko Transmisi</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Viral load yang tersupresi berkaitan erat dengan penurunan risiko transmisi virus ke pasangan seksual (Undetectable = Untransmittable / U=U).
          </p>
        </div>

      </div>
    </section>

    <!-- 6. Section Lawan Stigma (Bagian 13 Requirement) -->
    <section id="stigma-section" class="scroll-mt-20 space-y-4">
      <div class="border-b border-slate-200 pb-3">
        <span class="text-[11px] font-bold uppercase tracking-widest text-[#F43F5E] bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
          SOLIDARITAS KEMANUSIAAN
        </span>
        <h2 class="text-xl sm:text-2xl font-black text-[#1E293B] mt-1.5">
          Lawan Stigma, Bangun Dukungan
        </h2>
        <p class="text-slate-500 text-xs">
          “HIV bukan alasan untuk menjauhi seseorang. ODHIV berhak mendapatkan layanan kesehatan, dukungan, dan perlakuan yang bermartabat.”
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div class="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <span class="text-[10px] font-black uppercase text-[#F43F5E] bg-rose-100 px-2 py-0.5 rounded-full">Aksi 1</span>
          <h3 class="text-base font-black text-[#1E293B]">STOP STIGMA</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Hentikan pelabelan negatif. Pengetahuan medis yang benar adalah penangkal terbaik terhadap prasangka sosial.
          </p>
        </div>

        <div class="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <span class="text-[10px] font-black uppercase text-[#8B5CF6] bg-purple-100 px-2 py-0.5 rounded-full">Aksi 2</span>
          <h3 class="text-base font-black text-[#1E293B]">STOP DISKRIMINASI</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Pastikan tidak ada penolakan di sekolah, kampus, maupun tempat kerja. ODHIV memiliki hak hidup dan berkarya yang setara.
          </p>
        </div>

        <div class="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <span class="text-[10px] font-black uppercase text-[#10B981] bg-emerald-100 px-2 py-0.5 rounded-full">Aksi 3</span>
          <h3 class="text-base font-black text-[#1E293B]">START SUPPORT</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Jadilah teman yang mendengarkan dan mendukung kepatuhan minum obat menuju Gorontalo Sehat 2045.
          </p>
        </div>

      </div>
    </section>

    </div>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue'
import { ref } from 'vue'
import {
  InformationCircleIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  XCircleIcon,
  UserGroupIcon,
  HeartIcon,
  ChatBubbleBottomCenterTextIcon,
  SparklesIcon,
  BuildingOffice2Icon,
  CheckIcon,
  ExclamationTriangleIcon,
  ChartBarIcon
} from '@heroicons/vue/24/outline'
import { mitosFaktaList } from '@/data/mitosFaktaData.js'

const activeCards = ref([])
const allFlipped = ref(false)

const toggleCard = (id) => {
  if (activeCards.value.includes(id)) {
    activeCards.value = activeCards.value.filter(item => item !== id)
  } else {
    activeCards.value.push(id)
  }
}

const flipAllCards = () => {
  if (allFlipped.value) {
    activeCards.value = []
    allFlipped.value = false
  } else {
    activeCards.value = mitosFaktaList.map(item => item.id)
    allFlipped.value = true
  }
}
</script>
