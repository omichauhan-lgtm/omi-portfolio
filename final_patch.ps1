$cssFile = "dist_final\assets\index-CsVkdvSY.css"
$patch = "} img[alt*='Headband'], img[alt*='Hacker'], img[alt*='HUD'], img[alt*='Anime'], img[alt*='Mascot'], img[alt*='Sticker'] { display: none !important; width: 0 !important; height: 0 !important; opacity: 0 !important; visibility: hidden !important; position: absolute !important; left: -9999px !important; }"
Add-Content -Path $cssFile -Value $patch

# Fix Profile Photo (Address 404s)
# Agent reported 404 for assets/profile-hero.jpg
Copy-Item "dist_final\profile.jpg" "dist_final\assets\profile-hero.jpg" -ErrorAction SilentlyContinue
Copy-Item "dist_final\profile.jpg" "dist_final\assets\profile.jpg" -ErrorAction SilentlyContinue

# Ensure profile.jpg is in root too (it is)
write-host "Patched CSS and copied Profile Photo"
