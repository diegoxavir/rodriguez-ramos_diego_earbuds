(() => {
  console.log("IIFE Fired");

  // Variables
  const hotspots = document.querySelectorAll('.Hotspot');
  console.log(hotspots);

  const hotspotDesc = [
    "Touch Controls For Easy Listening",
    "State Of The Art Noise Cancellation and Transparency",
    "Sweat And Water Resistant",
    "Fast Charging For Up To 5 Hours Of Listening"
  ];

  // Functions
  function showInfo(e) {
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
    gsap.to(selected, 1, {autoAlpha: 1});
  }

  function hideInfo(e) {
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
    gsap.to(selected, 1, {autoAlpha: 0});
  }

//looping hotspots
  hotspots.forEach((hotspot, index) => {
    const paragraph = hotspot.querySelector('p');

    if (paragraph) {
      paragraph.textContent = hotspotDesc[index];
    }
  });

  // Event listeners
  hotspots.forEach(hotspot => {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });
})();
