import React from "react";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import ContextProvider from "./Store/ContextProvider";
function App() {
  return (
    <ContextProvider>
      <Header />
      <main>
        <Form />
        <List />
      </main>
    </ContextProvider>
  );
}

export default App;
