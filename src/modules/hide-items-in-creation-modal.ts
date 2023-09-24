import { ExtensionModule } from "./def";
import { hideElement, waitForBrowserRender } from "../utils";

const itemsToHide = [
  "Find a time",
  "Add guests",
  "Add Google Meet video conferencing",
  "Add location",
];

export class HideItemsInCreationModal extends ExtensionModule {
  attach(): void {
    const target = document.querySelector("body > #yDmH0d");
    if (!target) {
      console.error("Failed to find target \"#yDmH0d\" for HideItemsInCreationModal");
      return;
    }

    const callback = () => waitForBrowserRender().then(() => {
      if (target.childElementCount == 0) return;
      this.apply()
    });

    const observer = new MutationObserver(callback);
    observer.observe(target, { childList: true });

    console.log("HideItemsInCreationModal attached");
  }

  apply(): void {
    console.log("HideItemsInCreationModal applied");

    const creationMenu = document.body.querySelector("div.VuEIfc");
    if (!creationMenu) return;

    for (let i = 0; i < creationMenu.childNodes.length; i++) {
      const item = creationMenu.childNodes[i];
      if (!(item instanceof HTMLElement)) continue;

      const text = item.textContent;
      if (!text) continue;

      if (shouldHide(text)) hideElement(item);
    }
  }
}

function shouldHide(itemText: string): boolean {
  for (const item of itemsToHide)
    if (itemText.includes(item)) return true;

  return false;
}
