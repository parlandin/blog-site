import config from "@src/configs/general";

const useEventTheme = () => {
  const isEventActive = config.isEventThemeActive;
  const eventTheme = config.currentEventTheme;
  const eventThemeName = config.currentEventTheme.name;

  return { isEventActive, eventTheme, eventThemeName };
};

export default useEventTheme;
