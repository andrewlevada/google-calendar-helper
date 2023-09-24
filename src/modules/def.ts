export abstract class ExtensionModule {
  abstract attach(): void;
  abstract apply(): void;

  doesNeedToRunOnStartup(): boolean {
    return false;
  }
}
