import type { ExtendedTableContents } from "@interface";
import { getContentIds } from "./tableContents.helper";

export interface ObserveElementProps {
  elements: (Element | null)[]
  tableContents: ExtendedTableContents[];
  location: string;
}

export function observeTableContents({ elements, tableContents, location }: ObserveElementProps) {
  console.log('tableContents', tableContents)
  console.log('elements', elements)
  if (!elements) {
    throw new Error("No elements or element provided");
  }

  const isIntersecting = (entry: IntersectionObserverEntry) =>
    entry.isIntersecting;

  const activeAnchor = (entry: IntersectionObserverEntry) => {
    const element = entry.target as HTMLDivElement;
    const id = element.id;
    // Get all content Ids including subcontents. This returns contentId and anchorId
    const allContents = getContentIds({ tableContents });
    const content = allContents.find((content) => content.contentId === id);
    const contentsNotIntersecting = allContents.filter((content) => content.contentId !== id);

    if (!content) {
      console.warn('content not found for observable table of contents')
      return
    }
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

  document.addEventListener("astro:before-preparation", () => {
    // Disconnect only if the current location is the blogpost is being called on
    if (window.location.pathname === location) {
      observer.disconnect();
    }
  })
}