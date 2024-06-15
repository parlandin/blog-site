import React from "react";
import { useScreenDetector } from "@hooks/useScreenDetector";
import styled, { useTheme } from "styled-components";
import {
  SnackbarProvider,
  SnackbarProviderProps,
  MaterialDesignContent,
} from "notistack";
import LoadingVariant from "./LoadingVariant";

interface ToastProviderProps {
  children: React.ReactNode;
}

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-success": {
    "& svg": {
      color: "#2D7738",
    },
  },
  "&.notistack-MuiContent-error": {
    "& svg": {
      color: "#970C0C",
    },
  },
}));

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
    maxWidth: "400px",
  };

  const toastLightStyle = {
    background: "#fff",
    color: "#000",
    fontFamily: "Montserrat",
    padding: "6px 8px",
    borderRadius: "8px",
    border: "1px solid #000",
    maxWidth: "200px",
  };

  const anchorMobile: SnackbarProviderProps["anchorOrigin"] = {
    vertical: "top",
    horizontal: "center",
  };

  const anchorDesktop: SnackbarProviderProps["anchorOrigin"] = {
    vertical: "bottom",
    horizontal: "center",
  };

  return (
    <>
      <SnackbarProvider
        style={theme.name == "dark" ? toastDarkStyle : toastLightStyle}
        maxSnack={3}
        autoHideDuration={2500}
        preventDuplicate={true}
        dense={true}
        anchorOrigin={isMobile ? anchorMobile : anchorDesktop}
        Components={{
          loading: LoadingVariant,
          error: StyledMaterialDesignContent,
          success: StyledMaterialDesignContent,
        }}
      >
        {children}
      </SnackbarProvider>
    </>
  );
};

export default ToastProvider;
