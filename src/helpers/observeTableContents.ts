import type { ExtendedTableContents } from "@interface";
import { getContentIds } from "./tableContents.helper";

export interface ObserveElementProps {
  elements: (Element | null)[]
  tableContents: ExtendedTableContents[];
  location: string;
}

export function observeTableContents({ elements, tableContents, location }: ObserveElementProps) {
  if (!elements) {
    throw new Error("No elements or element provided");
  }
  // Get all content Ids including subcontents. This returns contentId and anchorId
  const allContents = getContentIds({ tableContents });

  const isIntersecting = (entry: IntersectionObserverEntry) =>
    entry.isIntersecting;

  const activeAnchor = (entry: IntersectionObserverEntry) => {
    const element = entry.target as HTMLDivElement;
    const elementId = element.id;
    const content = allContents.find((content) => content.contentId === elementId);

    if (!content) {
      console.warn('content not found for observable table of contents')
      return
    }
    const activeAnchor = document.querySelector(`#${content.anchorId}`) as HTMLAnchorElement;
    if (!activeAnchor) {
      console.warn(`Anchor not found for contentId: ${elementId}`);
      return;
    }
    
    document.querySelectorAll("a.text-blue-800").forEach((anchor) => {
      anchor.classList.remove("text-blue-800")
    });
    activeAnchor.classList.add("text-blue-800");
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