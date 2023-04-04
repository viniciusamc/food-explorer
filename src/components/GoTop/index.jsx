import { Container } from "./styles.js";

import { BsFillArrowDownCircleFill } from "react-icons/bs";

import { useState } from "react";
import { useEffect } from "react";

export function GoTop() {
  const [isVisible, setIsVisible] = useState(false);

  function handleGoTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container isVisible={isVisible} onClick={handleGoTop}>
      <BsFillArrowDownCircleFill />
    </Container>
  );
}
