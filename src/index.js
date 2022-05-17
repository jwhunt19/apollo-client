import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Redirect from "./Redirect";

const client = new ApolloClient({
  uri: "https://yfyvtf.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ApolloProvider client={client}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path=":slug" element={<Redirect />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </ApolloProvider>
);
