import os
import re

file_path = 'd:/OneDrive/Bridge stuff/bridge_traffic_deploy/app.js'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Find and move BMS_CODE_LOOKUPS
bms_start = content.find('const BMS_CODE_LOOKUPS = {')
if bms_start != -1:
    # Find the end of this object definition
    # It ends with '};\n' right before '// Helper for code lookup'
    bms_end = content.find('// Helper for code lookup', bms_start)
    if bms_end != -1:
        # Move back to include '};\n'
        bms_block = content[bms_start:bms_end]
        content = content[:bms_start] + content[bms_end:]
        
        # Insert it after helpers section
        insert_pos = content.find('// ===========================================\n//  CONTROLLER & STATE')
        content = content[:insert_pos] + bms_block + '\n' + content[insert_pos:]

# 2. Find and move selectedMapBridge
smb_str = 'let selectedMapBridge = null;'
if smb_str in content:
    content = content.replace(smb_str + '\n', '')
    content = content.replace(smb_str + '\r\n', '')
    
    insert_pos = content.find('let chartInstances = {};')
    content = content[:insert_pos] + smb_str + '\n' + content[insert_pos:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Hoisting fixes applied.")
