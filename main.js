/* OPEN/CLOSE PANELS ONLY */
    function openPanel(name) {
      const panel = document.getElementById(name + "-panel");
      if (panel) panel.classList.add("open");
    }

    function closePanel(name) {
      const panel = document.getElementById(name + "-panel");
      if (panel) panel.classList.remove("open");
    }

    document.querySelectorAll("[data-action='intake']").forEach(btn => {
      btn.addEventListener("click", e => {
        e.preventDefault();
        openPanel("intake");
        document.getElementById("intake").scrollIntoView({ behavior:"smooth" });
      });
    });

    document.querySelectorAll("[data-open='intake']").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        openPanel("intake");
        document.getElementById("intake").scrollIntoView({ behavior:"smooth" });
      });
    });

    document.querySelectorAll("[data-open='contact']").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        openPanel("contact");
        document.getElementById("contact").scrollIntoView({ behavior:"smooth" });
      });
    });

    document.querySelectorAll(".toggle-close").forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-close");
        closePanel(target);
      });
    });

    /* TOGGLES MEER WETEN */
    document.querySelectorAll(".mw-toggle").forEach(btn => {
      const panel = btn.nextElementSibling;
      btn.addEventListener("click", () => {
        const wasOpen = panel.classList.contains("open");
        if (wasOpen) {
          panel.classList.remove("open");
          return;
        }
        document.querySelectorAll(".mw-panel.open").forEach(p => p.classList.remove("open"));
        panel.classList.add("open");
      });
    });
