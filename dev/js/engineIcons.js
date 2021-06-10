import { gsap } from "gsap";


export let engineIconsTL = gsap.timeline();

gsap.set("#alarm-icon",{transformOrigin:"center"});
gsap.set("#oil-icon",{transformOrigin:"center"});
gsap.set("#wipers-icon",{transformOrigin:"center"});
gsap.set("#wipers-clean",{transformOrigin:"center"});



engineIconsTL.from("#alarm-icon", {alpha: 0, scale: 0.75, duration: 0.5}, "engine")
             .from("#oil-icon", {alpha: 0, scale: 0.75, duration: 0.5}, "engine")
             .from("#wipers-icon", {alpha: 0, scale: 0.75, duration: 0.5}, "engine")
             .from("#wipers-clean", {alpha: 0, scale: 0.75, duration: 0.5}, "engine")
        
       
       
       
        



        