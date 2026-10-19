/**
 * RAÍZES E ROTAS - MONSENHOR HIPÓLITO (PIAUÍ)
 * Script de Interatividade e Filtros da Base de Dados
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elementos do DOM
  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('dbSearchInput');
  const records = document.querySelectorAll('.db-record');
  const counterElement = document.getElementById('dbResultsCount');
  const toast = document.getElementById('toastNotice');
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mainNav = document.getElementById('mainNav');
  const copyGeoButtons = document.querySelectorAll('.btn-copy-geo');

  let activeCategory = 'all';
  let searchTerm = '';

  // Toggle Navegação Mobile
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      const isOpen = mainNav.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Fechar ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
      });
    });
  }

  // Filtragem da Base de Dados
  function filterDatabase() {
    let visibleCount = 0;

    records.forEach(record => {
      const category = record.dataset.category;
      const title = record.querySelector('.record-name')?.textContent.toLowerCase() || '';
      const desc = record.querySelector('.record-desc')?.textContent.toLowerCase() || '';
      const id = record.dataset.id?.toLowerCase() || '';

      const matchesCategory = (activeCategory === 'all' || category === activeCategory);
      const matchesSearch = searchTerm === '' || 
                            title.includes(searchTerm) || 
                            desc.includes(searchTerm) || 
                            id.includes(searchTerm);

      if (matchesCategory && matchesSearch) {
        record.style.display = 'flex';
        visibleCount++;
      } else {
        record.style.display = 'none';
      }
    });

    if (counterElement) {
      counterElement.textContent = visibleCount;
    }
  }

  // Evento dos Botões de Filtro
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.filter;
      filterDatabase();
    });
  });

  // Evento do Campo de Busca
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      filterDatabase();
    });
  }

  // Exibir Toast
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Copiar Coordenadas para Área de Transferência
  copyGeoButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const coords = btn.dataset.coords;
      if (coords) {
        navigator.clipboard.writeText(coords)
          .then(() => {
            showToast(`📍 Coordenadas ${coords} copiadas com sucesso!`);
          })
          .catch(() => {
            showToast(`📍 Coordenadas: ${coords}`);
          });
      }
    });
  });

  // Destaque de navegação ativa por scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-link[href*="${sectionId}"]`);
      
      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  });
});
