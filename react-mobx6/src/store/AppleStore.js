import { action, computed, flow, makeObservable, observable } from 'mobx'
import axios from 'axios'
import apple from './Apple'
export default class AppleStore {
  constructor() {
    this.list = []
    this.isPicking = false
    this.buttonMsg = '摘苹果'
    makeObservable(this, {
      list: observable,
      isPicking: observable,
      buttonMsg: observable,
      getApple: action.bound,
      changeEaten: action.bound,
      totalWeight: computed,
      totalEaten: computed,
      eatenList: computed,
      noEatenList: computed,
      loadApple: flow
    })
    this.loadApple()
  }

  *loadApple() {
    const { data } = yield axios.get('http://localhost:3002/data')
    data.forEach(el => {
        this.list.push(new apple(el))
    });
  }
  getApple(params) {
    this.isPicking = true
    this.buttonMsg = '正在采集。。。'
    setTimeout(() => {
      this.list.push(new apple({
        id: this._getId(),
        weight: Math.floor(Math.random() * (100 - 1)) + 1,
        isEaten: false
      }))
      this.isPicking = false
      this.buttonMsg = '摘苹果'
    }, 1000);

  }

  _getId() {
    if (this.list.length < 1) return 1
    return this.list[this.list.length - 1].id + 1
  }
  get totalWeight() {
    const eaten = this.list.filter(item => !item.isEaten)
    return eaten.reduce((prev,curren) => {
      return prev + curren.weight
    },0)
  }
  get totalEaten() {
    const eaten = this.list.filter(item => item.isEaten)
    return eaten.reduce((prev,curren) => {
      return prev + curren.weight
    },0)
  }

  get eatenList() {
    return this.list.filter(item => item.isEaten)
  }
  
  get noEatenList() {
    return this.list.filter(item => !item.isEaten)
  }

  changeEaten(id) {
   
    const apple = this.list.filter(item => item.id === id)
   
    apple.isEaten = true
    console.log(apple.isEaten)
  }

}