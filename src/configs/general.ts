//@ts-ignore
import config from "../../general-config.js";

export default config as {
  defaultLanguage: string;
  currentEventTheme: {
    name: string;
    header: {
      icon: string;
      alt: string;
    };
    hero: {
      image: string;
      alt: string;
      quotes: string;
    };
    wordOfTheDay: {
      image: string;
      alt: string;
    };
    notFound: {
      image: string;
      alt: string;
      text: string;
    };
    colorTheme: string;
  };
  isEventThemeActive: boolean;
  backendUrl: string;
};
