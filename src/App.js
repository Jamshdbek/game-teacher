import "./App.css";
import { Client } from 'appwrite';
function App() {
  const client = new Client();
  client.setProject('67c7e33a002529ecba76');
  return <div className="App"></div>;
}

export default App;
