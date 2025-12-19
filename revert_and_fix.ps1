$src = "dist_final_verified\index.html"
$dst = "dist_final\index.html"

# 1. Restore
Copy-Item $src $dst -Force

# 2. Fix Paths (String Replacement)
$content = Get-Content $dst -Raw
$content = $content.Replace('href="/vite.svg"', 'href="./vite.svg"')
$content = $content.Replace('src="/assets/', 'src="./assets/')
$content = $content.Replace('href="/assets/', 'href="./assets/')

# 3. Save
Set-Content -Path $dst -Value $content -NoNewline
