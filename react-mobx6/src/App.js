
import Counter from './components/Counter'
// import CounterStore from "./store/Counter"
// const countStore = new CounterStore()

import { RootStoreProvider } from './store';
function App() {

  return (
    <RootStoreProvider>
      <Counter />
    </RootStoreProvider>
    
  );
}

export default App;
