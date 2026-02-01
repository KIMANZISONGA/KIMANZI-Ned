(() => {
  "use strict";

  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function safeScrollIntoView(el) {
    if (!el) return;
    try { el.scrollIntoView({ behavior: "smooth", block: "start" }); }
    catch { el.scrollIntoView(); }
  }

  /* ---------- Panels ---------- */
  function openPanel(name) {
    const panel = document.getElementById(`${name}-panel`);
    if (panel) panel.classList.add("open");
  }

  function closePanel(name) {
    const panel = document.getElementById(`${name}-panel`);
    if (panel) panel.classList.remove("open");
  }

  function wirePanelTriggers() {
    $$("[data-action='intake'], [data-open='intake']").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        openPanel("intake");
        safeScrollIntoView(document.getElementById("intake"));
      });
    });

    $$("[data-open='contact']").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        openPanel("contact");
        safeScrollIntoView(document.getElementById("contact"));
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

  /* ---------- Meer weten accordions ---------- */
  function wireAccordions() {
    $$(".mw-toggle").forEach((btn) => {
      const panel = btn.nextElementSibling;
      if (!panel) return;

      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const isOpen = panel.classList.contains("open");
        if (isOpen) {
          panel.classList.remove("open");
          return;
        }
        $$(".mw-panel.open").forEach((p) => p.classList.remove("open"));
        panel.classList.add("open");
      });
    });
  }

  /* ---------- Form security helpers ---------- */
  function ensureHiddenInput(form, name, value = "") {
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
    const hpName = "company_website";
    let hp = form.querySelector(`input[name='${hpName}']`);
    if (hp) return hp;

    hp = document.createElement("input");
    hp.type = "text";
    hp.name = hpName;
    hp.autocomplete = "off";
    hp.tabIndex = -1;
    hp.setAttribute("aria-hidden", "true");
    hp.style.position = "absolute";
    hp.style.left = "-9999px";
    hp.style.top = "0";
    hp.style.width = "1px";
    hp.style.height = "1px";
    hp.style.opacity = "0";

    form.appendChild(hp);
    return hp;
  }

  function showThanks(form) {
    // Koppelen op basis van je hidden formType (klant-intake / klant-contact)
    const ft = form.querySelector("input[name='formType']")?.value || "";
    const id = ft.includes("intake") ? "intake-thanks"
            : ft.includes("contact") ? "contact-thanks"
            : null;

    if (id) {
      const thanks = document.getElementById(id);
      if (thanks) thanks.style.display = "block";
    }

    // Form verbergen om dubbele submits te voorkomen
    form.style.display = "none";
  }

  function wireFormsAjax() {
    $$("form").forEach((form) => {
      // Time trap
      const timeField = ensureHiddenInput(form, "form_load_time", "");
      timeField.value = String(Date.now());

      // Honeypot
      const hp = addHoneypot(form);

      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Honeypot filled? -> bot
        if (hp && typeof hp.value === "string" && hp.value.trim().length > 0) {
          return false;
        }

        // Time trap: under 2 seconds -> likely bot
        const loadedAt = parseInt(timeField.value || "", 10);
        if (Number.isFinite(loadedAt)) {
          const elapsed = Date.now() - loadedAt;
          if (elapsed < 2000) return false;
        }

        // Disable submit button
        const submitBtn = form.querySelector("button[type='submit']");
        if (submitBtn) submitBtn.disabled = true;

        try {
          const formData = new FormData(form);

          // IMPORTANT: we don't rely on _redirect anymore; keep it or remove it—doesn't matter.
          const res = await fetch(form.action, {
            method: form.method || "POST",
            body: formData,
            headers: { "Accept": "application/json" }
          });

          if (res.ok) {
            showThanks(form);
          } else {
            // Fallback: re-enable and optionally show a simple message
            if (submitBtn) submitBtn.disabled = false;
            alert("Er ging iets mis met verzenden. Probeer het nog een keer.");
          }
        } catch {
          if (submitBtn) submitBtn.disabled = false;
          alert("Verzenden lukte niet. Check je verbinding en probeer opnieuw.");
        }
      });
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    wirePanelTriggers();
    wireAccordions();
    wireFormsAjax();
  });
})();
