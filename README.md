# tm-philosophy-nudge

> *"Conatus is the effort by which each thing strives to persevere in its being."*
> — Baruch Spinoza, Ethics, Part III, Proposition 6

A Tampermonkey userscript that interrupts mindless scrolling with philosophical reflections inspired by Spinoza's Ethics. Reclaim your digital agency.

---

## [Türkçe](#türkçe) | [English](#english)

---

# English

## What is Philosophy Nudge?

**Philosophy Nudge** is a digital wellness tool disguised as philosophy. It periodically interrupts your browsing on social media and content platforms with thought-provoking questions based on Spinoza's three primary affects:

| Affect | Meaning | Theme |
|--------|---------|-------|
| **LAETITIA** | Joy / Increase of Power | Emerald Green |
| **TRISTITIA** | Sadness / Decrease of Power | Melancholic Blue |
| **CUPIDITAS** | Desire / Appetite | Amber Fire |

Each interruption presents a philosophical quote that challenges you to examine your current state of mind and whether your browsing serves your authentic will.

## Features

- **Philosophical Interruptions**: Random quotes from Spinoza's Ethics
- **Beautiful Canvas Animations**: Breathing orbital circles representing the eternal drive to exist
- **Hold-to-Dismiss Interaction**: Intentional friction prevents mindless clicking (hold for 2.5 seconds, or 1.2 seconds on low friction)
- **Dual Language Support**: English and Turkish
- **Customizable Settings**: Adjust friction level, language, and reset cooldown timer
- **Accessibility Improvements**: Pointer events, keyboard support (Space/Enter), visible hold duration
- **Auto-Update Ready**: Includes `@downloadURL` and `@updateURL` metadata for Tampermonkey refreshes
- **60% Trigger Probability**: Not every page load triggers an interruption
- **5-Minute Cooldown**: Prevents notification fatigue

## Supported Websites

- twitter.com / x.com
- youtube.com
- reddit.com
- instagram.com
- linkedin.com
- facebook.com
- tiktok.com
- eksisozluk.com
- news.ycombinator.com (Hacker News)

## Installation

### Prerequisites
You need a userscript manager browser extension:
- [Tampermonkey](https://www.tampermonkey.net/) (Recommended)
- [Violentmonkey](https://violentmonkey.github.io/)
- [Greasemonkey](https://www.greasespot.net/) (Firefox only)

### Steps

1. **Install Tampermonkey** for your browser:
   - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Safari](https://apps.apple.com/app/tampermonkey/id1482490089)
   - [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

2. **Install the Script**:
   - Click here to install: [Install Philosophy Nudge](../../raw/main/philosophy-nudge.user.js)
   - Or manually: Copy the contents of `philosophy-nudge.user.js` and create a new script in Tampermonkey

3. **Visit any supported website** and wait for the philosophical intervention!

## Usage

### Menu Commands (Right-click Tampermonkey icon)

| Command | Description |
|---------|-------------|
| **Friction: Low** | Reduces required hold time |
| **Friction: High** | Default 2.5 second hold |
| **Language: English** | Set language to English |
| **Dil: Türkçe** | Set language to Turkish |
| **Reset Timer** | Clear cooldown to trigger immediately |

### Interaction
When the modal appears:
1. Read the philosophical quote
2. Reflect on its meaning in your current context
3. **Hold** the circular button (or press **Spacebar**) for 2.5 seconds to dismiss
4. Return to browsing with renewed awareness

## Philosophy Behind the Project

Spinoza believed that understanding our emotions is the path to freedom. Most of our actions are driven by passive affects (passiones) - emotions that happen TO us rather than arising FROM us.

**Philosophy Nudge** interrupts the passive consumption pattern of social media to ask:
- Is this serving my power to act?
- Is this desire authentically mine?
- Am I increasing or decreasing in perfection?

The intentional friction (holding to dismiss) prevents automatic dismissal and forces a moment of genuine reflection.

---

# Türkçe

## Philosophy Nudge Nedir?

**Philosophy Nudge**, felsefe kisvesi altında bir dijital wellness aracıdır. Sosyal medya ve içerik platformlarında gezinirken, sizi Spinoza'nın üç temel duygulanışına (affect) dayanan düşündürücü sorularla kesintiye uğratır:

| Duygulanış | Anlam | Tema |
|------------|-------|------|
| **LAETITIA** | Sevinç / Gücün Artışı | Zümrüt Yeşili |
| **TRISTITIA** | Keder / Gücün Azalışı | Melankolik Mavi |
| **CUPIDITAS** | Arzu / İştah | Kehribar Ateşi |

Her kesinti, mevcut ruh halinizi ve gezinmenizin gerçek iradenize hizmet edip etmediğini sorgulamanızı sağlayan felsefi bir alıntı sunar.

## Özellikler

- **Felsefi Kesintiler**: Spinoza'nın Ethica'sından rastgele alıntılar
- **Güzel Canvas Animasyonları**: Var olma çabasını temsil eden nefes alan yörünge daireleri
- **Basılı-Tut Etkileşimi**: Bilinçsiz tıklamayı önleyen kasıtlı sürtünme (yüksek sürtünmede 2.5 saniye, düşükte 1.2 saniye)
- **Çift Dil Desteği**: İngilizce ve Türkçe
- **Özelleştirilebilir Ayarlar**: Sürtünme seviyesi, dil ve bekleme süresini ayarlayın
- **Erişilebilirlik İyileştirmeleri**: Pointer event desteği, klavye desteği (Space/Enter), görünür basılı tutma süresi
- **Otomatik Güncelleme Hazır**: Tampermonkey yenilemeleri için `@downloadURL` ve `@updateURL` metadata alanları eklendi
- **%60 Tetikleme Olasılığı**: Her sayfa yüklemesi kesinti tetiklemez
- **5 Dakika Bekleme Süresi**: Bildirim yorgunluğunu önler

## Desteklenen Web Siteleri

- twitter.com / x.com
- youtube.com
- reddit.com
- instagram.com
- linkedin.com
- facebook.com
- tiktok.com
- eksisozluk.com
- news.ycombinator.com (Hacker News)

## Kurulum

### Gereksinimler
Bir userscript yönetici eklentisine ihtiyacınız var:
- [Tampermonkey](https://www.tampermonkey.net/) (Önerilen)
- [Violentmonkey](https://violentmonkey.github.io/)
- [Greasemonkey](https://www.greasespot.net/) (Sadece Firefox)

### Adımlar

1. **Tampermonkey'i kurun**:
   - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Safari](https://apps.apple.com/app/tampermonkey/id1482490089)
   - [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

2. **Script'i Kurun**:
   - Kurulum için tıklayın: [Philosophy Nudge'ı Kur](../../raw/main/philosophy-nudge.user.js)
   - Veya manuel olarak: `philosophy-nudge.user.js` içeriğini kopyalayıp Tampermonkey'de yeni bir script oluşturun

3. **Desteklenen herhangi bir web sitesini ziyaret edin** ve felsefi müdahaleyi bekleyin!

## Kullanım

### Menü Komutları (Tampermonkey simgesine sağ tıklayın)

| Komut | Açıklama |
|-------|----------|
| **Friction: Low** | Gerekli basılı tutma süresini azaltır |
| **Friction: High** | Varsayılan 2.5 saniye |
| **Language: English** | Dili İngilizce olarak ayarla |
| **Dil: Türkçe** | Dili Türkçe olarak ayarla |
| **Reset Timer** | Hemen tetiklemek için bekleme süresini sıfırla |

### Etkileşim
Modal göründüğünde:
1. Felsefi alıntıyı okuyun
2. Mevcut bağlamınızda ne anlama geldiğini düşünün
3. Kapatmak için dairesel düğmeyi **basılı tutun** (veya **Space** tuşuna basın) - 2.5 saniye
4. Yenilenmiş farkındalıkla gezinmeye devam edin

## Projenin Arkasındaki Felsefe

Spinoza, duygularımızı anlamanın özgürlüğe giden yol olduğuna inanıyordu. Eylemlerimizin çoğu pasif duygulanışlar (passiones) tarafından yönlendirilir - BİZDEN kaynaklanmak yerine BİZE olan duygular.

**Philosophy Nudge**, sosyal medyanın pasif tüketim kalıbını kesintiye uğratarak şunları sorar:
- Bu eyleme gücüme hizmet ediyor mu?
- Bu arzu gerçekten bana mı ait?
- Yetkinlikte artıyor muyum, azalıyor muyum?

Kasıtlı sürtünme (kapatmak için basılı tutma), otomatik kapatmayı önler ve gerçek bir düşünme anı yaratır.

---

## Contributing

Contributions are welcome! Feel free to:
- Add more philosophical quotes
- Support additional languages
- Add new supported websites
- Improve the visual design

## License

MIT License - See [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Baruch Spinoza** (1632-1677) for the philosophical foundation
- All who seek to reclaim their digital agency

---

*"The mind's highest good is the knowledge of God, and the mind's highest virtue is to know God."*
— Spinoza, Ethics, Part IV, Proposition 28
