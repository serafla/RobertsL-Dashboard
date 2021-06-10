import { gsap } from "gsap";




export let logoStartTL = gsap.timeline();


logoStartTL.from("#logo-circle-outline",{alpha: 0, duration:1}, "start")
        .from("#top-left-stripe-logo", {alpha: 0, translateX:-300, duration: 0.25, scale:3}, "first")
        .from("#top-right-stripe-logo", {alpha: 0, translateX:300, duration: 0.25, scale:3}, "first")
        .from("#two-left-stripe-logo", {alpha: 0, translateX:-300, scale:3, duration: 0.25, delay: 0.1}, "first")
        .from("#two-right-stripe-logo", {alpha: 0, translateX:300, scale:3, duration: 0.25, delay: 0.1}, "first")
        .from("#three-left-stripe-logo", {alpha: 0, translateX:-300, scale:3, duration: 0.25, delay: 0.2}, "first")
        .from("#three-right-stripe-logo", {alpha: 0, translateX:300, scale:3, duration: 0.25, delay: 0.2}, "first")
        .from("#four-left-stripe-logo", {alpha: 0, translateX:-300, scale:3, duration: 0.25, delay: 0.3}, "first")
        .from("#four-right-stripe-logo", {alpha: 0, translateX:300, scale:3, duration: 0.25, delay: 0.3}, "first")
        .from("#mini-letters",{alpha: 0, duration:1})

        

        