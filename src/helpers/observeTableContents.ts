import type { ExtendedTableContents } from "@interface";

export interface ObserveElementProps {
  elements: (Element | null)[]
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
    const contentsNotIntersecting = tableContents.filter((content) => content.contentId !== id);

    if (!content) return
    const anchor = document.querySelector(`#${content.anchorId}`) as HTMLAnchorElement;
    const inactiveAnchors = contentsNotIntersecting.map((content) => document.querySelector(`#${content.anchorId}`) as HTMLAnchorElement);
    inactiveAnchors.forEach((anchor) => {
      anchor.classList.remove("text-blue-800")
    });
    anchor.classList.add("text-blue-800");
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.filter(isIntersecting).forEach(activeAnchor);
    },
    { threshold: 0.75 }
  );

  (elements as (Element | null)[]).filter(Boolean).forEach((element) => {
    observer.observe(element as Element);
  });
}