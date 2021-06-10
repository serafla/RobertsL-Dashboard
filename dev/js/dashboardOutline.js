import { gsap } from "gsap";
export let dashboardOutlineTL = gsap.timeline();

import { DrawSVGPlugin} from "gsap/DrawSVGPlugin"; 
gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#small-mini-logo",{transformOrigin:"center"});

dashboardOutlineTL.from("#top-outline", {duration:0.25, drawSVG: "50% 50%"}, "dashboardcenter")
                  .from("#bottom-outline", {duration:0.25, drawSVG: "50% 50%"}, "dashboardcenter")
                  .from("#left-outline", {duration:0.15, drawSVG: "50% 50%"}, "dashboardedge")
                  .from("#right-outline", {duration:0.15, drawSVG: "50% 50%"}, "dashboardedge")
                  .from("#small-mini-logo", {duration:0.75, alpha:0, scale: 0.75}, "dashboardcenter")
    
    
       
       
       
        



        