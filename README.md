# tm-philosophy-nudge

"Conatus is the effort by which each thing strives to persevere in its being." — Spinoza

A lightweight Tampermonkey userscript that interrupts mindless scrolling with short philosophical nudges inspired by Spinoza's Ethics. Minimal, private-by-default, and intentionally frictional.

Özet: Spinoza'dan ilham alan, dikkat dağıtıcı içerik tüketimini kesintiye uğratan küçük bir Tampermonkey userscripti. Basit, gizlilik odaklı ve kasıtlı sürtünme sağlar.

-----

Quick install / Hızlı kurulum

1) Open this URL in your browser and let Tampermonkey install:

   https://raw.githubusercontent.com/mrsarac/tm-philosophy-nudge/main/philosophy-nudge.user.js

2) Or from Tampermonkey dashboard → Utilities → "Install from URL" and paste the raw link above.

Not: If you previously installed by copying/pasting into Tampermonkey, follow the migration steps in `UPGRADE_FROM_MANUAL.md` to avoid duplicate scripts.

-----

Why this exists / Neden?

- Break automatic, reactive browsing.
- Force a 1–2.5s intentional pause to increase awareness (configurable).
- Offer short philosophical prompts rather than judgmental nagging.

Kısaca: Otomatik tüketimi böl, kısa bir farkındalık anı oluştur, kullanıcıyı yargılamadan sorgulamaya davet et.

-----

Behavior — Davranış

- Trigger probability: 60% per page load (configurable in code)
- Cooldown: 5 minutes after showing (avoids fatigue)
- Hold-to-dismiss: High (2.5s) / Low (1.2s)
- Keyboard: Space / Enter works
- Accessibility: Pointer events supported, role/button + aria-label added

-----

Supported sites / Desteklenen siteler (örnekler)

- twitter.com / x.com
- youtube.com
- reddit.com
- instagram.com
- linkedin.com
- facebook.com
- tiktok.com
- eksisozluk.com
- news.ycombinator.com

(Not exhaustive — script matches by @match in the header)

-----

Settings (Tampermonkey menu)

- ⚙️ Friction: Low / High
- 🌐 Language: English / Türkçe
- 🔁 Reset Timer — clear cooldown and trigger sooner

These are exposed as Tampermonkey menu commands (click Tampermonkey icon → Installed scripts → Philosophy Nudge → menu).

-----

Migration note / Geçiş

If you added the script manually (copy/paste), remove the old instance from Tampermonkey before installing the .user.js version. See `UPGRADE_FROM_MANUAL.md` for exact steps.

Eğer script'i elle eklediyseniz, eski kopyayı Tampermonkey'den silin, sonra yeni .user.js'i kurun.

-----

Development / Geliştirme

- Repo: https://github.com/mrsarac/tm-philosophy-nudge
- The live script file (raw): `philosophy-nudge.user.js`
- To contribute: fork, make changes, open PR. Keep user-visible changes backwards-compatible.

-----

Troubleshooting / Sorun giderme

- Nothing appears: try Tampermonkey → Installed scripts → Reset Timer, or disable other userscripts that might block overlays
- Duplicate interruptions: ensure you don't have two copies of the script installed
- Auto-update not happening: verify Tampermonkey sees the `@updateURL` in the installed script header and can reach the raw URL

-----

License / Lisans

MIT — see LICENSE

-----

Changelog (short)

- 1.1.0 — Accessibility improvements, pointer/keyboard support, auto-update metadata
- 1.0.0 — Initial public release

-----

If you want, I can also add a short GitHub Release and a PR template. Tell me which and I'll do it.

Eğer istersen README'ye küçük bir "Install" badge, release veya PR şablonu da ekleyebilirim. Ne istersin?