function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("current-year");
    yearSpan.textContent = new Date().getFullYear();
});