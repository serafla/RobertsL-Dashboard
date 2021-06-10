import { gsap } from "gsap";


gsap.set("#green-circle", {transformOrigin: "center"});
gsap.set("#zero-mph", {transformOrigin: "center"});




export let prndlTL = gsap.timeline();


prndlTL.to("#mini-car-icon", {alpha: 0, duration: 0.75}, "console")
            .from("#mini-car-icon-green", {alpha: 0, duration: 0.75}, "console")
            .from("#green-circle", {alpha: 0, scale: 1.5, duration: 1}, "console")
            .to("#PRNDL-gray", {alpha: 0, duration: 0.25}, "console")
            .from("#PRNDL-park", {alpha: 0, duration: 0.25}, "console")
            .from("#zero-mph", {alpha: 0, scale: .85, duration: 0.5}, "console")
           
      

        

        