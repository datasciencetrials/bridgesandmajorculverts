import sys

path = 'index.html'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

old_code = """      <div class="pane-metric"><strong>${fmt(projected.factor, 2)}x</strong><span>Projection factor</span></div>
      <div class="pane-metric"><strong>${row.seasonal_factor != null ? fmt(row.seasonal_factor, 3) + 'x' : '-'}</strong><span>Seasonal factor</span></div>
    </div>
    <div class="pane-section-title">Projected Vehicle Class Loading</div>"""

new_code = """      <div class="pane-metric"><strong>${fmt(projected.factor, 2)}x</strong><span>Projection factor</span></div>
      <div class="pane-metric"><strong>${row.seasonal_factor != null ? fmt(row.seasonal_factor, 3) + 'x' : '-'}</strong><span>Selected Month Factor</span></div>
    </div>

    <div class="pane-section-title">Regional Seasonal Factors (${normalizeTrafficRegion(row.region) || 'National'})</div>
    <div style="display:grid; grid-template-columns: repeat(6, 1fr); gap: 4px; margin-bottom: 16px; font-size: 11px;">
      ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m, i) => {
        const factors = REGIONAL_SEASONAL_ADT_FACTORS[normalizeTrafficRegion(row.region)] || [1,1,1,1,1,1,1,1,1,1,1,1];
        const f = factors[i] || 1;
        const isCurrent = i === window.timelineMonth;
        return `<div style="background: rgba(255,255,255,0.05); padding: 4px; border-radius: 4px; text-align: center; ${isCurrent ? 'border: 1px solid var(--theme-color, #00e5ff); background: rgba(0,229,255,0.1);' : ''}">
          <div style="color: rgba(255,255,255,0.5); font-size: 10px;">${m}</div>
          <div style="font-weight: 500; color: ${f > 1 ? '#ef4444' : f < 1 ? '#22c55e' : '#fff'}">${f.toFixed(3)}x</div>
        </div>`;
      }).join('')}
    </div>

    <div class="pane-section-title">Projected Vehicle Class Loading</div>"""

if old_code in content:
    content = content.replace(old_code, new_code)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Successfully updated seasonal factors UI.')
else:
    print('Target code not found!')
