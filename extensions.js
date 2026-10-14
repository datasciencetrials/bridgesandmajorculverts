// --- NEW DASHBOARD EXTENSIONS ---

function initPhotosTab() {
  if (window.__photosInitialized) return;
  window.__photosInitialized = true;
  
  const listContainer = document.getElementById('photoStructureList');
  const galleryContainer = document.getElementById('photoGallery');
  const searchInput = document.getElementById('photoSearch');
  
  if (typeof PHOTOS_DATA === 'undefined' || !PHOTOS_DATA) {
     galleryContainer.innerHTML = '<div class="empty-state"><p>No photos data loaded.</p></div>';
     return;
  }
  
  const ids = Object.keys(PHOTOS_DATA).sort();
  
  function renderList(filterText = '') {
      listContainer.innerHTML = '';
      const text = filterText.toLowerCase();
      
      const filtered = ids.filter(id => id.toLowerCase().includes(text));
      
      filtered.forEach(id => {
          const btn = document.createElement('button');
          btn.className = 'btn btn-outline';
          btn.style.width = '100%';
          btn.style.textAlign = 'left';
          btn.style.marginBottom = '4px';
          btn.style.borderColor = 'rgba(255,255,255,0.1)';
          btn.style.color = '#fff';
          btn.innerText = 'Structure ' + id;
          btn.onclick = () => {
              // Highlight selected
              Array.from(listContainer.children).forEach(c => c.style.borderColor = 'rgba(255,255,255,0.1)');
              btn.style.borderColor = 'var(--accent-cyan)';
              
              // Render photos
              galleryContainer.innerHTML = '';
              const photos = PHOTOS_DATA[id];
              if (photos.length === 0) {
                 galleryContainer.innerHTML = '<div class="empty-state"><p>No photos found for ' + id + '.</p></div>';
              } else {
                 photos.forEach(path => {
                     const imgContainer = document.createElement('div');
                     imgContainer.style.background = '#000';
                     imgContainer.style.borderRadius = '8px';
                     imgContainer.style.overflow = 'hidden';
                     imgContainer.style.border = '1px solid rgba(255,255,255,0.1)';
                     
                     const img = document.createElement('img');
                     img.src = path;
                     img.style.width = '100%';
                     img.style.height = '200px';
                     img.style.objectFit = 'cover';
                     img.style.display = 'block';
                     img.loading = 'lazy';
                     
                     const p = document.createElement('p');
                     p.style.margin = '0';
                     p.style.padding = '8px';
                     p.style.fontSize = '12px';
                     p.style.color = 'rgba(255,255,255,0.7)';
                     p.style.background = 'rgba(0,0,0,0.5)';
                     p.style.wordBreak = 'break-all';
                     const filename = path.split('/').pop();
                     p.innerText = filename;
                     
                     imgContainer.appendChild(img);
                     imgContainer.appendChild(p);
                     galleryContainer.appendChild(imgContainer);
                 });
              }
          };
          listContainer.appendChild(btn);
      });
      
      if (filtered.length === 0) {
         listContainer.innerHTML = '<p style="color: rgba(255,255,255,0.5); font-size: 12px; padding: 8px;">No structures found.</p>';
      }
  }
  
  renderList();
  
  if (searchInput) {
      searchInput.addEventListener('input', (e) => {
          renderList(e.target.value);
      });
  }
}

function initStatisticsTab() {
  if (window.__statsInitialized) return;
  window.__statsInitialized = true;
  
  const bridges = window.bridgeDataCache?.data || [];
  const culverts = window.bridgeDataCache?.culverts || [];
  
  // Aggregate data
  const bRegions = {};
  const bConditions = {};
  bridges.forEach(b => {
      const r = b.region || 'Unknown';
      bRegions[r] = (bRegions[r] || 0) + 1;
      const c = b.overall_rating || 'Unknown';
      bConditions[c] = (bConditions[c] || 0) + 1;
  });
  
  const cRegions = {};
  const cConditions = {};
  culverts.forEach(c => {
      const r = c.region || 'Unknown';
      cRegions[r] = (cRegions[r] || 0) + 1;
      const cond = c.overall_rating || 'Unknown';
      cConditions[cond] = (cConditions[cond] || 0) + 1;
  });
  
  // Build KPI blocks
  const kpis = document.getElementById('statsKpis');
  if (kpis) {
      kpis.innerHTML = `
        <div class="kpi-card">
          <div class="kpi-label">Total Bridge Crossings</div>
          <div class="kpi-value highlight">${bridges.length}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Total Major Culverts</div>
          <div class="kpi-value highlight">${culverts.length}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Total Structures</div>
          <div class="kpi-value highlight">${bridges.length + culverts.length}</div>
        </div>
      `;
  }
  
  // Helper for charts
  function drawPie(ctxId, dataObj, title) {
      const ctx = document.getElementById(ctxId);
      if (!ctx || !window.Chart) return;
      const labels = Object.keys(dataObj);
      const data = Object.values(dataObj);
      new Chart(ctx, {
          type: 'doughnut',
          data: {
              labels,
              datasets: [{
                  data,
                  backgroundColor: ['#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#06b6d4', '#64748b'],
                  borderColor: '#080d1c',
                  borderWidth: 2
              }]
          },
          options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { position: 'right', labels: { color: '#a0aec0', font: {family: 'Plus Jakarta Sans'} } } }
          }
      });
  }
  
  drawPie('chartBridgesRegion', bRegions, 'Bridges by Region');
  drawPie('chartCulvertsRegion', cRegions, 'Culverts by Region');
  drawPie('chartBridgesCondition', bConditions, 'Bridges by Condition');
  drawPie('chartCulvertsCondition', cConditions, 'Culverts by Condition');
}
