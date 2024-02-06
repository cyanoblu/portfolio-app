import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

console.log('gsap on')
const animate = (element: string) => {
  console.log('element captured: ', element)
  gsap.to(element, {
    scrollTrigger: element, // start animation when ".box" enters the viewport
    x: 500,
  });
}

export default animate