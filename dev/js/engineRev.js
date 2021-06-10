import { gsap } from "gsap";

export let engineRevTL = gsap.timeline();

import { DrawSVGPlugin} from "gsap/DrawSVGPlugin"; 
gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#wipers-icon-green", {transformOrigin: "center"});


engineRevTL.to("#PRNDL-park", {alpha: 0, duration: 0.25}, "drive")
           .from("#PRNDL-drive", {alpha: 0, duration: 0.25}, "drive")
           .from("#green-path", {drawSVG: "100% 100%", duration: 2.5, ease: "power4.out"}, "motion-path")
           .from("#green-ray-1", { duration: 0.15, ease: "power4.out", alpha: 0}, "motion-path")
           .from("#green-ray-2", {duration: 0.15, ease: "power4.out", alpha: 0, delay: 0.2}, "motion-path")
           .from("#green-ray-3", { duration: 0.15, ease: "power4.out", alpha: 0, delay: 0.38}, "motion-path")
           .from("#green-ray-4", {duration: 0.15, ease: "power4.out", alpha: 0, delay: 0.72}, "motion-path")
           .from("#green-ray-5", {duration: 0.15, ease: "power4.out", alpha: 0, delay: 1.5}, "motion-path")
           .from("#accel-green-1", {duration: 0.25, ease: "power4.out", alpha: 0}, "motion-path")
           .from("#accel-green-2", {duration: 0.5, ease: "power1.out", alpha: 0, delay: 1}, "motion-path")
           .to("#speed-0", {duration: 0.15, fill: "#CCDB0E", scale: 1.25}, "motion-path")
           .to("#speed-20", {duration: 0.15, fill: "#CCDB0E", scale: 1.25, delay:0.38}, "motion-path")
           .to("#speed-40", {duration: 0.15, fill: "#CCDB0E", scale: 1.25, delay: 1.5}, "motion-path")
           .to("#zero-mph", {alpha: 0}, "motion-path")
           .from("#eight-MPH", {duration: 0.15, alpha: 0}, "motion-path")
           .to("#eight-MPH", {duration: 0.001, alpha: 0, delay: 0.15}, "motion-path")
           .from("#fifteen-MPH", {duration: 0.15, alpha: 0, delay: 0.15}, "motion-path")
           .to("#fifteen-MPH", {duration: 0.001, alpha: 0, delay: 0.3}, "motion-path")
           .from("#twenty-MPH", {duration: 0.15, alpha: 0, delay: 0.3}, "motion-path")
           .to("#twenty-MPH", {duration: 0.001, alpha: 0, delay: 0.45}, "motion-path")
           .from("#thirty-MPH", {duration: .15, alpha: 0, delay: 0.45}, "motion-path")
           .to("#thirty-MPH", {duration: 0.001, alpha: 0, delay: 1.5}, "motion-path")
           .from("#forty-mph", {duration: 0.15, alpha: 0, delay: 1.5}, "motion-path")

        //    engine icon blink and directions change
           
           .from("#wipers-icon", {alpha: 0, duration: 0.25}, "green")
           .from("#wipers-icon-green", { alpha: 0, duration: 0.25}, "green")
           .to("#wipers-icon-green", {scale: 1.25, duration: 0.25, repeat: 4, yoyo: true})
           
           
        
        
                  
        
       
       
       
        



        