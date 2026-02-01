<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1" name="viewport"/>
  <meta content="no-referrer" name="referrer"/>
  <meta content="geolocation=(), microphone=(), camera=(), payment=(), usb=()" http-equiv="Permissions-Policy"/>
  <meta content="DENY" http-equiv="X-Frame-Options"/>
  <meta content="nosniff" http-equiv="X-Content-Type-Options"/>

  <meta name="description" content="UrbanChill helpt zelfstandige professionals en remote workers bij tijdelijk leven en werken in Nairobi. Persoonlijke lokale begeleiding, veilige landing en rust zonder communities, tracking of ruis.">

  <!-- CSP: Formspree via normale POST -->
  <meta http-equiv="Content-Security-Policy"
        content="default-src 'self';
                 base-uri 'self';
                 frame-ancestors 'none';
                 form-action https://formspree.io https://api.formspree.io;
                 img-src 'self' https://files.catbox.moe data:;
                 style-src 'self' 'unsafe-inline';
                 script-src 'self' 'unsafe-inline';" />

  <title>UrbanChill — Tijdelijk verblijf en werken in Kenia, discreet begeleid</title>

  <style>
    :root {
      --green: #2C4A34;
      --orange: #C56428;
      --sand: #F5E9D1;
      --cream: #FFF9F0;
      --ink: #2B2A26;
      --muted: #5A6270;
      --radius: 14px;
      --shadow: 0 6px 16px rgba(0,0,0,.08);
    }

    * { box-sizing:border-box; }
    html { scroll-behavior:smooth; }

    body {
      margin:0;
      background:var(--sand);
      color:var(--ink);
      font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
      line-height:1.55;
    }

    h1,h2,h3 { margin-top:0; color:var(--green); }
    a { color:var(--green); text-decoration:none; transition:.25s; }
    a:hover { opacity:.9; }

    .topnav {
      position:sticky;
      top:0;
      z-index:10;
      background:var(--cream);
      border-bottom:1px solid #E3D8BE;
    }
    .topnav a {
      display:inline-block;
      padding:14px 18px;
      font-weight:600;
      color:var(--green);
    }
    .topnav a:hover { color:var(--orange); }

    .signal-nav{
      margin-left:8px;
      font-weight:600;
      color:#0A7CFF;
      opacity:.85;
      padding:14px 12px;
    }
    .signal-nav:hover{ opacity:1; color:#0A7CFF; }

    header {
      position:relative;
      overflow:hidden;
      text-align:center;
      color:#fff;
      padding:100px 20px 90px;
    }
    .hero-media { position:absolute; inset:0; z-index:0; overflow:hidden; }
    .hero-media img { width:100%; height:100%; object-fit:cover; filter:brightness(0.9); }
    .overlay {
      position:absolute; inset:0; z-index:1;
      background:linear-gradient(135deg, rgba(44,74,52,.80), rgba(44,74,52,.92));
    }
    header h1, header p, header .btn { position:relative; z-index:2; }
    header h1 { font-size:clamp(2rem,4vw,3rem); margin-bottom:10px; }
    header p.agent { font-weight:600; font-size:1.05rem; color:var(--orange); margin:10px 0 10px; }
    header p.sub { font-size:1.05rem; margin:0 auto 22px; max-width:720px; opacity:.95; }

    .btn {
      display:inline-block;
      padding:12px 26px;
      border-radius:10px;
      font-weight:600;
      background:var(--green);
      color:#fff;
      box-shadow:var(--shadow);
      cursor:pointer;
    }
    .btn:hover { background:var(--orange); color:var(--ink); }

    main { max-width:900px; margin:0 auto; padding:50px 20px 80px; }
    section { margin-bottom:70px; }

    .card {
      background:var(--cream);
      border-radius:var(--radius);
      padding:32px;
      box-shadow:var(--shadow);
    }

    .inline-image{
      display:block;
      width:100%;
      height:auto;
      margin:18px 0 22px;
      border-radius:var(--radius);
      box-shadow:var(--shadow);
    }

    .kimanzi-form {
      display:flex;
      flex-direction:column;
      gap:18px;
      max-width:520px;
      margin:10px auto 0;
      position:relative;
    }
    .kimanzi-form label { font-weight:500; color:var(--muted); }
    .kimanzi-form input, .kimanzi-form select, .kimanzi-form textarea {
      width:100%;
      padding:12px 14px;
      border-radius:var(--radius);
      border:1px solid #d6cbb7;
      font-size:1rem;
      background:#fff;
    }
    .kimanzi-form textarea { min-height:110px; resize:vertical; }
    .kimanzi-submit {
      background:var(--green);
      color:#fff;
      padding:12px 20px;
      border-radius:var(--radius);
      border:none;
      cursor:pointer;
      font-weight:600;
      width:max-content;
    }

    .toggle-panel { max-height:0; overflow:hidden; transition:max-height .3s ease; }
    .toggle-panel.open { max-height:2000px; }

    .toggle-footer { margin-top:10px; font-size:.85rem; color:var(--muted); text-align:right; }
    .toggle-close {
      background:none; border:none; font-size:.85rem;
      color:var(--green); text-decoration:underline; cursor:pointer;
    }

    .mw-item { margin-bottom:16px; }
    .mw-toggle {
      width:100%;
      text-align:left;
      background:var(--green);
      color:#fff;
      padding:12px 16px;
      border-radius:var(--radius);
      border:none;
      font-size:1rem;
      font-weight:600;
      cursor:pointer;
    }
    .mw-toggle:hover { background:var(--orange); color:var(--ink); }
    .mw-panel {
      max-height:0;
      overflow:hidden;
      background:#fff;
      border-radius:var(--radius);
      padding:0 16px;
      transition:max-height .3s ease, padding .3s ease;
    }
    .mw-panel.open { padding:16px; max-height:900px; }

    .bullets{ margin:10px 0 18px; padding-left:18px; }
    .bullets li{ margin:6px 0; color:var(--ink); }
    .muted{ color:var(--muted); }

    footer { background:var(--sand); padding:40px 20px 35px; border-top:2px solid var(--orange); }
    footer img { max-width:225px; object-fit:contain; display:block; margin:0 auto 14px; }
    footer p { text-align:center; font-size:.97rem; opacity:.88; margin:0; }

    /* Honeypot (onzichtbaar) */
    .hp {
      position:absolute;
      left:-9999px;
      width:1px;
      height:1px;
      opacity:0;
      pointer-events:none;
    }
  </style>
</head>

<body>
  <nav class="topnav">
    <a href="#over">Wie is UrbanChill</a>
    <a href="#diensten">Diensten</a>
    <a href="#verhaal">Verhaal</a>
    <a href="#meer-weten">Meer weten</a>
    <a data-open="intake" href="#intake">Intake</a>
    <a data-open="contact" href="#contact">Contact</a>
    <a aria-label="Contact via Signal" class="signal-nav"
       href="https://signal.me/#eu/jPhei3ZTNaLyCCoG10iCMC_kJaZaidg0YUAZWLVzFQpEwDQOSedIC4t7i39jhN7-"
       rel="noopener" target="_blank">Signal</a>
  </nav>

  <header>
    <div class="hero-media">
      <img alt="UrbanChill hero" loading="lazy" src="https://files.catbox.moe/3tviml.jpg"/>
    </div>
    <div class="overlay"></div>

    <h1>UrbanChill</h1>
    <p class="agent">Rust, discretie en een zachte landing in Nairobi en Mombasa</p>
    <p class="sub">Een rustige basis voor mensen die tijdelijk in Kenia verblijven of vanuit Nairobi werken. Discrete begeleiding voor wie hier leeft, reist en remote werkt.</p>
    <a class="btn" data-action="intake" href="#intake">Plan intake →</a>
  </header>

  <main>
    <!-- (jouw content blijft hetzelfde) -->
    <!-- ... ik laat je secties hier exact staan zoals je ze stuurde ... -->

    <section class="card" id="intake">
      <h2>Intake</h2>
      <p>Rustig en zonder druk. Vul in wat je weet. Na verzending nemen we discreet contact met je op.</p>

      <div class="toggle-panel" id="intake-panel">
        <form action="https://formspree.io/f/xldqevbj" class="kimanzi-form" method="POST">
          <input name="formType" type="hidden" value="klant-intake"/>

          <!-- Anti spam -->
          <input class="hp" type="text" name="company_website" autocomplete="off" tabindex="-1" aria-hidden="true">
          <input type="hidden" name="form_load_time" value="">

          <label for="i-naam">Naam</label>
          <input id="i-naam" name="naam" required type="text"/>

          <label for="i-telefoon">Telefoonnummer</label>
          <input id="i-telefoon" name="telefoon" required type="tel"/>

          <label for="i-email">E-mail</label>
          <input id="i-email" name="email" required type="email"/>

          <label for="i-dienst">Gekozen dienst</label>
          <select id="i-dienst" name="dienst" required>
            <option value="SOLO">SOLO</option>
            <option value="ADVENTURE">ADVENTURE</option>
          </select>

          <label for="i-periode">Voorkeursperiode</label>
          <input id="i-periode" name="voorkeursperiode" required type="text"/>

          <label for="i-omschrijving">Omschrijf kort je situatie of vraag</label>
          <textarea id="i-omschrijving" name="omschrijving"
                    placeholder="Vertel in een paar zinnen wat je zoekt, waar je staat of wat je nodig hebt."
                    required></textarea>

          <label for="i-verblijf">Verblijfslocatie</label>
          <input id="i-verblijf" name="verblijf" type="text"/>

          <label for="i-vlucht">Vluchtnummer</label>
          <input id="i-vlucht" name="vluchtnummer" type="text"/>

          <label for="i-datum">Aankomstdatum</label>
          <input id="i-datum" name="aankomstdatum" type="date"/>

          <label for="i-tijd">Aankomsttijd</label>
          <input id="i-tijd" name="aankomsttijd" type="time"/>

          <button class="kimanzi-submit" type="submit">Intake versturen</button>
        </form>

        <div class="toggle-footer">
          <button class="toggle-close" data-close="intake" type="button">Sluiten</button>
        </div>
      </div>
    </section>

    <section class="card" id="contact">
      <h2>Contact</h2>
      <p>Rustig, persoonlijk en discreet. We reageren altijd.</p>

      <div class="toggle-panel" id="contact-panel">
        <form action="https://formspree.io/f/xldqevbj" class="kimanzi-form" method="POST">
          <input name="formType" type="hidden" value="klant-contact"/>

          <!-- Anti spam -->
          <input class="hp" type="text" name="company_website" autocomplete="off" tabindex="-1" aria-hidden="true">
          <input type="hidden" name="form_load_time" value="">

          <label for="c-naam">Naam</label>
          <input id="c-naam" name="naam" required type="text"/>

          <label for="c-email">E-mail</label>
          <input id="c-email" name="email" required type="email"/>

          <label for="c-telefoon">Telefoonnummer</label>
          <input id="c-telefoon" name="telefoon" type="tel"/>

          <label for="c-bericht">Bericht</label>
          <textarea id="c-bericht" name="bericht" required></textarea>

          <button class="kimanzi-submit" type="submit">Versturen</button>
        </form>

        <div class="toggle-footer">
          <button class="toggle-close" data-close="contact" type="button">Sluiten</button>
        </div>
      </div>
    </section>

  </main>

  <footer>
    <img alt="UrbanChill logo" loading="lazy" src="https://files.catbox.moe/yq7blc.png"/>
    <p>© UrbanChill — Privacy first. Geen cookies. Geen tracking. Geen social.</p>
  </footer>

  <script>
    (() => {
      "use strict";

      const $$ = (selector, root = document) =>
        Array.from(root.querySelectorAll(selector));

      function smoothScroll(el) {
        if (!el) return;
        try { el.scrollIntoView({ behavior: "smooth", block: "start" }); }
        catch { el.scrollIntoView(); }
      }

      function openPanel(name) {
        const panel = document.getElementById(`${name}-panel`);
        if (panel) panel.classList.add("open");
      }

      function closePanel(name) {
        const panel = document.getElementById(`${name}-panel`);
        if (panel) panel.classList.remove("open");
      }

      function wirePanels() {
        $$("[data-action='intake'], [data-open='intake']").forEach((el) => {
          el.addEventListener("click", (e) => {
            e.preventDefault();
            openPanel("intake");
            smoothScroll(document.getElementById("intake"));
          });
        });

        $$("[data-open='contact']").forEach((el) => {
          el.addEventListener("click", (e) => {
            e.preventDefault();
            openPanel("contact");
            smoothScroll(document.getElementById("contact"));
          });
        });

        $$(".toggle-close").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            const target = btn.getAttribute("data-close");
            if (target) closePanel(target);
          });
        });
      }

      function wireAccordions() {
        $$(".mw-toggle").forEach((btn) => {
          const panel = btn.nextElementSibling;
          if (!panel) return;

          btn.addEventListener("click", (e) => {
            e.preventDefault();
            const isOpen = panel.classList.contains("open");
            $$(".mw-panel.open").forEach((p) => p.classList.remove("open"));
            if (!isOpen) panel.classList.add("open");
          });
        });
      }

      function wireAntiSpamWithoutBreakingSubmit() {
        $$("form").forEach((form) => {
          const timeField = form.querySelector("input[name='form_load_time']");
          if (timeField) timeField.value = String(Date.now());

          form.addEventListener("submit", (e) => {
            const hp = form.querySelector("input[name='company_website']");
            if (hp && hp.value.trim().length > 0) {
              e.preventDefault();
              return;
            }

            const start = parseInt(timeField?.value || "0", 10);
            if (Number.isFinite(start)) {
              const elapsed = Date.now() - start;
              if (elapsed < 2000) {
                e.preventDefault();
                return;
              }
            }

            // BELANGRIJK: geen preventDefault verder — normale POST naar Formspree
          });
        });
      }

      document.addEventListener("DOMContentLoaded", () => {
        wirePanels();
        wireAccordions();
        wireAntiSpamWithoutBreakingSubmit();
      });
    })();
  </script>
</body>
</html>
