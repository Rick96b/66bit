import {useEffect} from 'react';

export function usePullToRefresh(
    ref: React.RefObject<HTMLDivElement>,
    onTrigger: () => void
  ) {
    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      
  
      // attach the event listener
      el.addEventListener("touchstart", handleTouchStart);
  
      function handleTouchStart(startEvent: TouchEvent) {
        const el = ref.current;
        if (!el) return;
  
        // get the initial Y position
        const initialY = startEvent.touches[0].clientY;
  
        el.addEventListener("touchmove", handleTouchMove);
        el.addEventListener("touchend", handleTouchEnd);
  
        function handleTouchMove(moveEvent: TouchEvent) {
            const el = ref.current;
            if (!el) return;
          
            // get the current Y position
            const currentY = moveEvent.touches[0].clientY;
          
            // get the difference
            const dy = currentY - initialY;
          
            if (dy < 0) return;
          
            // now we are using the `appr` function
            el.style.transform = `translateY(${appr(dy)}px)`;
          }
          
          
          const MAX = 128;
          const k = 0.4;
          function appr(x: number) {
            return MAX * (1 - Math.exp((-k * x) / MAX));
        }
  
        function handleTouchEnd(endEvent: TouchEvent) {
            const el = ref.current;
            if (!el) return;
          
            // return the element to its initial position
            el.style.transform = "translateY(0)";
          
            // add transition
            el.style.transition = "transform 0.2s";
          
            // run the callback
            const y = endEvent.changedTouches[0].clientY;
            const dy = y - initialY;
            if (dy > 100) {
              onTrigger();
            }
          
            // listen for transition end event
            el.addEventListener("transitionend", onTransitionEnd);
          
            // cleanup
            el.removeEventListener("touchmove", handleTouchMove);
            el.removeEventListener("touchend", handleTouchEnd);
        }
          
          function onTransitionEnd() {
            const el = ref.current;
            if (!el) return;
          
            // remove transition
            el.style.transition = "";
          
            // cleanup
            el.removeEventListener("transitionend", onTransitionEnd);
          }
      }
  
      return () => {
        // let's not forget to cleanup
        el.removeEventListener("touchstart", handleTouchStart);
      };
    }, [ref.current]);
}