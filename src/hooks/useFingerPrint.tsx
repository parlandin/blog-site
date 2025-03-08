import React, { useContext } from "react";
import { FingerprintContext } from "@contexts/FingerprintContext";

const useFingerprint = () => {
  const { fingerprint } = useContext(FingerprintContext);
  return fingerprint;
};

export default useFingerprint;
