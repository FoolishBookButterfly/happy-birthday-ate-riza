/* ============================================================
   A Polaroid birthday letter for Ate Riza — behavior
   All editable text lives in message.js (open that file to edit).
   ============================================================ */
(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const isVideo = (f) => /\.(mp4|webm|mov)$/i.test(f);

  /* ---------- build envelope text ---------- */
  $("envTo").textContent = MESSAGE.envelope.to;
  $("envName").textContent = MESSAGE.envelope.name;
  $("envBtn").textContent = MESSAGE.envelope.button;
  $("introLine").textContent = MESSAGE.introLine;

  /* confetti bits on the envelope screen */
  (function confetti() {
    const box = document.querySelector(".env-confetti");
    const colors = ["#e07a5f", "#e9c46a", "#2a9d8f", "#d98c9a"];
    for (let i = 0; i < 26; i++) {
      const bit = document.createElement("i");
      bit.style.left = Math.random() * 100 + "%";
      bit.style.background = colors[i % colors.length];
      bit.style.animationDuration = 5 + Math.random() * 7 + "s";
      bit.style.animationDelay = -Math.random() * 10 + "s";
      bit.style.transform = `rotate(${Math.random() * 360}deg)`;
      box.appendChild(bit);
    }
  })();

  /* ---------- build the nine reasons ---------- */
  (function reasons() {
    const wrap = $("reasons");
    MESSAGE.reasons.forEach((r, i) => {
      const n = i + 1;
      const media = isVideo(r.file)
        ? `<video src="${r.file}" controls playsinline preload="metadata"></video>`
        : `<img src="${r.file}" alt="Litrato bilang reason #${n}" loading="lazy">`;

      const el = document.createElement("article");
      el.className = "reason reveal";
      /* first word ("because") stays ink-colored, the rest is the italic emphasis */
      const words = r.reason.trim().split(/\s+/);
      const first = words.shift();
      el.innerHTML = `
        <div class="polaroid" tabindex="0">
          ${media}
          <p class="p-caption">${r.caption}</p>
        </div>
        <div class="reason-text">
          <span class="reason-num">Reason #${n}</span>
          <p class="reason-line"><span>${first}</span> <em>${words.join(" ")}</em></p>
        </div>`;
      wrap.appendChild(el);
    });
  })();

  /* ---------- video moment ---------- */
  (function videoMoment() {
    const v = MESSAGE.video;
    if (!v || !v.file) return;
    const sec = $("videoMoment");
    sec.innerHTML = `
      <p class="video-head reveal">${v.headline}</p>
      <div class="video-frame reveal">
        <video src="${v.file}" playsinline preload="metadata"></video>
        <button class="video-play" type="button" aria-label="Play video"><span>▶</span></button>
        <p class="v-caption">${v.caption}</p>
      </div>`;

    const vid = sec.querySelector("video");
    const btn = sec.querySelector(".video-play");
    btn.addEventListener("click", () => {
      btn.classList.add("hidden");
      vid.setAttribute("controls", "");
      const p = vid.play();
      if (p) p.catch(() => btn.classList.remove("hidden"));
    });
  })();

  /* ---------- the letter ---------- */
  (function letter() {
    $("letterHeading").textContent = MESSAGE.letter.heading;
    const body = $("letterBody");
    MESSAGE.letter.paragraphs.forEach((t) => {
      const p = document.createElement("p");
      p.textContent = t;
      body.appendChild(p);
    });
    $("letterSign").textContent = MESSAGE.letter.signoff;
    $("finale1").textContent = MESSAGE.finale.line1;
    $("finale2").textContent = MESSAGE.finale.line2;
  })();

  /* ---------- finale: banderitas + collage ---------- */
  (function finale() {
    const band = $("banderitas");
    const colors = ["#e07a5f", "#e9c46a", "#2a9d8f", "#d98c9a", "#f2cc8f"];
    for (let i = 0; i < 22; i++) {
      const t = document.createElement("i");
      t.style.background = colors[i % colors.length];
      t.style.animationDelay = (i % 7) * 0.18 + "s";
      band.appendChild(t);
    }
    const collage = $("collage");
    MESSAGE.reasons.filter((r) => !isVideo(r.file)).forEach((r) => {
      const d = document.createElement("div");
      d.className = "thumb";
      d.innerHTML = `<img src="${r.file}" alt="" loading="lazy">`;
      collage.appendChild(d);
    });
  })();

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
    { threshold: 0.18, rootMargin: "0px 0px -6% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* the letter unfolds */
  new IntersectionObserver(
    (entries, obs) =>
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
      }),
    { threshold: 0.3 }
  ).observe($("letter"));

  /* ---------- music ---------- */
  const audio = $("music");
  const musicBtn = $("musicBtn");
  const toast = $("toast");
  let musicMissing = false;
  let toastTimer;
  audio.volume = 0.35;

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3800);
  }

  function playMusic() {
    if (musicMissing) return;
    audio.play().then(() => {
      musicBtn.classList.add("playing");
    }).catch(() => {
      musicMissing = true;
      musicBtn.classList.add("missing");
      showToast("🎵 Walang music.mp3 sa folder — maglagay ng music file para may tugtog.");
    });
  }

  musicBtn.addEventListener("click", () => {
    if (musicMissing) {
      showToast("🎵 Maglagay ng music.mp3 sa folder ng site para may music.");
      return;
    }
    if (audio.paused) playMusic();
    else { audio.pause(); musicBtn.classList.remove("playing"); }
  });

  audio.addEventListener("error", () => {
    musicMissing = true;
    musicBtn.classList.add("missing");
  });

  /* ---------- open the envelope ---------- */
  function openEnvelope() {
    if (document.body.classList.contains("opened")) return;
    document.body.classList.add("opened");
    document.body.classList.remove("locked");
    window.scrollTo(0, 0);
    playMusic();
    setTimeout(() => {
      document.querySelectorAll(".intro.reveal").forEach((el) => el.classList.add("in"));
    }, 350);
    setTimeout(() => { $("envelope").style.display = "none"; }, 1200);
  }

  $("openBtn").addEventListener("click", openEnvelope);

  /* preview: open the envelope right away with index.html#open (or ?open=1) */
  if (location.hash === "#open" || new URLSearchParams(location.search).has("open")) {
    $("envelope").style.display = "none";
    document.body.classList.add("opened");
    document.body.classList.remove("locked");
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    $("letter").classList.add("in");
    /* ?section=intro|reasons|video|letter|finale isolates one section at the top
       (headless screenshots always capture from the document top) */
    const params = new URLSearchParams(location.search);
    const sec = params.get("section");
    if (sec) {
      const map = {
        intro: document.querySelector(".intro"),
        reasons: $("reasons"),
        video: $("videoMoment"),
        letter: document.querySelector(".letter-section"),
        finale: $("finale"),
      };
      Object.keys(map).forEach((key) => {
        if (map[key]) map[key].style.display = key === sec ? "" : "none";
      });
      const banner = document.createElement("div");
      banner.textContent = "SECTION: " + sec;
      banner.style.cssText =
        "position:fixed;top:0;left:0;z-index:99999;background:#000;color:#0f0;font:700 28px monospace;padding:4px 12px";
      document.body.appendChild(banner);
    }
  }
})();
