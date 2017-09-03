import React from "react";
import PT from "prop-types";
import Head from "next/head";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Container } from "semantic-ui-react";
import styled, { injectGlobal } from "styled-components";

// eslint-disable-next-line no-unused-expressions
injectGlobal`body {overflow-y: scroll;}`;

const Layout = ({
  children,
  title = "Ололось блог",
  text = true,
  topPadding = "1em",
  as = "div"
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://cdn.quilljs.com/1.3.1/quill.snow.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
      />
    </Head>
    <header>
      <Navigation text={text} />
    </header>
    <ContentContainer as={as} topPadding={topPadding} text={text}>
      {children}
    </ContentContainer>
    <Footer />
  </div>
);

const ContentContainer = styled(Container)`
  padding-top: ${p => p.topPadding};
  padding-bottom: 1em;
`;

Layout.propTypes = {
  text: PT.bool,
  title: PT.string,
  topPadding: PT.string,
  as: PT.string
};

export default Layout;
