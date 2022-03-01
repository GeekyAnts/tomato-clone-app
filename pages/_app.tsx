import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NativeBaseProvider } from "native-base";
import { ZomatoTheme } from "../theme";
import config from "../nativebase.config";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider theme={ZomatoTheme} config={config} isSSR>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}

export default MyApp;
