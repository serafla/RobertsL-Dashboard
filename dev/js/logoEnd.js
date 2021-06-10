import { gsap } from "gsap";


gsap.set("#logo-circle-outline",{transformOrigin:"center"});
gsap.set("#big-gas-tank-container",{transformOrigin:"bottom center"});
gsap.set("#big-gas-level-1",{transformOrigin:"bottom center"});
gsap.set("#big-gas-level-2",{transformOrigin:"bottom center"});
gsap.set("#big-gas-level-3",{transformOrigin:"bottom center"});

export let logoEndTL = gsap.timeline();


logoEndTL.to("#top-left-stripe-logo", {alpha: 0, translateX:-300, duration: 0.3, scale:3}, "first")
        .to("#top-right-stripe-logo", {alpha: 0, translateX:300, duration: 0.3, scale:3}, "first")
        .to("#two-left-stripe-logo", {alpha: 0, translateX:-300, scale:3, duration: 0.3, delay: 0.1}, "first")
        .to("#two-right-stripe-logo", {alpha: 0, translateX:300, scale:3, duration: 0.3, delay: 0.1}, "first")
        .to("#three-left-stripe-logo", {alpha: 0, translateX:-300, scale:3, duration: 0.3, delay: 0.2}, "first")
        .to("#three-right-stripe-logo", {alpha: 0, translateX:300, scale:3, duration: 0.3, delay: 0.2}, "first")
        .to("#four-left-stripe-logo", {alpha: 0, translateX:-300, scale:3, duration: 0.3, delay: 0.3}, "first")
        .to("#four-right-stripe-logo", {alpha: 0, translateX:300, scale:3, duration: 0.3, delay: 0.3}, "first")
        .to("#mini-letters",{alpha: 0, duration:0.5}, "first")
        .to("#logo-circle-outline",{strokeWidth:2, stroke: "#898989", duration:0.75, scale: 1.094, positionX: -0.001, positionY: -0.001}, "first")
        .to("#logo-circle-outline",{alpha:0, duration:0.005}, "outline")
        .from("#big-gas-outline",{alpha:0, duration:0.005}, "outline")
        .from("#big-gas-level-1",{alpha: 0, scaleY: 0.5, duration:0.4, ease: "back.out(1.7)"})
        .from("#big-gas-level-2",{alpha: 0, scaleY: 0.5, duration:0.4, ease: "back.out(1.7)"})
        .from("#big-gas-level-3",{alpha: 0, scaleY: 0.5, duration:0.4, ease: "back.out(1.7)"})
        .from("#big-tank-percentage", {alpha: 0, duration: 0.5, translateY: 25}, "gastankdisplay")
        .from("#big-full", {alpha: 0, duration: 0.5, delay: 0.15, translateY: 25}, "gastankdisplay")
        .to("#big-tank-percentage", {alpha: 0, duration: 0.5, translateY: -25}, "mileageleft")
        .to("#big-full", {alpha: 0, duration: 0.5, translateY: -25}, "mileageleft")
        .from("#big-mileage-left", {alpha: 0, duration: 0.5, translateY: 25, delay: 0.20}, "mileageleft")
        .from("#big-left", {alpha: 0, duration: 0.5, translateY: 25, delay: 0.35}, "mileageleft")
        .to("#big-gas-tank-container", {scale: 0.4, y: 100, duration: 0.75})
       
       
       
        



        