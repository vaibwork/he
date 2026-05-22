/* =============================================================
   HUBRIS ENGINEERS — main.js
   ============================================================= */

/* ---- CONFIG: update the WhatsApp number here (intl format, no + or spaces) ---- */
const WHATSAPP_NUMBER = "918777249023";

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- Sticky header shadow ---------- */
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 20);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile nav toggle ---------- */
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        toggle.classList.remove("open");
        links.classList.remove("open");
      })
    );
  }

  /* ---------- Scroll reveal ---------- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el, i) => {
      el.style.transitionDelay = (i % 4) * 80 + "ms";
      io.observe(el);
    });
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* ---------- Accordion ---------- */
  document.querySelectorAll(".accordion__head").forEach((head) => {
    head.addEventListener("click", () => {
      const item = head.closest(".accordion__item");
      const body = item.querySelector(".accordion__body");
      const isOpen = item.classList.contains("open");
      // close siblings in same accordion
      const parent = item.parentElement;
      parent.querySelectorAll(".accordion__item.open").forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove("open");
          openItem.querySelector(".accordion__body").style.maxHeight = null;
        }
      });
      if (isOpen) {
        item.classList.remove("open");
        body.style.maxHeight = null;
      } else {
        item.classList.add("open");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const target = parseFloat(el.dataset.count);
          const suffix = el.dataset.suffix || "";
          let cur = 0;
          const step = target / 45;
          const tick = () => {
            cur += step;
            if (cur >= target) {
              el.textContent = target + suffix;
            } else {
              el.textContent = Math.floor(cur) + suffix;
              requestAnimationFrame(tick);
            }
          };
          tick();
          cio.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => cio.observe(c));
  }

  /* ---------- WhatsApp Lead Form ---------- */
  const leadForms = document.querySelectorAll("[data-wa-form]");
  leadForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const get = (name) => {
        const el = form.querySelector(`[name="${name}"]`);
        return el ? el.value.trim() : "";
      };

      const name = get("name");
      const phone = get("phone");
      const email = get("email");
      const company = get("company");
      const service = get("service");
      const message = get("message");

      // Basic validation
      if (!name || !phone) {
        showFormError(form, "Please enter your name and phone number.");
        return;
      }

      // Build a clean WhatsApp message
      let text = "*New Enquiry — Hubris Engineers*%0A%0A";
      text += `*Name:* ${enc(name)}%0A`;
      text += `*Phone:* ${enc(phone)}%0A`;
      if (email) text += `*Email:* ${enc(email)}%0A`;
      if (company) text += `*Company:* ${enc(company)}%0A`;
      if (service) text += `*Service:* ${enc(service)}%0A`;
      if (message) text += `*Details:* ${enc(message)}%0A`;
      text += "%0A_Sent from hubrisengineers.com_";

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
      window.open(url, "_blank");

      showFormSuccess(form);
      form.reset();
    });
  });

  function enc(str) {
    return encodeURIComponent(str).replace(/%20/g, " ");
  }

  function showFormError(form, msg) {
    let box = form.querySelector(".form-msg");
    if (!box) {
      box = document.createElement("div");
      box.className = "form-msg";
      form.appendChild(box);
    }
    box.style.color = "#ff6b6b";
    box.style.marginTop = "14px";
    box.style.fontSize = "0.88rem";
    box.style.textAlign = "center";
    box.textContent = msg;
  }

  function showFormSuccess(form) {
    let box = form.querySelector(".form-msg");
    if (!box) {
      box = document.createElement("div");
      box.className = "form-msg";
      form.appendChild(box);
    }
    box.style.color = "#25d366";
    box.style.marginTop = "14px";
    box.style.fontSize = "0.88rem";
    box.style.textAlign = "center";
    box.textContent = "Opening WhatsApp… If it doesn't open, please message us at +91 87772 49023.";
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
