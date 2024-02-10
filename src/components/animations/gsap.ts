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
        domElement?.classList.add('transparency')
      },
      onEnterBack: () => {
        domElement?.classList.remove('transparency')
      }
    }
  })

}

const watchSection = (element: string, triggerElement: string) => {
  const domElement = document.getElementById(element.substring(1))
  gsap.to((element), {
    scrollTrigger: {
      trigger: triggerElement,
      /* markers: true, */
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        domElement?.classList.add('active')
      },
      onLeave: () => {
        domElement?.classList.remove('active')
      },
      onEnterBack: () => {
        domElement?.classList.add('active')
      },
      onLeaveBack: () => {
        domElement?.classList.remove('active')
      },
    }
  })

}

export { watchNavbar, watchSection }