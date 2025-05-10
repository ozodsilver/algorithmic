import { gsap } from 'gsap'

interface GsapOptions {
    duration?: number
    repeat?: number
    yoyo?: boolean
    ease?: string
    y:number
}

export const useGsap = () => {
    const animateElement = (element: HTMLElement, options: GsapOptions) => {
        gsap.to(element, {
            ...options,
            y:options.y,
            duration: options.duration || 2,
            repeat: options.repeat || -1,
            yoyo: options.yoyo ?? true,
            ease: options.ease || 'power1.inOut',
        })
    }

    return { animateElement }
}
