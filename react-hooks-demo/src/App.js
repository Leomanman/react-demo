// import UseStateDemo from './views/UseStateDemo.js'
// import UseReducerDemo from './views/UseReducerDemo.js'
// import UseContextDemo from './views/UseContextDemo'
// import UseeffectDemo from './views/UseeffectDemo.js';
// import UseEffectAsyncDemo from './views/UseEffectAsyncDemo.js';
// import UseMemoDemo from './views/UseMemoDemo.js'
// import MemoDemo from './views/MemoDemo.js';
// import UseCallback from './views/UseCallback.js';
// import UseRefDemo from './views/UseRefDemo.js';
// import CustomHookDemo from './views/CustomHookDemo.js'
// import { useState } from 'react';
import Demo from './views/demo';
function App() {
  // const [isShow, setIsShow] = useState(true)
  return (
    <div className="App">
      {/* <UseStateDemo /> 
      <UseReducerDemo />
      <UseContextDemo />
      {
        isShow ?
        <UseeffectDemo /> :
        null
      }
      <button onClick={() => setIsShow(!isShow)}>{
        isShow ? '隐藏' : '显示'
      }</button>
      <UseEffectAsyncDemo />
      <UseMemoDemo />
      <MemoDemo />
      <UseCallback />
      <UseRefDemo />
      <CustomHookDemo /> */}
      <Demo />
    </div>
  );
}

export default App;
