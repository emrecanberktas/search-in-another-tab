# Search in Another Tab

Modern ve kullanıcı dostu bir Chrome uzantısı. Web sayfalarında metin seçtiğinizde otomatik olarak bir arama butonu görünür ve seçili metni Google'da aramak için tek tıklama sunar.

## ✨ Özellikler

- 🎯 **Akıllı Konum Belirleme**: Buton seçili metnin üstünde veya altında, sayfa sınırlarını aşmayacak şekilde görünür
- 🚀 **Hızlı Arama**: Tek tıkla seçili metni yeni sekmede Google'da ara
- 🎨 **Modern Tasarım**: Temiz ve şık buton tasarımı
- 🛡️ **CSS İzolasyonu**: Web sitelerinin mevcut CSS kurallarından etkilenmez
- ⌨️ **Klavye Desteği**: ESC tuşu ile butonu gizleme
- 🔒 **Gizlilik**: Hiçbir veri toplamaz, tamamen lokal çalışır

## 📦 Kurulum

### Chrome Web Store'dan (Önerilen)

1. [Chrome Web Store sayfasına](link-buraya) gidin
2. "Add to Chrome" butonuna tıklayın
3. İzinleri onaylayın
4. Kullanmaya başlayın!

### Manuel Kurulum (Developer Mode)

1. Bu repository'yi klonlayın veya ZIP olarak indirin:
   ```bash
   git clone [repository-url]
   cd search-in-another-tab
   ```

2. Chrome tarayıcınızı açın ve şu adrese gidin:
   ```
   chrome://extensions/
   ```

3. Sağ üst köşeden **"Developer mode"** (Geliştirici modu) seçeneğini aktif edin.

4. **"Load unpacked"** (Paketlenmemiş uzantı yükle) butonuna tıklayın.

5. Projenin bulunduğu klasörü seçin.

6. Extension yüklendi! Artık herhangi bir web sayfasında metin seçerek kullanabilirsiniz.

## 🎮 Kullanım

1. Herhangi bir web sayfasında metin seçin
2. Seçimin yakınında "Search" butonu belirecek
3. Butona tıklayın
4. Seçili metin yeni sekmede Google'da aranacak

### İpuçları

- ESC tuşuna basarak butonu gizleyebilirsiniz
- Boş bir alana tıkladığınızda buton otomatik kaybolur
- Scroll yaptığınızda buton gizlenir

## 📁 Dosya Yapısı

```
search-in-another-tab/
├── manifest.json       # Extension manifest dosyası (Manifest V3)
├── content.js          # Ana mantık: seçim yakalama ve buton yönetimi
├── styles.css          # Buton stilleri ve animasyonlar
├── PRIVACY_POLICY.md   # Gizlilik politikası
├── STORE_LISTING.md    # Chrome Web Store bilgileri
└── README.md           # Bu dosya
```

## 🔧 Geliştirme

### Gereksinimler

- Google Chrome veya Chromium tabanlı tarayıcı (v88+)
- Manifest V3 desteği

### Teknik Detaylar

**manifest.json**: Chrome Extension yapılandırması
- Manifest V3 kullanır
- `activeTab` izni ile çalışır
- Content script olarak `content.js` ve `styles.css` enjekte eder

**content.js**: Ana JavaScript mantığı
- Metin seçimi yakalama (`mouseup`, `selectionchange`)
- Buton oluşturma ve pozisyon hesaplama
- Google arama URL'si oluşturma ve yeni sekme açma
- Event listener'lar ve hata yönetimi

**styles.css**: Stil dosyası
- `!important` kullanarak CSS izolasyonu
- Yüksek z-index ile her zaman üstte kalma
- Modern ve temiz tasarım
- Responsive ve hover efektleri

## 🔒 Gizlilik

Bu uzantı:
- ❌ Hiçbir veri toplamaz
- ❌ Sunucuya bağlanmaz
- ❌ Analytics kullanmaz
- ✅ Tamamen lokal çalışır
- ✅ Sadece `activeTab` izni kullanır
- ✅ Açık kaynak kodludur

Detaylı bilgi için [Gizlilik Politikası](PRIVACY_POLICY.md) sayfasını inceleyin.

## 🚀 Chrome Web Store'a Yükleme

Extension'ı Chrome Web Store'a yüklemek için:

1. [Chrome Developer Dashboard](https://chrome.google.com/webstore/devconsole)'a gidin
2. "New Item" butonuna tıklayın
3. Proje klasörünü ZIP olarak paketleyin (sadece gerekli dosyalar: manifest.json, content.js, styles.css)
4. ZIP dosyasını yükleyin
5. Store listing bilgilerini doldurun (STORE_LISTING.md dosyasını kullanın)
6. Screenshot'ları ekleyin (en az 1, maks 5 adet - 1280x800 veya 640x400 px)
7. Promotional images ekleyin (opsiyonel)
8. Gizlilik politikası URL'si ekleyin
9. "Submit for Review" butonuna tıklayın

### Store'a Yükleme Gereksinimleri

- ✅ manifest.json (Manifest V3)
- ✅ En az 128x128 icon (şu an yok - eklenmeli)
- ✅ Screenshot'lar (1280x800 veya 640x400 px)
- ✅ Promotional images (opsiyonel ama önerilen)
- ✅ Gizlilik politikası (PRIVACY_POLICY.md mevcut)
- ✅ Açıklama ve detaylar (STORE_LISTING.md mevcut)

**ÖNEMLİ**: Store'a yüklemeden önce icon dosyaları oluşturmanız gerekiyor:
- icon16.png (16x16 px)
- icon48.png (48x48 px)
- icon128.png (128x128 px)

Bu iconları oluşturduktan sonra manifest.json dosyasına ekleyin:
```json
"icons": {
  "16": "icon16.png",
  "48": "icon48.png",
  "128": "icon128.png"
}
```

## 💡 İyileştirme Fikirleri

- [ ] Extension icon tasarımı
- [ ] Farklı arama motorları seçeneği (DuckDuckGo, Bing, vb.)
- [ ] Özelleştirilebilir kısayol tuşları
- [ ] Popup'ta ayarlar sayfası
- [ ] Seçili metin geçmişi
- [ ] Çoklu dil desteği
- [ ] Özel arama URL şablonları

## 🤝 Katkıda Bulunma

Pull request'ler hoş karşılanır! Büyük değişiklikler için lütfen önce bir issue açarak ne değiştirmek istediğinizi tartışın.

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📝 Lisans

MIT License - İstediğiniz gibi kullanabilir, değiştirebilir ve dağıtabilirsiniz.

## 👨‍💻 Geliştirici

Emre C.

## 📞 Destek

Sorun yaşarsanız veya öneriniz varsa:
- GitHub Issues: [Repository Issues Link]
- Email: [Your Email]

---

**Not**: Extension tamamen ücretsiz ve açık kaynaklıdır. Beğendiyseniz ⭐ vermeyi unutmayın!
