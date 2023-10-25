 //Under Profile Menu
 let profileMenu = document.getElementById("profile-content");
 let profileBtn = document.getElementById("profile");

 profileBtn.addEventListener("mouseover", () => {
     profileMenu.style.display = "block";
 });
 profileBtn.addEventListener("click", () => {
     profileMenu.style.display = "none";
 });
 //Under Men 1st Column
 let MEN = document.getElementById("Men");
 let Undermen1 = document.getElementById("men");

 Undermen1.addEventListener("mouseover", () => {
     MEN.style.display = "block";
 });
 Undermen1.addEventListener("click", () => {
     MEN.style.display = "none";
 });
 //Image Under Studio
 let Studio = document.getElementById("Studio");
 let studioimg = document.getElementById("studio");

 Studio.addEventListener("mouseover", () => {
     studioimg.style.display = "block";
 });
 Studio.addEventListener("click", () => {
     studioimg.style.display = "none";
 });
 // Inside FlatOffers
 let flatoffer = document.getElementById("flatoffer");
 let FlatOffer = document.getElementById("flatoffers");

 flatoffer.addEventListener("click", () => {
     FlatOffer.style.display = "block";
 });
 flatoffer.addEventListener("dblclick", () => {
     FlatOffer.style.display = "none";
 });