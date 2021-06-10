import { gsap } from "gsap";

gsap.set("#music-player-outline", {transformOrigin: "center"});
gsap.set("#street-view-button-outline", {transformOrigin: "center"});


export let musicDirectionsTL = gsap.timeline();


musicDirectionsTL.from("#music-bg",{alpha: 0, duration:0.5, x: 50}, "slide")
                 .from("#directions-bg",{alpha: 0, duration:0.5, x: -50}, "slide")
                 .from("#turn-left",{alpha: 0, duration:0.5, y: 30}, "up")
                 .from("#left-arrow",{alpha: 0, duration:0.5, y: 30, delay: 0.15}, "up")
                 .from("#directions-miles",{alpha: 0, duration:0.5, y: 30, delay: 0.15}, "up")
                 .from("#artist-title",{alpha: 0, duration:0.5, y: 30}, "up")
                 .from("#music-player-outline", {alpha: 0, scaleX: 0.5, duration: 0.5}, "green-outline")
                 .from("#street-view-button-outline", {alpha: 0, scaleX: 0.5, duration: 0.5}, "green-outline")
                 .from("#music-player",{alpha: 0, duration:0.5, y: 30}, "fadeup")
                 .from("#streetview",{alpha: 0, duration:0.5, y: 30}, "fadeup")
                 .from("#GorillazAlbum", {alpha: 0, scale: 0.5, duration: 0.5}, "fadeup")
                
      

        

        