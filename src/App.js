import './App.css';
import Button from './components/buton/Button';
import Products from "./components/products/Products";

const itemsArr = ['Apple', 'Mango', 'Banana']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label='Click Me Please!!!!!!'></Button>
        <Products items={itemsArr}/>
      </header>
    </div>
  );
}

export default App;
