import { observer } from 'mobx-react-lite'
import { useRootStore } from '../store'
const Counter = () => {
  const { countStore } = useRootStore()
  const {count, increment, decrement} = countStore
  return (
    <div>
      <button onClick={() => increment() } type='button'>+ 1</button>
      <p>{count}</p>
      <button onClick={() => decrement()} type='button'>- 1</button>
    </div>
  )
}

export default observer(Counter)