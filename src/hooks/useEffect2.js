import React, { useState, useEffect } from "react";

export default function HeaderEffect() {
  /* Creating a state variable called scroll and a function called setScroll. */
  const [scroll, setScroll] = useState(false);

  /* Listening for a scroll event and then setting the scroll state to true 
    if the scrollY is greater than 700. */
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 700);
    });
  }, []);

  return (
    <>
      <header className={scroll ? "banner-scroll" : "banner"}>
        <p>Header Effect</p>
      </header>
    </>
  );
}
