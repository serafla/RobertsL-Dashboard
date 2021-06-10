import { gsap } from "gsap";

export let engineRevTL = gsap.timeline();

import { DrawSVGPlugin} from "gsap/DrawSVGPlugin"; 
gsap.registerPlugin(DrawSVGPlugin);


engineRevTL.to("#PRNDL-park", {alpha: 0, duration: 0.25}, "drive")
           .from("#PRNDL-drive", {alpha: 0, duration: 0.25}, "drive")
           .from("#motion-path", {drawSVG: "100% 100%", duration: 1})
           
        
        
                  
        
       
       
       
        



        