import React from "react";
import { Header, Footer } from "./components";
import { Container } from "react-bootstrap";
import { HomeScreen } from "./screens";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
