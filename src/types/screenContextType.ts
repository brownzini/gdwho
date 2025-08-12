export type ScreenContextType = {
  screenName: string;
  setScreenName: (screenName: string) => void;
  backScreen(): void;
  nextScreen: (name: string) => void;
};
