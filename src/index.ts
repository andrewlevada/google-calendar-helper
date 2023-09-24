import { HideItemsInCreationModal } from "./modules/hide-items-in-creation-modal";
import { ExtensionModule } from "./modules/def";

const modules : ExtensionModule[] = [
  new HideItemsInCreationModal(),
];

console.log("Google Calendar Extension loaded");

for (const module of modules) {
  module.attach();
  if (module.doesNeedToRunOnStartup()) module.apply();
}
