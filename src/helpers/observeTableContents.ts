import type { ExtendedTableContents } from "@interface";

export interface ObserveElementContent {
  elementToObserve: Element | null;
  anchorToActive: Element | null;
}

export interface ObserveElementProps {
  elements: ObserveElementContent[]
  tableContents: ExtendedTableContents[];
}

export function observeTableContents({ elements, tableContents }: ObserveElementProps) {
  if (!elements) {
    throw new Error("No elements or element provided");
  }

  const isIntersecting = (entry: IntersectionObserverEntry) =>
    entry.isIntersecting;

  const activeAnchor = (entry: IntersectionObserverEntry) => {
    const element = entry.target as HTMLDivElement;
    const id = element.id;
    const content = tableContents.find((content) => content.contentId === id);

    if (!content) return
    const anchor = document.querySelector(`#${content.anchorId}`) as HTMLAnchorElement;
    anchor.classList.add("text-blue-600");
    observer.unobserve(element);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.filter(isIntersecting).forEach(activeAnchor);
    },
    { threshold: 0.75 }
  );

  if (elements) {
    elements.forEach((element) => {
      if (!element.elementToObserve) {
        return
      }
      observer.observe(element.elementToObserve);
    });
  }
}