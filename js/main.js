let lang = localStorage.getItem("lang") || "en";
const $ = id => document.getElementById(id);
const t = v => (v && typeof v === "object" && "en" in v) ? v[lang] : v;
const L = S.links;

function render() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $("brand").textContent = t(S.name);
  $("nav").innerHTML = UI.nav.map(([id, n]) => `<a href="#${id}">${t(n)}</a>`).join("");
  $("lang").textContent = t(UI.langBtn);

  $("home").innerHTML = `<div class="wrap"><div>
    <h1>${t(S.headline)}</h1><p class="lead">${t(S.pitch)}</p>
    <div class="btns"><a class="btn red" href="#contact">${t(UI.hire)}</a>
    <a class="btn ghost" href="${L.mostaql}" target="_blank" rel="noopener">Mostaql</a>
    <a class="btn ghost" href="${L.khamsat}" target="_blank" rel="noopener">Khamsat</a></div></div>
    <div class="photo"><span>${S.initials}</span><img src="assets/photo.jpg" alt="${t(S.name)}" onerror="this.remove()"></div></div>`;

  $("services").innerHTML = `<div class="wrap"><h2>${t(UI.services)}</h2><div class="grid">` +
    S.services.map(s => `<div class="card"><div aria-hidden="true" style="font-size:1.6rem">${s.icon}</div><h3>${t(s.title)}</h3><p>${t(s.text)}</p>${s.price ? `<p class="price">${t(UI.from)} ${s.price}</p>` : ""}</div>`).join("") + `</div></div>`;

  $("projects").innerHTML = `<div class="wrap"><h2>${t(UI.projects)}</h2><div class="grid">` +
    S.projects.map(p => `<article class="card"><span class="badge ${p.status}">${t(UI[p.status])}</span><h3>${t(p.title)}</h3><p>${t(p.desc)}</p>
      <div class="tags">${p.tags.map(x => `<span class="tag">${x}</span>`).join("")}</div>
      <div class="links">${p.video ? `<a href="${p.video}" target="_blank" rel="noopener">${t(UI.video)}</a>` : ""}${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">${t(UI.code)}</a>` : ""}</div></article>`).join("") +
    `<div class="card empty"><p>${t(UI.more)}</p></div></div></div>`;

  const slots = [[11.6, 330], [25.6, 190], [50, 120], [74.4, 190], [88.4, 330]];
  const others = S.tracks.filter(x => x.id !== S.mainFocus), main = S.tracks.find(x => x.id === S.mainFocus);
  const order = [others[0], others[1], main, others[2], others[3]];
  $("skills").innerHTML = `<div class="wrap"><h2>${t(UI.skills)}</h2><div class="arc">` +
    order.map((k, i) => `<div class="node${k === main ? " main" : ""}" style="left:${slots[i][0]}%;top:${slots[i][1]}px">${k === main ? `<span class="badge">${t(UI.main)}</span>` : ""}<h3>${t(k.name)}</h3><p>${t(k.caption)}</p>${k.skills.map(s => `<span class="chip">${s}</span>`).join("")}</div>`).join("") + `</div></div>`;

  $("process").innerHTML = `<div class="wrap"><h2>${t(UI.process)}</h2><div class="steps">` +
    S.steps.map(s => `<div class="step"><h3>${t(s.t)}</h3><p>${t(s.d)}</p></div>`).join("") + `</div></div>`;

  $("about").innerHTML = `<div class="wrap about"><div><h2>${t(UI.about)}</h2>${t(S.about).map(x => `<p>${x}</p>`).join("")}</div>
    <div class="card"><div class="tags" style="flex-direction:column;align-items:flex-start">${t(S.proof).map(x => `<span class="tag">${x}</span>`).join("")}</div>
    <div class="links"><a href="${L.github}" target="_blank" rel="noopener">GitHub</a><a href="${L.codeforces}" target="_blank" rel="noopener">Codeforces</a><a href="${L.linkedin}" target="_blank" rel="noopener">LinkedIn</a></div></div></div>`;

  $("faq").innerHTML = `<div class="wrap"><h2>${t(UI.faq)}</h2>` + S.faq.map(f => `<details><summary>${t(f.q)}</summary><p>${t(f.a)}</p></details>`).join("") + `</div>`;

  const btn = (u, n, red) => u ? `<a class="btn${red ? " red" : ""}" href="${u}" target="_blank" rel="noopener">${n}</a>` : "";
  $("contact").innerHTML = `<div class="wrap"><h2>${t(UI.contact)}</h2><div class="cta-row">` +
    btn(L.telegram, "Telegram", 1) + btn(L.whatsapp, "WhatsApp", 1) + btn(L.mostaql, "Mostaql") + btn(L.khamsat, "Khamsat") + btn(L.email && "mailto:" + L.email, "Email") + `</div>` +
    (L.formAction ? `<form action="${L.formAction}" method="POST"><input name="name" placeholder="${t(UI.fName)}" required><input name="email" type="email" placeholder="${t(UI.fMail)}" required><textarea name="message" rows="4" placeholder="${t(UI.fMsg)}" required></textarea><button class="btn red" type="submit">${t(UI.send)}</button></form>` : "") + `</div>`;

  $("foot").textContent = `© ${new Date().getFullYear()} ${t(S.name)}`;
}
$("lang").onclick = () => { lang = lang === "en" ? "ar" : "en"; localStorage.setItem("lang", lang); render(); };
render();
