let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("homeScore")
let guestScoreEl = document.getElementById("guestScore")

function plusOneHome() {
  homeScore++
  homeScoreEl.textContent = homeScore;
}

function plusTwoHome() {
  homeScore += 2
  homeScoreEl.textContent = homeScore;
}

function plusThreeHome() {
  homeScore += 3
  homeScoreEl.textContent = homeScore;
}

function plusOneGuest() {
  guestScore++
  guestScoreEl.textContent = guestScore;
}

function plusTwoGuest() {
  guestScore += 2
  guestScoreEl.textContent = guestScore;
}

function plusThreeGuest() {
  guestScore += 3
  guestScoreEl.textContent = guestScore;
}