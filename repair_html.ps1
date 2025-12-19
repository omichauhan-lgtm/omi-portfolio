$filePath = "dist_final\index.html"
$lines = Get-Content $filePath
$header = $lines[0..10]
$script = $lines[11..($lines.Count-1)]

# Fix Header Paths
$header = $header -replace 'href="/vite.svg"', 'href="./vite.svg"'

# Write with Structure
$header | Set-Content -Path $filePath
Add-Content -Path $filePath -Value "</head><body class='bg-black text-white'><div id='root'></div>"
$script | Add-Content -Path $filePath
Add-Content -Path $filePath -Value "</body></html>"
