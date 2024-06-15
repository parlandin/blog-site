import React, { useEffect } from "react";
import ThemeProvider from "@contexts/ThemeContext";
import ThemeWrapper from "@components/ThemeWrapper";
import ToastProvider from "@layouts/Toast";

interface ProvidesProps {
  children: React.ReactNode;
}

const Provides: React.FC<ProvidesProps> = ({ children }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (process.env.NODE_ENV === "development") {
        if ("serviceWorker" in navigator) {
          navigator.serviceWorker.getRegistrations().then((registrations) => {
            if (registrations.length === 0) {
              navigator.serviceWorker.register("/sw.js");
            }
          });
        }
      }
    }
  }, []);

  return (
    <>
      <ThemeProvider>
        <ThemeWrapper>
          <ToastProvider>{children}</ToastProvider>
        </ThemeWrapper>
      </ThemeProvider>
    </>
  );
};

export default Provides;
