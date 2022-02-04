import React from "react";
import { Header, Footer } from "./components";
import { Container } from "react-bootstrap";
function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Content</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
