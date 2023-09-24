export function hideElement(element: HTMLElement) {
  element.style.display = "none";
}

export function waitForBrowserRender() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
