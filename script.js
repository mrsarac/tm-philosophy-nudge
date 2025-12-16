// ==UserScript==
// @name         Conatus - Digital Mindfulness
// @namespace    http://tampermonkey.net/
// @version      7.0
// @description  A Spinoza-inspired digital mindfulness tool. Interrupts mindless scrolling with philosophical reflections. | Spinoza felsefesinden ilham alan dijital farkındalık aracı.
// @author       Conatus Project
// @match        *://eksisozluk.com/*
// @match        *://twitter.com/*
// @match        *://x.com/*
// @match        *://www.youtube.com/*
// @match        *://www.reddit.com/*
// @match        *://www.instagram.com/*
// @match        *://www.linkedin.com/*
// @match        *://www.facebook.com/*
// @match        *://www.tiktok.com/*
// @match        *://news.ycombinator.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @run-at       document-idle
// @license      MIT
// @homepageURL  https://github.com/anthropics/conatus
// @supportURL   https://github.com/anthropics/conatus/issues
// ==/UserScript==

(function () {
  "use strict";

  /*
   * ═════════════════════════════════════════════════════════════════════════
   * 🏛️ SECTION 1: PHILOSOPHICAL CORE & DATABASE (SPINOZA REMIX)
   * 🏛️ BÖLÜM 1: FELSEFİ ÇEKİRDEK & VERİTABANI (SPINOZA REMIX)
   * ═════════════════════════════════════════════════════════════════════════
   */

  // UI Text translations
  const UI_TEXT = {
    en: {
      currentAffect: "Current Affect",
      holdText: "HOLD",
      frictionLow: "⚙️ Friction: Low",
      frictionHigh: "⚙️ Friction: High",
      resetTimer: "🔁 Reset Timer",
      langSwitch: "🌐 Language: English → Türkçe",
      setTo: "Set to",
    },
    tr: {
      currentAffect: "Mevcut Duygulanış",
      holdText: "BASILI TUT",
      frictionLow: "⚙️ Sürtünme: Düşük",
      frictionHigh: "⚙️ Sürtünme: Yüksek",
      resetTimer: "🔁 Zamanlayıcıyı Sıfırla",
      langSwitch: "🌐 Dil: Türkçe → English",
      setTo: "Ayarlandı",
    },
  };

  const PHILOSOPHY_DB = {
    LAETITIA: {
      // Joy / Increase of Power | Sevinç / Gücün Artışı
      theme: { hue: 150, sat: "70%", light: "50%", hex: "#10B981" }, // Emerald Green
      quotes: {
        en: [
          {
            text: "The mind, when it contemplates its own power, feels joy. Are you increasing your power right now, or submitting to an algorithm's power?",
            source: "Ethics, Part III, Proposition 53",
          },
          {
            text: "Everything that increases our power to act is good. Is this endless scrolling increasing your power to act?",
            source: "Ethics, Part IV",
          },
          {
            text: "A free person thinks of nothing less than death, and their wisdom is a meditation on life. Exit the digital noise and return to your life.",
            source: "Ethics, Part IV, Proposition 67",
          },
        ],
        tr: [
          {
            text: "Zihin, kendi gücünü kavradığında sevinç duyar. Şu an gücünü mü artırıyorsun, yoksa bir algoritmanın gücüne mi boyun eğiyorsun?",
            source: "Ethica, Kısım III, Önerme 53",
          },
          {
            text: "Eyleme gücümüzü artıran her şey iyidir. Bu sonsuz kaydırma (scroll), eyleme gücünü artırıyor mu?",
            source: "Ethica, Kısım IV",
          },
          {
            text: "Özgür insan, en az ölümü düşündüğü kadar yaşamı düşünür. Dijital gürültüden çık ve yaşamına dön.",
            source: "Ethica, Kısım IV, Önerme 67",
          },
        ],
      },
    },
    TRISTITIA: {
      // Sadness / Decrease of Power | Keder / Gücün Azalışı
      theme: { hue: 210, sat: "60%", light: "60%", hex: "#60A5FA" }, // Melancholic Blue
      quotes: {
        en: [
          {
            text: "Sadness is the transition of a person from greater to lesser perfection. This site is making you 'less'.",
            source: "Ethics, Part III, Definitions",
          },
          {
            text: "Hatred is never conquered by hatred, but only by love (or consciousness). Are you here to spew anger?",
            source: "Ethics, Part IV, Proposition 46",
          },
          {
            text: "Passive emotions cease to be passive when we form a clear idea of them. Why are you here? Analyze.",
            source: "Ethics, Part V, Proposition 3",
          },
        ],
        tr: [
          {
            text: "Keder, insanın daha büyük bir yetkinlikten daha azına geçişidir. Bu site seni 'daha az' kılıyor.",
            source: "Ethica, Kısım III, Tanımlar",
          },
          {
            text: "Nefret, asla nefretle yenilmez; ancak sevgiyle (veya bilinçle) yenilir. Öfke kusmak için mi buradasın?",
            source: "Ethica, Kısım IV, Önerme 46",
          },
          {
            text: "Pasif duygular (Passio), biz onların nedenini açıkça kavradığımızda pasif olmaktan çıkar. Neden buradasın? Analiz et.",
            source: "Ethica, Kısım V, Önerme 3",
          },
        ],
      },
    },
    CUPIDITAS: {
      // Desire / Appetite | Arzu / İştah
      theme: { hue: 25, sat: "85%", light: "55%", hex: "#F59E0B" }, // Fire / Amber
      quotes: {
        en: [
          {
            text: "Desire is the essence of a person. But is your current desire yours, or does it belong to Silicon Valley engineers?",
            source: "Ethics, Part III, Definitions",
          },
          {
            text: "Being a slave to impulse is not freedom. Stop, breathe, and reclaim your 'Conatus'.",
            source: "Ethics, Part IV",
          },
          {
            text: "Appetite born of ignorance is slavery. Appetite guided by reason is power.",
            source: "Ethics, Part IV",
          },
        ],
        tr: [
          {
            text: "Arzu, insanın özüdür. Ancak şu anki arzun sana mı ait, yoksa silikon vadisi mühendislerine mi?",
            source: "Ethica, Kısım III, Tanımlar",
          },
          {
            text: "Bir dürtüye köle olmak özgürlük değildir. Dur, nefes al ve 'Conatus'unu geri kazan.",
            source: "Ethica, Kısım IV",
          },
          {
            text: "Bilgisizlikten doğan iştah, köleliktir. Aklın rehberliğindeki iştah ise güçtür.",
            source: "Ethica, Kısım IV",
          },
        ],
      },
    },
  };

  const CONFIG = {
    frictionLevel: GM_getValue("frictionLevel", "high"), // low, high
    language: GM_getValue("language", "en"), // en, tr
    holdDuration: 2500, // milliseconds | milisaniye
    probability: 60, // Display probability (%) | Gösterilme ihtimali (%)
    lastShown: GM_getValue("lastShown", 0),
    cooldown: 5 * 60 * 1000, // 5 minutes cooldown | 5 dakika bekleme süresi
  };

  // Helper to get current language text
  const getText = (key) => UI_TEXT[CONFIG.language][key];

  /*
   * ═════════════════════════════════════════════════════════════════════════
   * 🎨 SECTION 2: UI ARCHITECTURE & STYLE INJECTION
   * 🎨 BÖLÜM 2: UI MİMARİSİ & STİL ENJEKSİYONU
   * ═════════════════════════════════════════════════════════════════════════
   */

  function injectStyles(themeColor) {
    const style = document.createElement("style");
    style.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;600&display=swap');

            #conatus-root {
                position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                z-index: 2147483647;
                background: #09090b;
                display: flex; flex-direction: column; align-items: center; justify-content: center;
                opacity: 0; pointer-events: none;
                transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                overflow: hidden;
            }
            #conatus-root.active { opacity: 1; pointer-events: all; }

            /* CANVAS LAYER */
            #conatus-canvas {
                position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                z-index: 0; opacity: 0.6;
            }

            /* CONTENT LAYER */
            .conatus-content {
                position: relative; z-index: 2;
                max-width: 600px; padding: 40px;
                text-align: center;
                color: #f8fafc;
                background: rgba(0,0,0,0.4);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255,255,255,0.08);
                border-radius: 24px;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                transform: translateY(20px);
                transition: transform 0.8s ease-out;
            }
            #conatus-root.active .conatus-content { transform: translateY(0); }

            .c-subtitle {
                font-family: 'JetBrains Mono', monospace;
                font-size: 12px; letter-spacing: 3px;
                color: ${themeColor.hex}; opacity: 0.9;
                margin-bottom: 20px; text-transform: uppercase;
            }
            .c-quote {
                font-family: 'Inter', sans-serif;
                font-size: 22px; font-weight: 300; line-height: 1.6;
                margin-bottom: 30px;
            }
            .c-source {
                font-family: 'Inter', sans-serif;
                font-size: 14px; opacity: 0.5; font-style: italic;
            }

            /* INTERACTION RING */
            .interaction-zone {
                margin-top: 50px; position: relative;
                width: 80px; height: 80px;
                cursor: pointer;
            }
            .ring-bg {
                position: absolute; inset: 0; border-radius: 50%;
                border: 4px solid rgba(255,255,255,0.1);
            }
            .ring-fill {
                position: absolute; inset: 0; border-radius: 50%;
                border: 4px solid ${themeColor.hex};
                clip-path: polygon(50% 50%, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%); /* Start hidden */
                transition: clip-path 0.1s linear;
                filter: drop-shadow(0 0 10px ${themeColor.hex});
            }
            .hold-text {
                position: absolute; top: 110%; left: 50%; transform: translateX(-50%);
                font-family: 'JetBrains Mono', monospace; font-size: 10px;
                opacity: 0.5; white-space: nowrap;
            }
        `;
    document.head.appendChild(style);
  }

  /*
   * ═════════════════════════════════════════════════════════════════════════
   * 🧬 SECTION 3: VISUAL ENGINE (CANVAS GEOMETRY)
   * 🧬 BÖLÜM 3: GÖRSEL MOTOR (CANVAS GEOMETRY)
   * ═════════════════════════════════════════════════════════════════════════
   */

  class ConatusEngine {
    constructor(canvas, theme) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.theme = theme;
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.particles = [];
      this.orbitals = [];
      this.running = true;

      this.resize();
      window.addEventListener("resize", () => this.resize());
      this.initParticles();
    }

    resize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    }

    initParticles() {
      // Create Orbitals (Breathing Circles)
      for (let i = 0; i < 4; i++) {
        this.orbitals.push({
          radius: 100 + i * 80,
          baseRadius: 100 + i * 80,
          speed: 0.002 + i * 0.001,
          angle: Math.random() * Math.PI * 2,
          width: 1 + i,
        });
      }

      // Create Dust Particles
      for (let i = 0; i < 60; i++) {
        this.particles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          size: Math.random() * 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5,
        });
      }
    }

    render(time) {
      if (!this.running) return;
      this.ctx.clearRect(0, 0, this.width, this.height);

      // 1. Draw Orbitals (The "Conatus" Breath)
      const centerX = this.width / 2;
      const centerY = this.height / 2;
      const breath = Math.sin(time * 0.001) * 20; // Breathing effect

      this.orbitals.forEach((orb, i) => {
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, orb.baseRadius + breath, 0, Math.PI * 2);
        this.ctx.strokeStyle = this.theme.hex;
        this.ctx.lineWidth = orb.width;
        this.ctx.globalAlpha = 0.1 + Math.sin(time * 0.002 + i) * 0.05; // Pulsing opacity
        this.ctx.stroke();

        // Rotating minor orbital
        const orbX =
          centerX + Math.cos(time * orb.speed + i) * (orb.baseRadius + breath);
        const orbY =
          centerY + Math.sin(time * orb.speed + i) * (orb.baseRadius + breath);
        this.ctx.beginPath();
        this.ctx.fillStyle = this.theme.hex;
        this.ctx.arc(orbX, orbY, 3, 0, Math.PI * 2);
        this.ctx.globalAlpha = 0.6;
        this.ctx.fill();
      });

      // 2. Draw Particles (The Chaos/Data)
      this.particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around screen
        if (p.x < 0) p.x = this.width;
        if (p.x > this.width) p.x = 0;
        if (p.y < 0) p.y = this.height;
        if (p.y > this.height) p.y = 0;

        this.ctx.beginPath();
        this.ctx.fillStyle = "#ffffff";
        this.ctx.globalAlpha = p.opacity;
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      });

      requestAnimationFrame((t) => this.render(t));
    }

    stop() {
      this.running = false;
    }
  }

  /*
   * ═════════════════════════════════════════════════════════════════════════
   * 🧠 SECTION 4: CONTROLLER & COGNITIVE PROCESS
   * 🧠 BÖLÜM 4: KONTROLÖR & BİLİŞSEL SÜREÇ
   * ═════════════════════════════════════════════════════════════════════════
   */

  const Controller = {
    root: null,
    fillRing: null,
    engine: null,
    holdStart: 0,
    holdInterval: null,
    isHolding: false,

    determineAffect() {
      // Randomly select an emotional state for this session
      const affects = Object.keys(PHILOSOPHY_DB);
      const selected = affects[Math.floor(Math.random() * affects.length)];
      return { type: selected, ...PHILOSOPHY_DB[selected] };
    },

    init() {
      const now = Date.now();
      // Cooldown check
      if (now - CONFIG.lastShown < CONFIG.cooldown) {
        console.log(
          `Conatus: Cooling down (${Math.floor((CONFIG.cooldown - (now - CONFIG.lastShown)) / 1000)}s)`,
        );
        return;
      }
      // Probability check
      if (Math.random() * 100 > CONFIG.probability) {
        console.log("Conatus: Skipping due to probability.");
        return;
      }

      const affect = this.determineAffect();
      this.buildUI(affect);
      GM_setValue("lastShown", now);
    },

    buildUI(affect) {
      injectStyles(affect.theme);
      // Get quotes in current language
      const langQuotes = affect.quotes[CONFIG.language];
      const quoteData = langQuotes[Math.floor(Math.random() * langQuotes.length)];

      this.root = document.createElement("div");
      this.root.id = "conatus-root";
      this.root.innerHTML = `
                <canvas id="conatus-canvas"></canvas>
                <div class="conatus-content">
                    <div class="c-subtitle">${getText("currentAffect")}: ${affect.type}</div>
                    <div class="c-quote">"${quoteData.text}"</div>
                    <div class="c-source">— ${quoteData.source}</div>

                    <div class="interaction-zone" id="c-trigger">
                        <div class="ring-bg"></div>
                        <div class="ring-fill"></div>
                        <div class="hold-text">${getText("holdText")}</div>
                    </div>
                </div>
            `;
      document.body.appendChild(this.root);

      // Init Canvas
      const canvas = document.getElementById("conatus-canvas");
      this.engine = new ConatusEngine(canvas, affect.theme);
      requestAnimationFrame((t) => this.engine.render(t));

      // Init Interaction
      this.fillRing = this.root.querySelector(".ring-fill");
      const trigger = this.root.querySelector("#c-trigger");

      // Mouse Events
      trigger.addEventListener("mousedown", () => this.startHold());
      window.addEventListener("mouseup", () => this.endHold());

      // Keyboard (Spacebar) Events
      window.addEventListener("keydown", (e) => {
        if (
          e.code === "Space" &&
          !this.isHolding &&
          this.root.classList.contains("active")
        ) {
          this.startHold();
        }
      });
      window.addEventListener("keyup", (e) => {
        if (e.code === "Space") this.endHold();
      });

      // Show UI
      requestAnimationFrame(() => this.root.classList.add("active"));
    },

    startHold() {
      this.isHolding = true;
      this.holdStart = Date.now();
      this.fillRing.style.transition = "none"; // Disable transition for JS control, or keep logic simple

      // CSS Clip Path Logic for Circular Fill
      // Using a simple interval to update the clip-path would be complex.
      // Instead, we will use a conic-gradient trick via CSS variable or simple transition if possible.
      // Let's use the Transition approach which is smoother for "Fill".

      // Update: Better visual - Use Conic Gradient on the border or stroke-dashoffset.
      // Since we used clip-path polygon in CSS, let's animate that via JS interval for precision.

      this.holdInterval = setInterval(() => {
        const elapsed = Date.now() - this.holdStart;
        const progress = Math.min(elapsed / CONFIG.holdDuration, 1);

        // Visual feedback: Calculate polygon for circle reveal
        // Simplified: Just use opacity or scale for MVP, but master prompt requested Geometry.
        // Let's use stroke-dashoffset logic simulation by changing clip-path based on degrees?
        // Too complex for single block. Let's switch ring-fill to use Conic Gradient background.

        // Dynamic style update for the ring
        const degrees = progress * 360;
        this.fillRing.style.clipPath = `none`; // Reset clip path
        this.fillRing.style.background = `conic-gradient(${this.fillRing.style.borderColor} ${degrees}deg, transparent 0)`;
        this.fillRing.style.border = "none"; // Switch to fill mode

        if (progress >= 1) {
          this.complete();
        }
      }, 16);
    },

    endHold() {
      this.isHolding = false;
      clearInterval(this.holdInterval);
      // Reset Visuals
      this.fillRing.style.background = "transparent";
      this.fillRing.style.border = `4px solid ${this.fillRing.style.borderColor || "white"}`;
      this.fillRing.style.clipPath =
        "polygon(50% 50%, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%)";
    },

    complete() {
      clearInterval(this.holdInterval);
      this.engine.stop();
      this.root.classList.remove("active");
      setTimeout(() => {
        this.root.remove();
      }, 1000);
    },
  };

  // ═════════════════════════════════════════════════════════════════════════
  // 🚀 INITIALIZATION PROTOCOL | BAŞLATMA PROTOKOLÜ
  // ═════════════════════════════════════════════════════════════════════════

  // Settings Menu - Friction
  GM_registerMenuCommand("⚙️ Friction: Low | Sürtünme: Düşük", () => {
    GM_setValue("frictionLevel", "low");
    CONFIG.frictionLevel = "low";
    alert(CONFIG.language === "en" ? "Set to: Low" : "Ayarlandı: Düşük");
  });
  GM_registerMenuCommand("⚙️ Friction: High | Sürtünme: Yüksek", () => {
    GM_setValue("frictionLevel", "high");
    CONFIG.frictionLevel = "high";
    alert(CONFIG.language === "en" ? "Set to: High" : "Ayarlandı: Yüksek");
  });

  // Settings Menu - Language
  GM_registerMenuCommand("🌐 Language: English", () => {
    GM_setValue("language", "en");
    CONFIG.language = "en";
    alert("Language set to: English");
  });
  GM_registerMenuCommand("🌐 Dil: Türkçe", () => {
    GM_setValue("language", "tr");
    CONFIG.language = "tr";
    alert("Dil ayarlandı: Türkçe");
  });

  // Settings Menu - Reset Timer
  GM_registerMenuCommand("🔁 Reset Timer | Zamanlayıcıyı Sıfırla", () => {
    GM_setValue("lastShown", 0);
    location.reload();
  });

  // Start | Başlat
  setTimeout(() => Controller.init(), 1000);
})();
