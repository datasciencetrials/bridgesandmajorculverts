import sys
import re

path = 'index.html'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add the new Tab button
if 'data-tab="bridge-seasonal"' not in content:
    content = content.replace(
        '<button class="tab" data-tab="bridge-traffic" role="tab">Bridge Traffic Analytics</button>',
        '<button class="tab" data-tab="bridge-traffic" role="tab">Bridge Traffic Analytics</button>\n    <button class="tab" data-tab="bridge-seasonal" role="tab">Seasonal Factors</button>'
    )

# 2. Add the new Tab Panel
tab_panel_html = """
<div id="panel-bridge-seasonal" class="tab-pane" role="tabpanel">
  <div class="card">
    <div class="card-title">Bridge Seasonal Factors</div>
    <div class="card-subtitle">Monthly seasonal ADT adjustment factors applied to each bridge crossing based on its geographic region. <strong>Click on any row to select the bridge.</strong></div>
    <div class="table-wrap analytics-grid-scroll" style="margin-top:12px;">
      <table class="table" id="bridgeSeasonalTable">
        <thead>
          <tr>
            <th>Bridge No</th>
            <th>Name</th>
            <th>Region</th>
            <th>Jan</th><th>Feb</th><th>Mar</th><th>Apr</th><th>May</th><th>Jun</th><th>Jul</th><th>Aug</th><th>Sep</th><th>Oct</th><th>Nov</th><th>Dec</th>
          </tr>
        </thead>
        <tbody id="bridgeSeasonalBody"></tbody>
      </table>
    </div>
  </div>
</div>
"""
if 'id="panel-bridge-seasonal"' not in content:
    content = content.replace(
        '  <div id="panel-bridge-traffic" class="tab-pane" role="tabpanel">',
        tab_panel_html + '\n  <div id="panel-bridge-traffic" class="tab-pane" role="tabpanel">'
    )

# 3. Add JS function to populate the table, and hook it up in initialization
js_func = """function buildBridgeSeasonalTable() {
  const rows = buildBridgeTrafficRows();
  const body = document.getElementById('bridgeSeasonalBody');
  if (!body) return;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  body.innerHTML = rows.map(r => {
    const regionKey = normalizeTrafficRegion(r.region);
    const factors = REGIONAL_SEASONAL_ADT_FACTORS[regionKey] || [1,1,1,1,1,1,1,1,1,1,1,1];
    const cells = factors.map((f, i) => {
      const isCurrent = i === (window.timelineMonth || 0);
      let colorStyle = '';
      if (f > 1) colorStyle = 'color: #ef4444;';
      else if (f < 1) colorStyle = 'color: #22c55e;';
      let style = isCurrent ? `font-weight:bold; background:rgba(0,229,255,0.1); border:1px solid var(--theme-color, #00e5ff); ${colorStyle}` : colorStyle;
      return `<td style="${style}">${f.toFixed(3)}x</td>`;
    }).join('');
    
    return `<tr data-bridge-id="${escapeHTML(r.bridge_no)}">
      <td>${escapeHTML(r.bridge_no)}</td>
      <td>${escapeHTML(r.bridge_nam)}</td>
      <td>${escapeHTML(r.region || 'Unassigned')}</td>
      ${cells}
    </tr>`;
  }).join('');
}
"""
if 'function buildBridgeSeasonalTable()' not in content:
    content = content.replace(
        'function buildBridgeTrafficSummaryPanel() {',
        js_func + '\nfunction buildBridgeTrafficSummaryPanel() {'
    )

if 'buildBridgeSeasonalTable();' not in content:
    content = content.replace(
        'buildBridgeTrafficSummaryPanel();',
        'buildBridgeTrafficSummaryPanel();\n  buildBridgeSeasonalTable();'
    )

# Hook up click event for the new table
if "['bridgeSummaryBody', 'bridgeLoadingBody', 'bridgeSeasonalBody']" not in content:
    content = content.replace(
        "['bridgeSummaryBody', 'bridgeLoadingBody'].forEach(id => {",
        "['bridgeSummaryBody', 'bridgeLoadingBody', 'bridgeSeasonalBody'].forEach(id => {"
    )

# 4. Modify side panel to use a proper table instead of grid
old_side_panel_grid = """<div class="pane-section-title">Regional Seasonal Factors (${normalizeTrafficRegion(row.region) || 'National'})</div>
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
    </div>"""

new_side_panel_table = """<div class="pane-section-title">Regional Seasonal Factors (${normalizeTrafficRegion(row.region) || 'National'})</div>
    <div class="table-wrap" style="margin-bottom: 16px;">
      <table style="width:100%; text-align:center; font-size:11px;">
        <thead>
          <tr>
            ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map(m => `<th style="padding:4px; color:rgba(255,255,255,0.5);">${m}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            ${[0,1,2,3,4,5].map(i => {
              const factors = REGIONAL_SEASONAL_ADT_FACTORS[normalizeTrafficRegion(row.region)] || [1,1,1,1,1,1,1,1,1,1,1,1];
              const f = factors[i] || 1;
              const isCurrent = i === window.timelineMonth;
              const color = f > 1 ? '#ef4444' : f < 1 ? '#22c55e' : '#fff';
              const style = isCurrent ? `border: 1px solid var(--theme-color, #00e5ff); background: rgba(0,229,255,0.1); color: ${color}; font-weight: 500;` : `color: ${color}; font-weight: 500;`;
              return `<td style="padding:4px; ${style}">${f.toFixed(3)}x</td>`;
            }).join('')}
          </tr>
        </tbody>
        <thead>
          <tr>
            ${['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => `<th style="padding:4px; margin-top:4px; color:rgba(255,255,255,0.5);">${m}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            ${[6,7,8,9,10,11].map(i => {
              const factors = REGIONAL_SEASONAL_ADT_FACTORS[normalizeTrafficRegion(row.region)] || [1,1,1,1,1,1,1,1,1,1,1,1];
              const f = factors[i] || 1;
              const isCurrent = i === window.timelineMonth;
              const color = f > 1 ? '#ef4444' : f < 1 ? '#22c55e' : '#fff';
              const style = isCurrent ? `border: 1px solid var(--theme-color, #00e5ff); background: rgba(0,229,255,0.1); color: ${color}; font-weight: 500;` : `color: ${color}; font-weight: 500;`;
              return `<td style="padding:4px; ${style}">${f.toFixed(3)}x</td>`;
            }).join('')}
          </tr>
        </tbody>
      </table>
    </div>"""

if old_side_panel_grid in content:
    content = content.replace(old_side_panel_grid, new_side_panel_table)

# 5. Export Logic Update
if "else if (activeTab === 'bridge-summary')" in content and "bridge-seasonal" not in content:
    export_addition = """  } else if (activeTab === 'bridge-seasonal') {
    const rows = buildBridgeTrafficRows();
    csv = 'Bridge Name,Bridge No,Link ID,Link Name,Road Class,Region,Station,River,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec\\n';
    csv += rows.map(r => {
      const regionKey = normalizeTrafficRegion(r.region);
      const factors = REGIONAL_SEASONAL_ADT_FACTORS[regionKey] || [1,1,1,1,1,1,1,1,1,1,1,1];
      const factorStrings = factors.map(f => f.toFixed(4));
      return [
        escapeCSV(r.bridge_nam), escapeCSV(r.bridge_no), escapeCSV(r.link_no), escapeCSV(r.link_name), escapeCSV(r.road_class), escapeCSV(r.region), escapeCSV(r.station), escapeCSV(r.river),
        ...factorStrings
      ].join(',');
    }).join('\\n');
"""
    content = content.replace("  } else if (activeTab === 'bridge-summary') {", export_addition + "  } else if (activeTab === 'bridge-summary') {")


with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Successfully applied tables updates!')
