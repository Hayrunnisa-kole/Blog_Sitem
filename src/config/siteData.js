/* =================================================================
   KİŞİSEL WEB SİTESİ İÇERİK YAPILANDIRMA DOSYASI (siteData.js)
   Sadece tırnak işaretlerinin içindeki metinleri ve görselleri
   değiştirerek kendi projelerinizi ve bilgilerinizi ekleyebilirsiniz.
   ================================================================= */

export const siteConfig = {
  // Kişisel Bilgiler
  personalInfo: {
    name: "Hayrunnisa Köle",
    title: "Kişisel Portfolyo & Web Alanı",
    subtitle: "Zarafet, Estetik & Mantık Dengesi",
    bioShort:
      "Karmaşık sistemleri çözerken bile sadeliği ve estetiği arayan, analitik düşünceyi zarafetle harmanlayan bir bakış açısı. Web tasarım ve geliştirme alanında yaratıcı çözümler üretmeyi seven bir mühendislik öğrencisi.",
    heroImage: "/Blog_Sitem/profile.jpg", // Ana sayfa görseli (hero image)
  },

  // "Hikayem" Bölümü
  journeySection: {
    titleMain: "BENİM HİKAYEM",
    titleScript: "Ve Yolculuğum",
    quote: ".",
    paragraph1:
      "Hayatın her alanında analitik düşüncenin getirdiği düzeni, estetiğin ve zarafetin sadeliğiyle harmanlamayı seviyorum. Zihnimi karmaşık problemleri çözmekle, verinin ve sistem mimarisinin görünmeyen düzeninde gezinmekle beslerken, iyi tasarlanmış detaylarda huzuru buluyorum. Benim için üretmek; mantık, his ve estetiğin bir araya geldiği en doğal ifade biçimi.",
    paragraph2:
      "Zihinsel odaklanmayı, deniz kenarında yapılan sakin bir yürüyüşün veya ormanda içilen bir kahvenin getirdiği içsel dengeyle tamamlamaya inanıyorum. Yeni diller keşfetmek, farklı kültürlerle zihnimi genişletmek ve sürekli öğrenmek yaşam ritmimin bir parçası. Detaylara gösterdiğim özen ve dingin disiplinimle, hem hayata hem de ürettiğim her fikre değer katmaktan keyif alıyorum.",
    bulletPoints: [
      "Yaratıcı Tasarım & Web Geliştirme",
      "Kullanıcı Deneyimi & Estetik Arayüzler",
      "Sürdürülebilir ve Minimalist Yaklaşım",
      "Arayüz Teknolojileri & Dinamik Yapılar",
    ],
  },

  // Projelerim (Her kart 1 projeyi temsil eder. Buraya istediğiniz kadar proje ekleyebilirsiniz)
  projects: [
    {
      id: 1,
      title: "Kütüphane Yönetim Sistemi",
      category: "Masaüstü Uygulaması & Veritabanı Mimarisi",
      shortDescription:
        "İş kurallarını Stored Procedure ve Trigger'lar ile veritabanı seviyesinde yöneten, Python tabanlı otomasyon.",
      fullDescription:
        "Kitap, üye, ödünç ve ceza süreçlerini uçtan uca yöneten yönetim sistemi. Front-end tarafında Python ve Tkinter, back-end tarafında ise MySQL kullanılmıştır. Stok takibi, otomatik ceza hesaplamaları ve veri doğrulama işlemleri tamamen PL/SQL yapılarıyla güvence altına alınmış olup, Pandas ve ReportLab entegrasyonu ile dinamik raporlama ve dışa aktarım (PDF/Excel) özellikleri sunmaktadır.",
      coverImage:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
      date: "2025",
      tags: [
        "Python",
        "Tkinter",
        "MySQL",
        "Pandas",
        "ReportLab",
        "Stored Procedure",
        "Trigger",
      ],
      demoUrl: "", // Masaüstü uygulaması olduğu için canlı link yerine sunum videonun (YouTube/Loom) linkini koyabilirsin.
      githubUrl:
        "https://https://github.com/Hayrunnisa-kole/TuringMakinasi_ile_PlakaTaniyici.com/KULLANICI_ADIN/kutuphane-otomasyonu", // Buraya kendi GitHub repo linkini eklemelisin.
    },
    {
      id: 2,
      title: "Zarif Kişisel Portfolyo & Web Platformu",
      category: "Ön Yüz & Arayüz Geliştirme",
      shortDescription:
        "Vue 3, Vite ve adaçayı yeşili & şampanya altın estetiğine sahip zarif kişisel web uygulaması.",
      fullDescription:
        "Vue 3 Composition API, Vite ve özel CSS tasarım sistemi (HSL renk paleti, botanik motifler, cam efekti/glassmorphism, duyarlı responsive grid ve dinamik modal detay pencereleri) kullanılarak inşa edilmiş şık ve sade bir kişisel web platformu.",
      coverImage: "/Blog_Sitem/blogSitesi.png",
      date: "2026",
      tags: ["Vue 3", "Vite", "Modern CSS", "Composition API", "UI/UX"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },

    {
      id: 3,
      title: "Contiki-NG Bellenim Tersine Mühendislik & Analiz Projesi",
      category: "Gömülü Sistemler & Güvenlik Analizi",
      shortDescription:
        "MSP430 tabanlı Contiki-NG bellenim imajının statik, dinamik ve mimari seviyede tersine mühendislik analizi.",
      fullDescription:
        "Z1 Mote platformu için derlenmiş new-firmware.z1 belleniminin ELF yapısı, bellek haritası, assembly komut dizilimleri, 6LoWPAN/RPL ağ yığını, donanımsal kesme (ISR) mekanizmaları ve Contiki-NG protothread zamanlayıcı mimarisinin derinlemesine tersine mühendislik analizi ve raporlanması.",
      coverImage:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      date: "2025",
      tags: [
        "MSP430",
        "Contiki-NG",
        "Reverse Engineering",
        "6LoWPAN / RPL",
        "Assembly",
        "ELF Analysis",
      ],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 4,
      title: "Oto Galeri Yönetim Platformu & Dinamik Vitrin",
      category: "Tam Yığın (Full-Stack) Web Geliştirme",
      shortDescription:
        "Docker ve Node.js altyapısıyla çalışan, dinamik filtreleme ve gelişmiş admin yönetimine sahip otomotiv galeri platformu.",
      fullDescription:
        "Araç stok yönetimi, detaylı teknik özellik kartları, dinamik renk ve fiyat filtreleri sunan tam teşekküllü galeri uygulaması. Express.js REST API ve Docker MySQL 8.0 altyapısı üzerine kurulu; URL query senkronizasyonu, localStorage hafızası ve canlı veri güncelleyen admin kontrol paneli içerir.",
      coverImage: "/Blog_Sitem/koleotomotiv.png",
      date: "2026",
      tags: [
        "Node.js",
        "Express.js",
        "Docker",
        "MySQL",
        "JavaScript (ES6+)",
        "REST API",
        "HTML5/CSS3",
      ],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 5,
      title: "Turing Makinesi ile Plaka Tanıyıcı",
      category: "Teorik Bilgisayar Bilimleri & Otomat Teorisi",
      shortDescription:
        "Turing Makinesi simülatörü ile NNLLNNN formatındaki araç plakalarını doğrulayan deterministik tanıyıcı.",
      fullDescription:
        "Durum tabanlı (state-based) doğrulama mantığıyla çalışan, bant (tape) ve okuma kafasını simüle ederek araç plakalarının format uygunluğunu adım adım analiz eden Deterministik Turing Makinesi uygulaması.",
      coverImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      date: "2026",
      tags: ["Python", "Turing Machine", "Automata Theory", "Formel Diller"],
      demoUrl: "https://example.com",
      githubUrl:
        "https://https://github.com/Hayrunnisa-kole/TuringMakinasi_ile_PlakaTaniyici.com",
    },
    {
      id: 6,
      title: "İnteraktif & Lüks Dijital Düğün Davetiyesi",
      category: "Ön Yüz & Web Geliştirme",
      shortDescription:
        "3D zarf açılış animasyonu, canlı yönetim paneli, müzik çalar ve LCV takip sistemi sunan interaktif web uygulaması.",
      fullDescription:
        "Lüks 3D zarf & mühür açılış animasyonu (POV), Web Audio API romantik müzik sentezleyicisi, şifreli canlı yönetim paneli (Live Customizer), LCV (RSVP) katılım formu, anı defteri moderasyonu ve Google Haritalar entegrasyonu sunan mobil öncelikli (responsive) web uygulaması.",
      coverImage:
        "/Blog_Sitem/davetiye.png",
      date: "2026",
      tags: ["React", "Vite", "CSS3 3D", "Web Audio API", "UI/UX"],
      demoUrl: "https://example.com", // Canlıya aldığınız Vercel/Netlify linkini ekleyebilirsiniz
      githubUrl: "https://github.com/kullaniciadi/dijital-dugun-davetiyesi", // GitHub repo linkiniz
    },
  ],
};
3;
