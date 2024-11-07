(() => {
  console.log("IIFE Fired");

  // Variables
  const hotspots = document.querySelectorAll('.Hotspot');
  console.log(hotspots);

  const hotspotDesc = [
    {
      title: "Touch Controls",
      imageSrc: "images/hotspot-1.png",
      imageAlt: "finger touching the back of the earbud",
      text: "Touch Controls For Easy Listening"
    },
    {
      title: "ANC and Transparency",
      imageSrc: "images/hotspot-2.png",
      imageAlt: "a person with headphones with the background less visible",
      text: "State Of The Art Noise Cancellation and Transparency"
    },
    {
      title: "Working Out",
      imageSrc: "images/hotspot-3.png",
      imageAlt: "droplets of water",
      text: "Sweat And Water Resistant"
    },
    {
      title: "Battery",
      imageSrc: "images/hotspot-4.png",
      imageAlt: "Text saying 5H with a green half-circle around it",
      text: "Fast Charging For Up To 5 Hours Of Listening"
    }
  ];

  //functions

  hotspots.forEach((hotspot, index) => {
    const hotspotAnnotation = hotspot.querySelector('.HotspotAnnotation');

    if (hotspotAnnotation) {
      //add h2
      const h2Element = document.createElement('h2');
      h2Element.textContent = hotspotDesc[index].title;
      //add image content
      const imgElement = document.createElement('img');
      imgElement.src = hotspotDesc[index].imageSrc;
      imgElement.alt = hotspotDesc[index].imageAlt;
      //add text content
      const textElement = document.createElement('p');
      textElement.textContent = hotspotDesc[index].text;
      
      hotspotAnnotation.appendChild(imgElement);
      hotspotAnnotation.appendChild(h2Element);
      hotspotAnnotation.appendChild(textElement);

    }
  });

  // event listeners
  hotspots.forEach(hotspot => {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

  // show/hide functions using GSAP
  function showInfo(e) {
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] .HotspotAnnotation`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo(e) {
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] .HotspotAnnotation`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }
})();
