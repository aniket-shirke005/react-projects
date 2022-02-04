import React from "react";
import { Header, Footer } from "./components";
import { Container } from "react-bootstrap";
function App() {
  return (
    <>
      <Header />
      <Container>
        <h1>Content</h1>
      </Container>
      <Footer />
    </>
  );
}

export default App;
