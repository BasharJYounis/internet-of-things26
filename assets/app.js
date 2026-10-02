const urls = {
  whatsappGroup: "https://chat.whatsapp.com/CmAWYqU9xKBCOpUqtmXjHr?mode=gi_t",
  messengerGroup: "https://m.me/j/hadsRqbN_rqQH1ea/?send_source=gc:copy_invite_link_c",
  facebookPage: "https://www.facebook.com/share/1DyMZAX75b/",
  facebookGroup: "https://www.facebook.com/share/g/1Ecqshezmb/",
  whatsappCommunity: "",
  instagramCRC: "https://www.instagram.com/crc_just?stkn=MXE4YXB0YzcydHZiMA=="
};

const icons = {
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z"/><path d="m9 12 2 2 4-4"/></svg>`,
  cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>`,
  gamepad: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 11h4M8 9v4M15 12h.01M18 10h.01"/><path d="M17.3 5H6.7A4.7 4.7 0 0 0 2 9.7v3.6A4.7 4.7 0 0 0 6.7 18c1.4 0 2.7-.6 3.6-1.7h3.4A4.7 4.7 0 0 0 22 13.3V9.7A4.7 4.7 0 0 0 17.3 5Z"/></svg>`,
  cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H7a5 5 0 1 1 1.5-9.8A7 7 0 0 1 22 12a4.5 4.5 0 0 1-4.5 7Z"/></svg>`,
  atom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1.25" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="4.2"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.371-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.895 6.994c-.003 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0 0 12.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.69 1.448h.005c6.558 0 11.894-5.335 11.896-11.893a11.821 11.821 0 0 0-3.489-8.413Z"/></svg>`,
  messenger: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111S18.627 0 12 0Zm1.191 14.963-3.056-3.26-5.963 3.26L10.731 8l3.13 3.26L19.75 8l-6.559 6.963Z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none"/></svg>`,
  external: `<svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>`
};

const links = [
  { key: "whatsappGroup", title: "Cohort WhatsApp Group", icon: "whatsapp", color: "#31df88" },
  { key: "messengerGroup", title: "Cohort Messenger Group", icon: "messenger", color: "#31a8ff" },
  { key: "facebookPage", title: "Department Facebook Page", icon: "facebook", color: "#5c91ff" },
  { key: "facebookGroup", title: "Department Facebook Group", icon: "users", color: "#7caaff" },
  { key: "instagramCRC", title: "CRC Instagram Page", icon: "instagram", color: "#f46bd2" }
];

if (document.body.dataset.community === "true") {
  links.splice(4, 0, {
    key: "whatsappCommunity",
    title: "Department WhatsApp Community",
    icon: "whatsapp",
    color: "#31df88"
  });
}

const list = document.getElementById("links-list");
const toast = document.getElementById("toast");
let toastTimer;

document.getElementById("major-icon").innerHTML = icons[document.body.dataset.majorIcon];

function showToast() {
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2100);
}

links.forEach((item) => {
  const href = urls[item.key].trim();
  const link = document.createElement("a");
  link.className = "link-card";
  link.style.setProperty("--icon-color", item.color);
  link.href = href || "#";

  if (href) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showToast();
    });
  }

  link.innerHTML = `
    <span class="link-icon">${icons[item.icon]}</span>
    <span class="link-title">${item.title}</span>
    ${icons.external}
  `;
  list.appendChild(link);
});

const canvas = document.getElementById("tech-canvas");
const ctx = canvas.getContext("2d");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let width = 0;
let height = 0;
let ratio = 1;
let traces = [];
let animationFrame;

function seededRandom(seed) {
  let value = seed % 2147483647;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function buildTraces() {
  const random = seededRandom(Math.round(width + height));
  const count = width < 600 ? 13 : 22;
  const grid = width < 600 ? 38 : 52;
  traces = [];

  for (let i = 0; i < count; i += 1) {
    const fromLeft = i % 2 === 0;
    let x = fromLeft ? -grid : width + grid;
    let y = Math.round((random() * height) / grid) * grid;
    const points = [{ x, y }];
    const segments = 3 + Math.floor(random() * 4);

    for (let step = 0; step < segments; step += 1) {
      if (step % 2 === 0) {
        const direction = fromLeft ? 1 : -1;
        x += direction * grid * (1.5 + Math.floor(random() * 3));
      } else {
        y += (random() > 0.5 ? 1 : -1) * grid * (1 + Math.floor(random() * 2));
        y = Math.max(grid, Math.min(height - grid, y));
      }
      points.push({ x, y });
    }

    const lengths = [];
    let total = 0;
    for (let p = 1; p < points.length; p += 1) {
      const length = Math.hypot(points[p].x - points[p - 1].x, points[p].y - points[p - 1].y);
      lengths.push(length);
      total += length;
    }

    traces.push({
      points,
      lengths,
      total,
      progress: random(),
      speed: 0.025 + random() * 0.035,
      cyan: random() > 0.35
    });
  }
}

function resizeCanvas() {
  ratio = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  buildTraces();
}

function pointOnTrace(trace, progress) {
  let distance = progress * trace.total;
  for (let i = 0; i < trace.lengths.length; i += 1) {
    if (distance <= trace.lengths[i]) {
      const start = trace.points[i];
      const end = trace.points[i + 1];
      const amount = trace.lengths[i] === 0 ? 0 : distance / trace.lengths[i];
      return {
        x: start.x + (end.x - start.x) * amount,
        y: start.y + (end.y - start.y) * amount
      };
    }
    distance -= trace.lengths[i];
  }
  return trace.points[trace.points.length - 1];
}

function drawTrace(trace) {
  ctx.beginPath();
  ctx.moveTo(trace.points[0].x, trace.points[0].y);
  trace.points.slice(1).forEach((point) => ctx.lineTo(point.x, point.y));
  ctx.strokeStyle = trace.cyan ? "rgba(40, 221, 255, 0.105)" : "rgba(55, 103, 255, 0.11)";
  ctx.lineWidth = 1;
  ctx.stroke();

  trace.points.slice(1, -1).forEach((point) => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 2.2, 0, Math.PI * 2);
    ctx.fillStyle = trace.cyan ? "rgba(48, 225, 255, 0.25)" : "rgba(75, 113, 255, 0.25)";
    ctx.fill();
  });
}

function drawPulse(trace) {
  const point = pointOnTrace(trace, trace.progress);
  const color = trace.cyan ? "31, 231, 255" : "68, 103, 255";
  const glow = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, 14);
  glow.addColorStop(0, `rgba(${color}, 0.95)`);
  glow.addColorStop(0.28, `rgba(${color}, 0.38)`);
  glow.addColorStop(1, `rgba(${color}, 0)`);
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(point.x, point.y, 14, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = `rgb(${color})`;
  ctx.beginPath();
  ctx.arc(point.x, point.y, 1.7, 0, Math.PI * 2);
  ctx.fill();
}

function drawFrame(time) {
  ctx.clearRect(0, 0, width, height);
  traces.forEach((trace) => {
    drawTrace(trace);
    drawPulse(trace);
    if (!reduceMotion) trace.progress = (trace.progress + trace.speed / 60) % 1;
  });

  if (!reduceMotion) animationFrame = requestAnimationFrame(drawFrame);
}

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    cancelAnimationFrame(animationFrame);
    resizeCanvas();
    if (reduceMotion) drawFrame(0);
    else animationFrame = requestAnimationFrame(drawFrame);
  }, 160);
});

resizeCanvas();
if (reduceMotion) drawFrame(0);
else animationFrame = requestAnimationFrame(drawFrame);
