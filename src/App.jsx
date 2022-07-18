import Card from "./components/Card";
import Header from "./components/Header";
import data from "./data";

function App() {
  return (
    <>
      <Header />
      <section>
        {data.map((item) => {
          return <Card item={item} />;
        })}
      </section>
    </>
  );
}

export default App;
