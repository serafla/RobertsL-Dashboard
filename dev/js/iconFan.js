import { gsap } from "gsap";

export let iconFanTL = gsap.timeline();


iconFanTL.from("#mini-car-icon", {alpha: 0, duration: 0.5}, "fade")
         .from("#phone-icon",{alpha: 0, translateX: 100, duration: 0.5, y: -15}, "fan")
         .from("#settings-icon",{alpha: 0, translateX: 100, duration: 0.5, y: -40}, "fan")
         .from("#map-icon",{alpha: 0, translateX: -100, duration: 0.5, y: -40}, "fan")
         .from("#spotify-icon",{alpha: 0, translateX: -100, duration: 0.5, y: -15}, "fan")
         .from("#PRNDL-gray", {alpha: 0, duration: 0.5}, "fade")
        
                  
        
       
       
       
        



        