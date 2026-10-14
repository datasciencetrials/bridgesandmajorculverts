import re

# 1. index.html removals
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Remove ATC stations from legend
html = re.sub(r'<div style="display: flex; align-items: center; gap: 8px;">\s*<span style="display: inline-block; width: 8px; height: 8px; border: 1\.5px solid #fff; border-radius: 50%; background: #f43f5e;"></span>\s*<span>ATC stations</span>\s*</div>', '', html)
html = re.sub(r'<div style="display: flex; align-items: center; gap: 8px;">\s*<span style="display: inline-block; width: 8px; height: 8px; border: 1\.5px solid #fff; border-radius: 50%; background: #f59e0b;"></span>\s*<span>Legacy ATC stations</span>\s*</div>', '', html)
html = re.sub(r'<div style="display: flex; align-items: center; gap: 8px;">\s*<span style="display: inline-block; width: 6px; height: 6px; border: 1px solid #f43f5e; border-radius: 50%; background: #fff;"></span>\s*<span>Manual count stations</span>\s*</div>', '', html)
html = re.sub(r'<div style="display: flex; align-items: center; gap: 8px;">\s*<span style="display: inline-block; width: 6px; height: 6px; border: 1px solid #f59e0b; border-radius: 50%; background: #fff;"></span>\s*<span>Legacy manual stations</span>\s*</div>', '', html)
html = re.sub(r'<div style="display: flex; align-items: center; gap: 8px;">\s*<span style="position: relative; display: inline-block; width: 14px; height: 3px; background: rgba\(236,72,153,0\.8\);"></span>\s*<span>Animated traffic on road links</span>\s*</div>', '', html)

# Remove AADT from tooltip
html = re.sub(r'<div style="display:flex; justify-content:space-between; margin-bottom: 2px;"><span style="color:var\(--text-muted\)">Road Class:</span> <span id="mTooltipClass" style="font-weight:600">-</span></div>\s*<div style="display:flex; justify-content:space-between;"><span style="color:var\(--text-muted\)">AADT:</span> <span id="mTooltipAadt" style="color:var\(--accent-cyan\); font-weight:700">-</span></div>', '<div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted)">Road Class:</span> <span id="mTooltipClass" style="font-weight:600">-</span></div>', html)

# Remove bridgeAnalyticsPane and mapPaneResizeHandle
html = re.sub(r'<div class="map-pane-resizer" id="mapPaneResizeHandle".*?</div>\s*<aside class="map-side-pane" id="bridgeAnalyticsPane">.*?</aside>', '', html, flags=re.DOTALL)

# Remove statsKpis
html = re.sub(r'<div class="traffic-context-grid" id="statsKpis" style="margin-top:12px"></div>', '', html)

# Change tabs order: Statistics & Summary should be the last tab
# Let's find the header-tabs div
tabs_pattern = r'(<div class="header-tabs">.*?)(<button class="tab-btn[^>]*>GEOSPATIAL</button>)\s*(<button class="tab-btn[^>]*>STATISTICS &amp; SUMMARY</button>)\s*(<button class="tab-btn[^>]*>BRIDGE INVENTORY</button>)\s*(<button class="tab-btn[^>]*>MAJOR CULVERT INVENTORY</button>)\s*(<button class="tab-btn[^>]*>PHOTOS</button>)(.*?</div>)'
match = re.search(tabs_pattern, html, flags=re.DOTALL)
if match:
    new_tabs = match.group(1) + match.group(2) + '\n        ' + match.group(4) + '\n        ' + match.group(5) + '\n        ' + match.group(6) + '\n        ' + match.group(3) + match.group(7)
    html = html[:match.start()] + new_tabs + html[match.end():]

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# 2. app.js removals
with open('app.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Remove drawInfluenceFlowLayer
js = re.sub(r'drawInfluenceFlowLayer\(ctx, canvas, activeBridges\);', '', js)

# Remove stationPoints loop
station_loop_regex = r'let stationPoints = \[\s*\.\.\.MANUAL_COUNT_STATIONS.*?\n  \];\s*stationPoints\.forEach\(s => \{.*?\n  \}\);'
js = re.sub(station_loop_regex, '', js, flags=re.DOTALL)

# Remove mapPaneResizeHandle event listeners and initialization
js = re.sub(r'const handle = document\.getElementById\(\'mapPaneResizeHandle\'\);\s*const pane = document\.getElementById\(\'bridgeAnalyticsPane\'\);\s*if \(handle && pane\) \{.*?(?=\n\s*\n|\nfunction)', '', js, flags=re.DOTALL)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(js)

print('Success')
