// ============================================================
//  main.js — Raízes e Rotas · Monsenhor Hipólito, PI v2.0
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Header scroll ─────────────────────────────────────────
  const header = document.querySelector('header');
  window.addEventListener('scroll', () =>
    header.classList.toggle('sc', window.scrollY > 60)
  );

  // ── Menu hambúrguer ───────────────────────────────────────
  const hbg     = document.querySelector('.hbg');
  const navL    = document.querySelector('.nav-l');
  hbg?.addEventListener('click', () => {
    const open = navL.classList.toggle('open');
    hbg.setAttribute('aria-expanded', open);
    const [s1,s2,s3] = hbg.querySelectorAll('span');
    if (open) {
      s1.style.transform = 'rotate(45deg) translate(5px,5px)';
      s2.style.opacity   = '0';
      s3.style.transform = 'rotate(-45deg) translate(5px,-5px)';
    } else {
      [s1,s2,s3].forEach(s => { s.style.transform=''; s.style.opacity=''; });
    }
  });
  navL?.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      navL.classList.remove('open');
      [... hbg.querySelectorAll('span')].forEach(s => { s.style.transform=''; s.style.opacity=''; });
    })
  );

  // ── Smooth scroll ─────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a =>
    a.addEventListener('click', e => {
      const el = document.querySelector(a.getAttribute('href'));
      if (el) { e.preventDefault(); window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 76, behavior: 'smooth' }); }
    })
  );

  // ── Reveal animation ─────────────────────────────────────
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('ok'); obs.unobserve(e.target); } }),
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );
  document.querySelectorAll('.rv').forEach(el => obs.observe(el));

  // ── Tabs de Cultura ───────────────────────────────────────
  document.querySelectorAll('.tab-b').forEach(btn =>
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-b').forEach(b => b.classList.remove('on'));
      document.querySelectorAll('.tab-p').forEach(p => p.classList.remove('on'));
      btn.classList.add('on');
      document.getElementById(btn.dataset.tab)?.classList.add('on');
    })
  );

  // ── Ano dinâmico ─────────────────────────────────────────
  const anoEl = document.getElementById('ano');
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  // ── Base de Dados Catalogada ──────────────────────────────
  renderDB('all');

  const searchInput = document.getElementById('db-search');
  searchInput?.addEventListener('input', () => {
    const cat = document.querySelector('.fil-btn.on')?.dataset.cat || 'all';
    renderDB(cat, searchInput.value.trim());
  });

  document.querySelectorAll('.fil-btn').forEach(btn =>
    btn.addEventListener('click', () => {
      document.querySelectorAll('.fil-btn').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      const search = document.getElementById('db-search')?.value.trim() || '';
      renderDB(btn.dataset.cat, search);
    })
  );
});

// ── Renderiza Base de Dados ──────────────────────────────────
function renderDB(cat = 'all', search = '') {
  const grid  = document.getElementById('db-grid');
  const count = document.getElementById('db-count');
  if (!grid) return;

  const q = search.toLowerCase();
  const filtered = DB_REGISTROS.filter(r => {
    const matchCat = cat === 'all' || r.categoria === cat;
    const matchQ   = !q
      || r.nome.toLowerCase().includes(q)
      || r.descricao.toLowerCase().includes(q)
      || r.codigo.toLowerCase().includes(q)
      || r.cat_label.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  if (count) count.textContent = `${filtered.length} registro${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`;

  if (!filtered.length) {
    grid.innerHTML = `<div class="no-results">🔍 Nenhum registro encontrado para "<strong>${search}</strong>"</div>`;
    return;
  }

  const catColor = { fe: '#D97706', nat: '#136B3B', cult: '#059669' };

  grid.innerHTML = filtered.map(r => {
    const mapsUrl = `https://www.google.com/maps?q=${r.lat},${r.lng}&z=16`;
    const gps     = `${r.lat}, ${r.lng}`;
    const cor     = catColor[r.categoria] || '#136B3B';
    const imgHtml = r.imagem ? `
      <div class="rec-thumb">
        <img src="${r.imagem}" alt="${r.nome}" loading="lazy" onerror="this.parentElement.style.display='none'" />
        <span class="rec-badge-pill" style="background:${cor}">${r.cat_label}</span>
      </div>` : '';

    return `
    <article class="rec-card" data-cat="${r.categoria}" data-codigo="${r.codigo}">
      ${imgHtml}
      <div class="rec-header">
        <div>
          <span class="rec-code">#${r.codigo}</span>
          <span class="badge" style="background:${cor}1a;color:${cor};margin-left:.5rem">${r.cat_label}</span>
        </div>
        <div class="rec-icon">${r.icone}</div>
      </div>
      <div class="rec-body">
        <h3>${r.nome}</h3>
        <p class="rec-tipo">📍 ${r.tipo}</p>
        <p>${r.descricao}</p>
      </div>
      <div class="rec-meta">
        <div class="rec-meta-row">
          <span class="lbl">🗓 Época:</span>
          <span class="val">${r.epoca}</span>
        </div>
        <div class="rec-meta-row">
          <span class="lbl">🏗 Infra:</span>
          <span class="val">${r.infra}</span>
        </div>
        <div class="rec-meta-row">
          <span class="lbl">📡 GPS:</span>
          <span class="gps val">${gps}</span>
        </div>
      </div>
      <div class="rec-actions">
        <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-verde btn-sm">
          🗺️ Abrir no Maps
        </a>
        <button class="btn btn-sm btn-copy" style="background:#f0fdf4;color:#136B3B;border:1.5px solid #86efac"
                onclick="copiarGPS('${gps}', this)" title="Copiar coordenadas GPS">
          📋 Copiar GPS
        </button>
      </div>
    </article>`;
  }).join('');
}

// ── Copiar GPS ───────────────────────────────────────────────
function copiarGPS(gps, btn) {
  navigator.clipboard?.writeText(gps).then(() => {
    const orig = btn.innerHTML;
    btn.innerHTML = '✅ Copiado!';
    btn.style.background = '#d4edda';
    btn.style.color = '#155724';
    btn.style.borderColor = '#c3e6cb';
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.background = '';
      btn.style.color = '';
      btn.style.borderColor = '';
    }, 2000);
  }).catch(() => {
    // Fallback para navegadores sem clipboard API (file://)
    const el = document.createElement('textarea');
    el.value = gps;
    el.style.position = 'fixed';
    el.style.opacity  = '0';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    const orig = btn.innerHTML;
    btn.innerHTML = '✅ Copiado!';
    btn.style.background = '#d4edda';
    setTimeout(() => { btn.innerHTML = orig; btn.style.background=''; }, 2000);
  });
}
