import { useEffect, useState } from "react";
import { throttle } from "shared/utils/throttle";

export function useInfiniteScroll(ref: React.RefObject<HTMLElement>, callback: Function) {
    useEffect(() => {
      const handleScroll = throttle(() => {
        if(ref.current) {
            const scrollHeight = ref.current.scrollHeight;
            const { clientHeight, scrollTop } = document.documentElement;

            if (scrollTop + clientHeight >= scrollHeight - 20) {
                callback();
            }
        }      
      }, 600);


      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
}