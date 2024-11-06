(() => {
  console.log("IIFE Fired");


  //variables
  const hotspots = document.querySelectorAll('.Hotspot');
  console.log(hotspots);


//functions
function showInfo(e) {
  //console.log("show info called");
  let selected  = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);

  gsap.to(selected, 1, {autoAlpha: 1});
}

function hideInfo(e) {
  //console.log("hide into called");
  let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`)
  gsap.to(selected, 1, {autoAlpha: 0});
}



//event listeners
hotspots.forEach(hotspot => {
  hotspot.addEventListener("mouseover", showInfo);
  hotspot.addEventListener("mouseleave", hideInfo);
})



})();