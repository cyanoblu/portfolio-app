import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const watchNavbar = (element: string) => {
  const domElement = document.getElementById(element.substring(1))
  gsap.to((element), {
    scrollTrigger: {
      trigger: element,
      /* markers: true, */
      start: '100px',
      onEnter: () => {
        domElement?.classList.add('toggle-transparency')
      },
      onEnterBack: () => {
        domElement?.classList.remove('toggle-transparency')
      }
    }
  })

}

export { watchNavbar }