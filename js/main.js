document.addEventListener("DOMContentLoaded", () => {

const navLinksContainer = document.querySelector(".navigation-links");
if (navLinksContainer) {
navLinksContainer.innerHTML = navigationItems.map(item => {
const targetAttribute = item.type === "external" ? ' target="_blank"' : '';
return `<a href="${item.link}"${targetAttribute}>${item.name}</a>`;
}).join('');
}
const eventsContainer = document.querySelector(".events-container");
if (eventsContainer) {
eventsContainer.innerHTML = events.map(eventItem => `
<div class="event-card" data-id="${eventItem.id}">
<img src="${eventItem.event.image}" alt="${eventItem.event.name}">
<h3>${eventItem.event.name}</h3>
<p>${eventItem.stage} | ${formatDateTime(eventItem.from, eventItem.to)}</p>
</div>
`).join('');
}

// datum 
function formatDateTime(start, end) {
const startDate = new Date(parseInt(start, 10));
const endDate = new Date(parseInt(end, 10));
const day = String(startDate.getDate()).padStart(2, "0");
const month = String(startDate.getMonth() + 1).padStart(2, "0");
const startHours = String(startDate.getHours()).padStart(2, "0");
const startMinutes = String(startDate.getMinutes()).padStart(2, "0");
const endHours = String(endDate.getHours()).padStart(2, "0");
const endMinutes = String(endDate.getMinutes()).padStart(2, "0");

return `${day}/${month} ${startHours}.${startMinutes}-${endHours}.${endMinutes}`;
}

// aftelklok 
const targetDate = new Date(1755673200000);
const countdownTimer = document.getElementById("countdown-timer");
function updateCountdown() {
const now = new Date().getTime();
const distance = targetDate - now;

if (distance <= 0) {
clearInterval(countdownInterval);
countdownTimer.innerHTML = "Gamescom 2025!";
return;
}

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

countdownTimer.innerHTML = `${days} days ${hours}h ${minutes}m ${seconds}s <br><span style="font-size: 1.5rem; color: #cccccc;">till next edition</span>`;
}
const countdownInterval = setInterval(updateCountdown, 1000);

const modal = document.getElementById("events-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalStage = document.getElementById("modal-stage");
const modalDescription = document.getElementById("modal-description");
const modalSocials = document.getElementById("modal-socials");
// voor venster 
if (modal) {
document.querySelectorAll(".event-card").forEach(card => {
card.addEventListener("click", () => {
const eventId = card.dataset.id;
const eventItem = events.find(e => e.id === eventId);

if (eventItem) {
modalImage.innerHTML = `<img src="${eventItem.event.image}" alt="${eventItem.event.name}">`;
modalTitle.textContent = eventItem.event.name;
modalStage.textContent = `${eventItem.stage} | ${formatDateTime(eventItem.from, eventItem.to)}`;
modalDescription.textContent = eventItem.event.description;
// socials en voor icon
let socialsHTML = '';
if (eventItem.event.socials.instagram) {
socialsHTML += `<a href="${eventItem.event.socials.instagram}" target="_blank"><i class="fa-brands fa-instagram fa-3x"></i></a>`;}
if (eventItem.event.socials.twitter) {
socialsHTML += `<a href="${eventItem.event.socials.twitter}" target="_blank"> <i class="fa-brands fa-x-twitter fa-3x"></i></a>`}
if (eventItem.event.socials.website) {
socialsHTML += `<a href="${eventItem.event.socials.website}" target="_blank"> <i class="fa-brands fa-chrome fa-3x"></i></i></a>`;}
if (eventItem.event.socials.youtube) {
socialsHTML += `<a href="${eventItem.event.socials.youtube}" target="_blank"> <i class="fa-brands fa-youtube fa-3x"></i></a>`;}
modalSocials.innerHTML = socialsHTML;



modal.classList.add("show");
}
});
});

const closeButton = document.querySelector(".close-button");  
if (closeButton) {
closeButton.addEventListener("click", () => {
modal.classList.remove("show");
});
}
 
window.addEventListener("click", (event) => {
if (event.target === modal) {
modal.classList.remove("show");}
});
window.addEventListener("keydown", (event) => {
if (event.key === "Escape") {               // sluiten met esc
modal.classList.remove("show");}
});
}
});
