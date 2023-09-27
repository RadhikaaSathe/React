
import './App.css';
import Card from './components/Cards'
function App() {
  return (
  <div className="App">
      <header className="App-header">
      <h1 className="text-black mb-4 rounded-xl font-bold underline bg-green-400 p-4">
    Test Tailwind!
  </h1>
  <div >
  <Card username="Aman"/>
  <Card/>
  </div>
   </header>
  </div>
  );
}

export default App;
