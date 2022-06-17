import { createContext, useContext } from 'react';
import Counter from './Counter';

class RootStore {
  constructor() {
    this.countStore = new Counter()
  }
}

const rootStore = new RootStore()

const RootStoreContext = createContext()

export const RootStoreProvider = ({children}) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  )
}

export const useRootStore = () => {
  return useContext(RootStoreContext)
}