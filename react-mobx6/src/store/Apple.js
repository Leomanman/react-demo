import { action, makeObservable, observable } from 'mobx'
export default class Apple {
  constructor(props) {
    this.id = props.id
    this.weight = props.weight
    this.isEaten = props.isEaten
    makeObservable(this, {
      id: observable,
      weight: observable,
      isEaten: observable,
      changeIsEaten: action.bound
    })
  }
  changeIsEaten() {
    this.isEaten = !this.isEaten
  }

}