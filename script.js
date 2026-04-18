const accordion = document.querySelector("[data-accordion]");

if (accordion) {
  const items = Array.from(accordion.querySelectorAll(".faq-item"));
  const triggers = items.map((item) => item.querySelector(".faq-trigger"));

  const closeItem = (item) => {
    const trigger = item.querySelector(".faq-trigger");
    const panel = item.querySelector(".faq-panel");

    item.classList.remove("is-open");
    trigger.setAttribute("aria-expanded", "false");
    panel.setAttribute("aria-hidden", "true");
    panel.style.maxHeight = "0px";
  };

  const openItem = (item) => {
    const trigger = item.querySelector(".faq-trigger");
    const panel = item.querySelector(".faq-panel");
    const inner = item.querySelector(".faq-panel-inner");

    item.classList.add("is-open");
    trigger.setAttribute("aria-expanded", "true");
    panel.setAttribute("aria-hidden", "false");
    panel.style.maxHeight = `${inner.scrollHeight}px`;
  };

  const syncOpenItemHeight = () => {
    items
      .filter((item) => item.classList.contains("is-open"))
      .forEach((item) => {
        const panel = item.querySelector(".faq-panel");
        const inner = item.querySelector(".faq-panel-inner");

        panel.style.maxHeight = `${inner.scrollHeight}px`;
      });
  };

  items.forEach((item) => closeItem(item));

  triggers.forEach((trigger, index) => {
    trigger.addEventListener("click", () => {
      const item = items[index];
      const isOpen = item.classList.contains("is-open");

      items.forEach((otherItem) => {
        if (otherItem !== item) {
          closeItem(otherItem);
        }
      });

      if (isOpen) {
        closeItem(item);
        return;
      }

      openItem(item);
    });

    trigger.addEventListener("keydown", (event) => {
      let nextIndex = null;

      if (event.key === "ArrowDown") {
        nextIndex = (index + 1) % triggers.length;
      } else if (event.key === "ArrowUp") {
        nextIndex = (index - 1 + triggers.length) % triggers.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = triggers.length - 1;
      }

      if (nextIndex === null) {
        return;
      }

      event.preventDefault();
      triggers[nextIndex].focus();
    });
  });

  window.addEventListener("resize", syncOpenItemHeight);
}
