import { observer } from "mobx-react-lite"
const AppleItem = ({ item }) => {
  const { changeIsEaten } = item
  return (
    <div className="appleItem">
      <div className="apple">
        <img src={require('../images/apple.png')} alt="" />
      </div>
      <div className="info">
        <div className="name">红苹果 - {item.id}号</div>
        <div className="weight">{item.weight} 克</div>
      </div>
      <div className="btn-div">
        <button onClick={() => changeIsEaten()}> 吃掉 </button>
      </div>
    </div>

  )
}

export default observer(AppleItem)
