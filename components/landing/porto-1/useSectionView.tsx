import { usePorto1 } from "@/store/usePorto1";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { links } from "./lib/data";

export default function useSectionView(name: (typeof links)[number]["name"]) {
  const { setActiveSection, timeLastClick } = usePorto1();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView && Date.now() - timeLastClick > 1000) {
      setActiveSection(name);
    }
  }, [inView, setActiveSection, timeLastClick, name]);
  return { ref };
}
