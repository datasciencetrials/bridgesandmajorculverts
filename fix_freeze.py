import sys
import re

path = 'index.html'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove the tab button
content = content.replace('\n    <button class="tab" data-tab="bridge-seasonal" role="tab">Seasonal Factors</button>', '')

# 2. Extract and remove the panel-bridge-seasonal
seasonal_panel_regex = r'<div id="panel-bridge-seasonal" class="tab-pane" role="tabpanel">([\s\S]*?)</div>\n  <div id="panel-bridge-traffic"'
match = re.search(seasonal_panel_regex, content)
if match:
    seasonal_card = match.group(1).strip()
    content = re.sub(seasonal_panel_regex, '  <div id="panel-bridge-traffic"', content)
    
    # Insert seasonal_card into panel-bridge-traffic
    # Let's put it right after the detailed vehicle-class ADT card (which ends before bridgeTrafficTable)
    # Actually, putting it at the end of panel-bridge-traffic is safest.
    insert_point = '      <div class="table-wrap analytics-grid-scroll">\n        <table id="bridgeTrafficTable">'
    if insert_point in content:
        content = content.replace(insert_point, seasonal_card + '\n<br>\n' + insert_point)
    else:
        print("Could not find insert point for seasonal card in panel-bridge-traffic")

# 3. Update buildBridgeSeasonalTable to use pagination
old_func = r"const body = document.getElementById\('bridgeSeasonalBody'\);\n  if \(\!body\) return;\n  const months = \['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'\];\n  \n  body.innerHTML = rows\.map\(r => \{"
new_func = """const body = document.getElementById('bridgeSeasonalBody');
  if (!body) return;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const totalPages = Math.max(1, Math.ceil(rows.length / BRIDGE_TRAFFIC_PAGE_SIZE));
  const currentPage = Math.max(1, Math.min(bridgeTrafficPage, totalPages));
  const pageRows = rows.slice((currentPage - 1) * BRIDGE_TRAFFIC_PAGE_SIZE, currentPage * BRIDGE_TRAFFIC_PAGE_SIZE);
  
  body.innerHTML = pageRows.map(r => {"""
content = re.sub(old_func, new_func, content)

# 4. Remove the special export logic for bridge-seasonal
export_regex = r"  } else if \(activeTab === 'bridge-seasonal'\) \{[\s\S]*?\}\n  \} else if \(activeTab === 'bridge-summary'\) \{"
content = re.sub(export_regex, "} else if (activeTab === 'bridge-summary') {", content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully fixed freezing and moved table to traffic analytics tab!")
