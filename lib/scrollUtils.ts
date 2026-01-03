/**
 * Optimized scroll utility functions
 * Uses requestAnimationFrame to avoid forced reflows
 */

/**
 * Get element position using requestAnimationFrame to avoid forced reflow
 */
export const getElementPosition = (
  element: HTMLElement | null,
  callback: (position: number) => void
): void => {
  if (!element) {
    callback(0);
    return;
  }

  // Use requestAnimationFrame to batch DOM reads and avoid forced reflow
  requestAnimationFrame(() => {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    callback(offsetPosition);
  });
};

/**
 * Scroll to element with optimized reflow handling
 */
export const scrollToElement = (
  elementId: string,
  onComplete?: () => void
): void => {
  const element = document.getElementById(elementId);
  
  getElementPosition(element, (offsetPosition) => {
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    
    // Remove hash from URL after scrolling
    requestAnimationFrame(() => {
      window.history.replaceState(null, '', window.location.pathname);
      onComplete?.();
    });
  });
};

/**
 * Scroll to element after navigation delay
 */
export const scrollToElementAfterDelay = (
  elementId: string,
  delay: number = 100
): void => {
  setTimeout(() => {
    scrollToElement(elementId);
  }, delay);
};
