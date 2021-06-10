import { gsap } from "gsap";

export let speedAcceleratorTL = gsap.timeline();

import { DrawSVGPlugin} from "gsap/DrawSVGPlugin"; 
gsap.registerPlugin(DrawSVGPlugin);

gsap.set("zero-MPH", {transformOrigin: "center"});

speedAcceleratorTL.from("#speedometer-arc", {drawSVG: "100% 100%", duration: 0.25})
                  .from("#speed-ray-1", {alpha: 0, duration: 0.05}, "comein"  )
                  .from("#speed-ray-2", {alpha: 0, duration: 0.05})
                  .from("#speed-ray-3", {alpha: 0, duration: 0.05})
                  .from("#speed-ray-4", {alpha: 0, duration: 0.05})
                  .from("#speed-ray-5", {alpha: 0, duration: 0.05})
                  .from("#speed-ray-6", {alpha: 0, duration: 0.05})
                  .from("#speed-ray-7", {alpha: 0, duration: 0.05})
                  .from("#speed-ray-8", {alpha: 0, duration: 0.05})
                  .from("#speed-ray-9", {alpha: 0, duration: 0.05})
                  .from("#speed-ray-10", {alpha: 0, duration: 0.05})
                  .from("#speed-ray-11", {alpha: 0, duration: 0.05})
                  .from("#speed-ray-12", {alpha: 0, duration: 0.05})
                  .from("#speed-ray-13", {alpha: 0, duration: 0.05})
                  .from("#speed-numbers", {alpha: 0, duration: 0.5}, "fade")
                  .from("#miles-per-hour", {alpha: 0, duration: 0.5}, "fade")
                  .from("#accel-1", {alpha: 0, duration: 0.10, delay: 0.2}, "comein" )
                  .from("#accel-2", {alpha: 0, duration: 0.10, delay: 0.3}, "comein" )
                  .from("#accel-3", {alpha: 0, duration: 0.10, delay: 0.4}, "comein" )
                  .from("#accel-4", {alpha: 0, duration: 0.10, delay: 0.5}, "comein" )
                  .from("#accel-5", {alpha: 0, duration: 0.10, delay: 0.6}, "comein" )
                  .from("#accel-6", {alpha: 0, duration: 0.10, delay: 0.7}, "comein" )
                  
        
       
       
       
        



        