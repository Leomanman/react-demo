/**
 * 自己实现相关Hooks
 * useState()
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App'

// state 的集合
let state = [];
// 修改state的方法的集合
let setters = []
// 默认下标
let stateIndex = 0


// 使用闭包保存修改方法的下标值
function createSetter(index) {
  return function (newState) {
    state[index] = newState;
    render();
  }
}

export function useState(initialState) {
  state[stateIndex] = state[stateIndex] || initialState
  setters.push(createSetter(stateIndex));
  let value = state[stateIndex];
  let setter = setters[stateIndex];
  // 下标增加
  stateIndex++
  return [
    value,
    setter
  ]
}
// 重新渲染组件
function render() {
  stateIndex = 0
  effectIndex = 0
  ReactDOM.render(<App />, document.getElementById('root'));
}

// [[mgs],[count]]
let prevDepsAry = [];
let effectIndex = 0;

export function useEffect(callback, depsAry) {
  // 判断callback是不是函数
  if (Object.prototype.toString.call(callback) !== '[object Function]') throw new Error('useEffect函数的第一个参数必须是函数');
  // 判断depsAry有没有被传递
  if (typeof depsAry === 'undefined') {
    // 没有传递
    callback();
  } else {
    // 判断depsAry是不是数组
    if (Object.prototype.toString.call(depsAry) !== '[object Array]') throw new Error('useEffect函数的第二个参数必须是数组');
    // 获取上一次的状态值
    let prevDeps = prevDepsAry[effectIndex];
    // 将当前的依赖值和上一次的依赖值做对比 如果有变化 调用callback
    let hasChanged = prevDeps ? depsAry.every((dep, index) => dep === prevDeps[index]) === false : true;
    // 判断值是否有变化
    if (hasChanged) {
      callback();
    }
    // 同步依赖值
    prevDepsAry[effectIndex] = depsAry;
    effectIndex++;
  }
}


export function useReducer (reducer, initialState) {
  const [state, setState] = useState(initialState);
  function dispatch (action) {
    // 调用 reducer 返回新值
    const newState = reducer(state, action);
    setState(newState);
  }
  return [state, dispatch];
}
