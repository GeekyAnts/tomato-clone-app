// @generated: @expo/next-adapter@3.1.10
import { default as NativebaseDocument } from "@native-base/next-adapter/document";
import fontsCSS from "@native-base/icons/FontsCSS";
import { AppRegistry } from "react-native";
import { Main } from "next/document";
import * as React from "react";
import NextDocument, { Html, Head, NextScript } from "next/document";

class Document extends NativebaseDocument {
  // render() {
  //   return (
  //     <Html>
  //       <Head />
  //       <body>
  //         <Main />
  //         <NextScript />
  //       </body>
  //     </Html>
  //   );
  // }
}

async function getInitialProps({ renderPage }) {
  AppRegistry.registerComponent("Main", () => Main);
  const { getStyleElement } = AppRegistry.getApplication("Main");
  const page = await renderPage();
  const styles = [
    // eslint-disable-next-line react/jsx-key
    <style dangerouslySetInnerHTML={{ __html: fontsCSS }} />,
    getStyleElement(),
  ];
  return { ...page, styles: React.Children.toArray(styles) };
}

Document.getInitialProps = getInitialProps;

export default Document;

// export { default } from "@native-base/next-adapter/document";
