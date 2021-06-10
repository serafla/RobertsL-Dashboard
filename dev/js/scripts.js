import { gsap } from "gsap";



import { logoStartTL } from "./logoStart";
import { logoEndTL } from "./logoEnd";
import { dashboardOutlineTL } from "./dashboardOutline";
import { speedAcceleratorTL } from "./speedAccelerator";
import { iconFanTL } from "./iconFan";
import { engineIconsTL } from "./engineIcons";
import { musicDirectionsTL } from "./musicDirections";
import { prndlTL } from "./PRNDL";
import { engineRevTL } from "./engineRev";


let mainTL = gsap.timeline();

mainTL.add(logoStartTL)
      .add(logoEndTL)
      .add(dashboardOutlineTL)
      .add(speedAcceleratorTL, "one")
      .add(iconFanTL)
      .add(engineIconsTL, "one")
      .add(musicDirectionsTL, "one")
      .add(prndlTL)
      .add(engineRevTL);

       


     
// console.log(numberThing);

// GSDevTools.create();