import './App.css';
import NavBar from './component/NavBar';
import ItemListContainer from './component/ItemListContainer';
import ItemCount from './component/ItemCount';

function App() {
  const onAdd = () => {
    console.log ("onAdd")
  }
  return (
    <>
      <NavBar/>
      <ItemListContainer saludo={"prop"}/>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </>
  );
}

export default App;
