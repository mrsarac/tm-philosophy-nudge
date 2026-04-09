Upgrade from manual install — Geçiş (Tampermonkey)

Purpose / Amaç

If you previously installed the script by copying/pasting into Tampermonkey, follow these steps to migrate to the new one-click install (philosophy-nudge.user.js). This gives you automatic updates and a cleaner install.

Eğer betiği elle (Tampermonkey'e yapıştırarak) kurduysan, bu adımlar seni otomatik güncellemeli .user.js kurulumuna geçirir. Böylece bir tıkla kurulum ve otomatik güncelleme kazanırsın.

Steps — Adımlar

1) Note your current settings (optional) — Ayarlarını not al (isteğe bağlı)
- The script exposes two user-facing settings: Friction (low/high) and Language (en/tr).
- If you've changed them and want the same values after migration, just remember them (e.g. "Friction: high", "Language: tr"). Default: Friction=high, Language=en.

Script kullanıcı ayarları: Sürtünme (low/high) ve Dil (en/tr). Değerlerini korumak istersen not al. Varsayılan: Sürtünme=high, Dil=en.

2) Remove the manual copy — Eski elle kurulumu kaldır
- Open Tampermonkey dashboard (click the Tampermonkey icon → Dashboard).
- Find the old "Philosophy Nudge" script and delete it.
- This prevents duplicate scripts running on the same pages.

Tampermonkey kontrol panelini aç (Tampermonkey ikonu → Dashboard). Eski "Philosophy Nudge" betiğini bulun ve silin. Aynı sayfada iki kopya çalışmasını engelle.

3) Install the new .user.js (recommended) — Yeni .user.js'i kur (önerilen)
- Open this URL in your browser or click the README "Install" link:
  https://raw.githubusercontent.com/mrsarac/tm-philosophy-nudge/main/philosophy-nudge.user.js
- Tampermonkey will prompt to install — click "Install".
- Alternatively: Tampermonkey Dashboard → Utilities → "Install from URL" (paste the raw URL) — then Install.

README içindeki "Install" linkine tıklayarak veya yukarıdaki raw URL'yi açarak kurulum yapın. Tampermonkey size "Install" soracaktır — onaylayın. Alternatif: Dashboard → Utilities → Install from URL ve raw linki yapıştır.

4) Configure your preferences — Ayarları yap
- Click the Tampermonkey icon → Installed scripts → find "Philosophy Nudge" → click its menu. Use the registered menu commands to set:
  - ⚙️ Friction: Low / High
  - 🌐 Language: English / Türkçe
  - 🔁 Reset Timer (if you want an immediate trigger)

Tampermonkey menüsünden scriptin menü komutlarını kullanarak Sürtünme ve Dil ayarlarını yapın. Reset Timer ile hemen tetikleyebilirsiniz.

5) Verify — Doğrula
- Visit a supported site (e.g. twitter.com or news.ycombinator.com) and wait ~1–5s for a possible interruption (script has probability & cooldown).
- If nothing appears, use the menu command "🔁 Reset Timer" to clear the cooldown.

Desteklenen bir siteyi ziyaret edin (twitter.com gibi). Eğer görünmüyorsa Tampermonkey menu → Reset Timer komutunu çalıştırın.

Troubleshooting — Sorun Giderme

- Duplicate scripts: If you still see two instances, double-check Tampermonkey dashboard and remove the old one.
- Auto-update not working: confirm the script in Tampermonkey has the Update/Download metadata (it should). Visit the raw URL in the browser — it must be accessible.
- Settings lost: If you uninstalled the old script before noting settings, simply set them again via the script menu. Defaults are conservative.

- İki kopya görünüyorsa dashboard'tan eskiyi silin.
- Auto-update çalışmıyorsa raw URL erişilebilir mi kontrol edin.
- Ayarlar kaybolduysa menüden tekrar ayarlayın; varsayılanlar güvenli.

If you want, I can automate this for you remotely (open Tampermonkey dashboard, remove old copy, install new) — but that needs temporary access to your browser/profile. Say the word.

İstersen bunu uzaktan da otomatikleştirebilirim (Tampermonkey panelini açıp eskiyi silip yeniyi kurma) — fakat bunun için kısa süreli tarayıcı/profil erişimi gerekir. Onay verirsin.

---
Last updated: 