
import Counter from './components/Counter'
import Apple from './components/Apply';
// import CounterStore from "./store/Counter"
// const countStore = new CounterStore()

import { RootStoreProvider } from './store';
function App() {

  return (
    <RootStoreProvider>
      {/* <Counter /> */}
      <Apple />
    </RootStoreProvider>
    
  );
}

export default App;
