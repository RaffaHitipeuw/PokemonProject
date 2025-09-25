import { useState } from "react";
import Pokemons from "./components/PokemonList/PokemonList";
import Login from "./components/Login";
import Layout from "./components/layout/Layout";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Layout>
      {isLogin ? <Pokemons /> : <Login setIsLogin={setIsLogin} />}
    </Layout>
  );
}

export default App;
