import React from "react";
import { useScreenDetector } from "@hooks/useScreenDetector";
import { Toaster } from "react-hot-toast";
import { useTheme } from "styled-components";

interface ToastProviderProps {
  children: React.ReactNode;
}

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const { isMobile } = useScreenDetector();

  const theme = useTheme();

  const toastDarkStyle = {
    background: "#131127",
    color: "#fff",
    fontFamily: "Montserrat",
    padding: "6px 8px",
    borderRadius: "8px",
    border: "1px solid #fff",
  };

  const toastLightStyle = {
    background: "#fff",
    color: "#000",
    fontFamily: "Montserrat",
    padding: "6px 8px",
    borderRadius: "8px",
    border: "1px solid #000",
  };

  return (
    <>
      <Toaster
        toastOptions={{
          duration: 2500,
          style: theme.name === "dark" ? toastDarkStyle : toastLightStyle,
        }}
        position={isMobile ? "top-center" : "bottom-center"}
      />
      {children}
    </>
  );
};

export default ToastProvider;
