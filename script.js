

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



//ANIMATION OF PRELOADER TEXTS
var tl=gsap.timeline()
tl.to(".preload-text1",{
  delay:0.5,
  display:"none",
  duration:0.3

})
tl.to(".preload-text2",{
  delay:0,
  display:"inline",
  duration:0.3

})
tl.to(".preload-text2",{
  delay:0,
  display:"none",
  duration:0.3

})
tl.to(".preload-text3",{
  delay:0,
  display:"inline",
  duration:0.3

})


//ANIMATION OF PRELOADER
gsap.to(".preloader",{
  top:"-300%",
  duration:3,
  delay:1.8
})



var line=document.getElementById("hamburger")
var cross = document.getElementById("hamburger2")
var list=document.getElementById("burger-list")

function show(){
  line.style.display="none";
  cross.style.display="block"
  list.style.top="0rem";
  

}

function hide(){
  line.style.display="block";
  cross.style.display="none";
  list.style.top= "-400%";



}






//Media Query till 1321px





