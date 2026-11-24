$headers = @{ "Content-Type" = "application/json; charset=utf-8" }
$payload = @{
    host = "aniljaiswar.com"
    key = "b1b81b6d4e59474783b752837e79e013"
    keyLocation = "https://aniljaiswar.com/b1b81b6d4e59474783b752837e79e013.txt"
    urlList = @("https://aniljaiswar.com/")
} | ConvertTo-Json

Write-Host "Pinging IndexNow Central..."
try {
    $res1 = Invoke-RestMethod -Uri "https://api.indexnow.org/indexnow" -Method Post -Body $payload -Headers $headers
    Write-Host "Central IndexNow: Success"
} catch {
    Write-Host "Central IndexNow: $($_.Exception.Message)"
}

Write-Host "Pinging Bing..."
try {
    $res2 = Invoke-RestMethod -Uri "https://www.bing.com/indexnow" -Method Post -Body $payload -Headers $headers
    Write-Host "Bing IndexNow: Success"
} catch {
    Write-Host "Bing IndexNow: $($_.Exception.Message)"
}
