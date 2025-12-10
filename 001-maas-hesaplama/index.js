
// Kişi bilgileri
const kisi = {
  isim: "Adem",
  yas: 25,
  saatlikUcret: 150,
  gunlukCalisma: 8
};

// Fazla mesai bilgileri
const fazlaMesaiSaat = 2;
const fazlaMesaiCarpani = 1.5;

// 1: Normal günlük kazanç
const gunlukKazanc = kisi.gunlukCalisma * kisi.saatlikUcret;

// 2: Fazla mesai kazancı
const fazlaMesaiKazanci = fazlaMesaiSaat * kisi.saatlikUcret * fazlaMesaiCarpani;

// 3: Toplam günlük kazanç
const toplamGunlukKazanc = gunlukKazanc + fazlaMesaiKazanci;

// 4: Toplam aylık kazanç (22 iş günü)
const toplamAylikKazanc = toplamGunlukKazanc * 22;

// Sonuçları ekrana yazdır
console.log(`${kisi.isim} - ${kisi.yas} yaşında.`);
console.log(`Günlük kazanç: ${toplamGunlukKazanc} TL`);
console.log(`Aylık kazanç: ${toplamAylikKazanc} TL`);

// Kazanç değerlendirmesi
if (toplamAylikKazanc > 20000) {
  console.log("İyi kazanıyorsun!");
} else {
  console.log("Biraz daha çalışman gerek :)");
}


