import re

with open("styles/style.css", "r", encoding="utf-8") as f:
    lines = f.readlines()

for i, line in enumerate(lines, 1):
    if "orbit-card" in line or "orbit-img" in line or "orbit-ring" in line:
        print(f"Line {i}: {line.strip()}")
