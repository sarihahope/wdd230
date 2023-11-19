// document.querySelector(".bannerButton").addEventListener("click", function() {

//     this.closest(".bannercontainer").style.display = "none";
// });




//     const today = new Date().getDay();
 
//     if (today >= 1 && today <= 3) { 
 
//         document.querySelector(".bannerButton").addEventListener("click", function() {

//             this.closest(".bannercontainer").style.display = "none";
//         })
// }
 

document.querySelector(".bannerButton").addEventListener("click", function() {
    this.closest(".bannercontainer").style.display = "none";
});
 
const today = new Date().getDay();
 
if (today >= 1 && today <= 3) {
    document.querySelector(".bannercontainer").style.display = "block";
} else {
    document.querySelector(".bannercontainer").style.display = "none";
}


 