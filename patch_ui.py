import re

path = 'index.html'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add Critical Badge to Side Panel Title
old_title = "title.textContent = row.bridge_nam || row.bridge_no || 'Bridge crossing';"
new_title = "title.innerHTML = `${escapeHTML(row.bridge_nam || row.bridge_no || 'Bridge crossing')} ${row.is_critical ? '<span class=\"pill\" style=\"background:#ef4444; color:white; margin-left:8px;\">CRITICAL STRUCTURE</span>' : ''}`;"
content = content.replace(old_title, new_title)

# 2. Add Critical Badge to Main Inventory Table Name Column
old_cell = "<td>${tableCellHtml(r.bridge_nam, 'bridge_nam')}</td>"
new_cell = "<td>${tableCellHtml(r.bridge_nam, 'bridge_nam')} ${r.is_critical ? '<span class=\"pill\" style=\"background:#ef4444; color:white; margin-left:4px; font-size:9px\">CRITICAL</span>' : ''}</td>"
content = content.replace(old_cell, new_cell)

# 3. Add Critical Badge to Traffic Analytics Table Name Column
old_cell_traffic = "<td class=\"highlight-cell\">${tableCellHtml(r.bridge_nam, 'bridge_nam')}</td>"
new_cell_traffic = "<td class=\"highlight-cell\">${tableCellHtml(r.bridge_nam, 'bridge_nam')} ${r.is_critical ? '<span class=\"pill\" style=\"background:#ef4444; color:white; margin-left:4px; font-size:9px\">CRITICAL</span>' : ''}</td>"
content = content.replace(old_cell_traffic, new_cell_traffic)

# 4. Show critical comment in side panel if it exists
old_subtitle = "subtitle.textContent = `${row.link_no || '-'} | ${row.link_name || '-'} | Class ${canonicalRoadClass(row.road_class)} | ${timelineYear} ${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][timelineMonth]}`;"
new_subtitle = """subtitle.innerHTML = `${escapeHTML(row.link_no || '-')} | ${escapeHTML(row.link_name || '-')} | Class ${canonicalRoadClass(row.road_class)} | ${timelineYear} ${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][timelineMonth]}
${row.is_critical && row.critical_comment ? `<br><span style="color:#ef4444; font-weight:500; font-size:11px; display:inline-block; margin-top:4px;">Warning: ${escapeHTML(row.critical_comment)}</span>` : ''}`;"""
content = content.replace(old_subtitle, new_subtitle)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("UI modifications for critical bridges and scour replacements done.")
