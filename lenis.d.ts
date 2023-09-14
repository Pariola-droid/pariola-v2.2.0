declare module '@studio-freight/lenis' {
  export default class Lenis {
    constructor(options: {
      // lerp: number;
      duration: number;
      easing: (t: number) => number;
      infinite: boolean;
      smooth: boolean;
    });

    raf(time: number): void;
  }
}
