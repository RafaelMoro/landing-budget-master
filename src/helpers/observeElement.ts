export function observeElement({ elements, element, cssClasses }: { elements?: NodeListOf<Element>; element?: Element; cssClasses: string[] }) {
  if (cssClasses.length === 0) {
    throw new Error("No cssClasses provided");
  }
  if (!elements && !element) {
    throw new Error("No elements or element provided");
  }

  const isIntersecting = (entry: IntersectionObserverEntry) =>
    entry.isIntersecting;

  const animateElement = (entry: IntersectionObserverEntry) => {
    const element = entry.target as HTMLImageElement;
    cssClasses.forEach((cssClass) => element.classList.add(cssClass));
    observer.unobserve(element);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.filter(isIntersecting).forEach(animateElement);
    },
    { threshold: 0.75 }
  );

  if (elements) {
    elements.forEach((element) => {
      observer.observe(element);
    });
  }
  if (element) {
    observer.observe(element);
    return
  }
}