import "./src/styles/prism-dracula.css";
import MainContainer from "./src/layouts/MainLayout/index";
import Provides from "./src/layouts/Provides/index";
import React from "react";

export const wrapRootElement = ({ element }) => {
  return <Provides>{element}</Provides>;
};

export const wrapPageElement = ({ element, props }) => {
  return <MainContainer {...props}>{element}</MainContainer>;
};

export const registerServiceWorker = () => true;

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    "Essa página foi atualizada,  Reiniciar a página agora?"
  );

  if (answer === true) {
    window.location.reload();
  }
};
