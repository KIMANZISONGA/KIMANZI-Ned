(() => {
  "use strict";

  /* ===============================
     Helpers
  =============================== */

  const $$ = (selector, root = document) =>
    Array.from(root.querySelectorAll(selector));

  function smoothScroll(el) {
    if (!el) return;
    try {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch {
      el.scrollIntoView();
    }
  }

  /* ===============================
     Panels (intake / contact)
  =============================== */

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

  /* ===============================
     Accordions (Meer weten)
  =============================== */

  function wireAccordions() {
    $$(".mw-toggle").forEach((btn) => {
      const panel = btn.nextElementSibling;
      if (!panel) return;

      btn.addEventListener("click", (e) => {
        e.preventDefault();

        const isOpen = panel.classList.contains("open");
        $$(".mw-panel.open").forEach((p) =>
          p.classList.remove("open")
        );

        if (!isOpen) panel.classList.add("open");
      });
    });
  }

  /* ===============================
     Anti-spam (low key)
  =============================== */

  function ensureHidden(form, name, value = "") {
    let input = form.querySelector(`input[name='${name}']`);
    if (!input) {
      input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.prepend(input);
    }
    return input;
  }

  function addHoneypot(form) {
    const name = "company_website";
    let hp = form.querySelector(`input[name='${name}']`);
    if (hp) return hp;

    hp = document.createElement("input");
    hp.type = "text";
    hp.name = name;
    hp.autocomplete = "off";
    hp.tabIndex = -1;
    hp.setAttribute("aria-hidden", "true");

    hp.style.position = "absolute";
    hp.style.left = "-9999px";
    hp.style.width = "1px";
    hp.style.height = "1px";
    hp.style.opacity = "0";

    form.appendChild(hp);
    return hp;
  }

  /* ===============================
     Bedankt tonen
  =============================== */

  function showThanks(form) {
    const type = form.querySelector("input[name='formType']")?.value || "";

    let thanksId = null;
    if (type.includes("intake")) thanksId = "intake-thanks";
    if (type.includes("contact")) thanksId = "contact-thanks";

    if (thanksId) {
      const thanks = document.getElementById(thanksId);
      if (thanks) {
        thanks.style.display = "block";
        smoothScroll(thanks);
      }
    }

    form.style.display = "none";
  }

  /* ===============================
     Forms (AJAX submit)
  =============================== */

  function wireForms() {
    $$("form").forEach((form) => {
      const timeField = ensureHidden(form, "form_load_time", "");
      timeField.value = String(Date.now());

      const honeypot = addHoneypot(form);

      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        /* Honeypot gevuld = bot */
        if (honeypot && honeypot.value.trim().length > 0) {
          return;
        }

        /* Te snel verzonden = bot */
        const start = parseInt(timeField.value, 10);
        if (Number.isFinite(start)) {
          const elapsed = Date.now() - start;
          if (elapsed < 2000) return;
        }

        const submitBtn = form.querySelector("button[type='submit']");
        if (submitBtn) submitBtn.disabled = true;

        try {
          const data = new FormData(form);
          const response = await fetch(form.action, {
            method: form.method || "POST",
            body: data,
            headers: { Accept: "application/json" }
          });

          if (response.ok) {
            showThanks(form);
          } else {
            if (submitBtn) submitBtn.disabled = false;
            alert("Er ging iets mis met verzenden. Probeer het nogmaals.");
          }
        } catch (err) {
          if (submitBtn) submitBtn.disabled = false;
          alert("Verzenden lukte niet. Controleer je verbinding.");
        }
      });
    });
  }

  /* ===============================
     Init
  =============================== */

  document.addEventListener("DOMContentLoaded", () => {
    wirePanels();
    wireAccordions();
    wireForms();
  });
})();
