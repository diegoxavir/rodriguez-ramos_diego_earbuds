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


//photoscrub


(() => {
    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 201; //how many frames do we have

    const images = []; //array to hold all of our images

    //create an object called buds to hold the current frame
    const buds = {
        frame: 0
    }

    //run a for loop to populate image array
    for(let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = `images/scene1-${(i+1000).toString().padStart(4, '0')}.jpg`;
        images.push(img)
    }

    //console.table(images);

    gsap.to(buds, {
        frame: 200,
        snap: "frame",
        scrollTrigger: {
            trigger: "#explode-view",
            pin: true,
            //smoothness
            scrub: 1, 
            markers: false,
            start: "top top"
        },
        onUpdate: render
    })

    images[0].addEventListener("load", render)

    function render() {
        context.clearRect(0,0, canvas.width, canvas.height);
        //console.log(buds.frame);
        console.log(images [buds.frame]);
        context.drawImage(images[buds.frame], 0, 0);
        }

})();

(() => {
  
  const divisor = document.querySelector("#divisor");
  const slider = document.querySelector("#slider");

  function moveDivisor(){
      console.log(slider.value); //pulls the value of the slider
      //digging into the style property to adjust the width
      divisor.style.width = slider.value+"%";
  }

  //listening for the user to slide and calling the function move divisor
  slider.addEventListener("input", moveDivisor)


})();

(() => {
  const burgerCont = document.querySelector('.hamburger-content');
  const burgerIcon = document.querySelector('.hamburger');




  burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('active');
    burgerCont.classList.toggle('active');
  })

})();

(() => {
  gsap.registerPlugin(ScrollTrigger);
  const fadeDivs = document.querySelectorAll(".gsap-fade");

  fadeDivs.forEach(fadeDiv => {
  gsap.to(fadeDiv, {
    autoAlpha: 1,
    duration: .5,
    scrollTrigger : {
      trigger: fadeDiv,
      start: "top center"
    }
  })
})
})();