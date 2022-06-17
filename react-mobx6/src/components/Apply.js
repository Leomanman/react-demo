import React from 'react';
import AppleItem from './AppleItem';
import { useRootStore } from '../store'
import { observer } from "mobx-react-lite"
const Apple = () => {
  const { appleStore } = useRootStore()
  const { getApple,isPicking,buttonMsg,totalWeight,totalEaten,eatenList,noEatenList,changeEaten } = appleStore
  
  const showApple = () => {
    if(!noEatenList.length) return <div>苹果篮子空空如也</div>
    return (
      noEatenList.map(item => <AppleItem key={item.id} item={item} changeEaten={changeEaten}/>)
    )
  }

  return (
    <div className="appleBusket">
      <div className="title">苹果篮子</div>

      <div className="stats">
        <div className="section">
          <div className="head">当前</div>
          <div className="content">
            {noEatenList.length}个苹果，{totalWeight}克
          </div>
        </div>
        <div className="section">
          <div className="head">已吃掉</div>
          <div className="content">
            {eatenList.length}个苹果，{totalEaten}克
          </div>
        </div>
      </div>

      <div className="appleList">
      {
        showApple()
      }
        
      </div>
      {/* className={isPicking ? 'disabled' : ''} */}
      <div className="btn-div">
        <button className={isPicking ? 'disabled' : ''} onClick={() => {getApple() }} >{buttonMsg}</button>
      </div>
    </div>
  );
}

export default observer(Apple) ;