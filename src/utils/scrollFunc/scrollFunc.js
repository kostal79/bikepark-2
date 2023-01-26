const scrollFunc = (selector, steps, scrollRef) => {
    const scrollField = document.querySelector(selector);
    const maxScroll = scrollField.scrollLeftMax;
    const shift = scrollField.scrollWidth / steps;
    scrollRef.current =
      scrollRef.current < maxScroll ? scrollRef.current + shift : 0;
    scrollField.scrollLeft = scrollRef.current;
  };

  export default scrollFunc