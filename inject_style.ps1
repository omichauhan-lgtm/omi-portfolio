$htmlFile = "dist_final\index.html"
$styleBlock = "<style>img[alt*='Headband'], img[alt*='Hacker'], img[alt*='HUD'], img[alt*='Anime'], img[alt*='Mascot'], img[alt*='Sticker'], img[src*='sticker'] { display: none !important; opacity: 0 !important; visibility: hidden !important; width: 0 !important; height: 0 !important; position: absolute !important; pointer-events: none !important; }</style>"

$content = Get-Content $htmlFile -Raw
# Inject before </head>
if ($content -notmatch "img\[alt\*='Headband'\]") {
    $content = $content -replace "</head>", "$styleBlock</head>"
    Set-Content -Path $htmlFile -Value $content -NoNewline
    Write-Host "Injected Style Block to HTML"
} else {
    Write-Host "Style Block already present"
}
