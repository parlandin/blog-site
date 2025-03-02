import React, { createContext, useEffect, useState } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import axios from "@api/axios";

interface FingerprintContextProps {
  fingerprint: string;
  setFingerprint: (fingerprint: string) => void;
}

interface FingerprintProviderProps {
  children: React.ReactNode;
}

export const FingerprintContext = createContext<FingerprintContextProps>({
  fingerprint: "",
  setFingerprint: () => {},
});

const FingerprintProvider: React.FC<FingerprintProviderProps> = ({
  children,
}) => {
  const [fingerprint, setFingerprint] = useState("");

  const getFingerprint = async () => {
    const fp = await FingerprintJS.load();
    const { visitorId } = await fp.get();
    setFingerprint(visitorId);

    localStorage.setItem("fingerprint", visitorId);
  };

  useEffect(() => {
    getFingerprint();
  }, []);

  return (
    <FingerprintContext.Provider value={{ fingerprint, setFingerprint }}>
      {children}
    </FingerprintContext.Provider>
  );
};

export default FingerprintProvider;
