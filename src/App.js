import CardList from "./components/CardList";

function App(props) {
  return (
    <div>
      <div className="header">{props.title}</div>
      <CardList />
    </div>
  );
}

export default App;
