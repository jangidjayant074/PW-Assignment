
import List from "./Component/List";
function App() {
  
  const listItems = ["Jeans", "Shirt", "Trousers"]; 
  return (
    <>
    <h1> Here are list of some items </h1>
      <List items={listItems} />
      
    </>
  );
}

export default App
