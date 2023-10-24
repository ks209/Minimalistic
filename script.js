const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    smoothMobile: true,
    offset: window.innerWidth < 768 ? 400 : 90
});

gsap.from("a",{
    stagger: .1,
    y: 100,
    duration: 1,
    opacity: 0,
    ease: Power2,
})

console.log("hi")
var play = document.querySelector("#p");
var video = document.querySelector('video')
var v = document.querySelector("#pla")
console.log(play)

Shery.textAnimate("#mid1 h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 100,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });


  gsap.from(".anim2",{
    stagger: .1,
    y: 50,
    opacity: 0,
    ease: Power2,
    delay: 0.1,
    duration: 1,

  })


  Shery.imageEffect("#mid1-img",{
    style: 3,
    config: {"uFrequencyX":{"value":15,"range":[0,100]},"uFrequencyY":{"value":15.02,"range":[0,100]},"uFrequencyZ":{"value":15,"range":[0,100]},"geoVertex":{"range":[1,64],"value":7.77},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.4700077751472452},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.6,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  })

  Shery.imageEffect("#pic1-wrapper img",{
    style: 3,
    config: {"uFrequencyX":{"value":10.74,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":10.74,"range":[0,100]},"geoVertex":{"range":[1,64],"value":53.59},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.789779020684352},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.3,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  })


  Shery.imageEffect("#pic2-wrapper img",{
    style: 3,
    duration: 5,
  })

  Shery.imageEffect("#bimg",{
    style: 1,
    gooey: true,
    confirm: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.92,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.7054655562425731},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":1.93,"range":[1,15]},"durationOut":{"value":0.38,"range":[0.1,5]},"durationIn":{"value":0.75,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":3.72,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":32}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.12,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  })



  Shery.imageEffect("#sus-img-wrapper img",{
    style: 5,
    config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.32,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8782161379648086},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":2},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  })



  var bg= document.querySelector("#video")

play.addEventListener('mouseenter',function(){
    video.play();
    v.style.opacity = 0;
    video.style.opacity=1;
    bg.style.backgroundColor="black";
})

play.addEventListener('mouseleave',function(){
    video.pause();
    v.style.opacity = 1;
    video.style.opacity=0;
    bg.style.backgroundColor="white";
})