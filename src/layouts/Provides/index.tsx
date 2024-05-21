import React from "react";
import ThemeProvider from "@contexts/ThemeContext";
import ThemeWrapper from "@components/ThemeWrapper";

interface ProvidesProps {
  children: React.ReactNode;
}

const Provides: React.FC<ProvidesProps> = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <ThemeWrapper>{children}</ThemeWrapper>
      </ThemeProvider>
    </>
  );
};

export default Provides;
