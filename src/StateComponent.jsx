import React from 'react'

export default class StateComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      count: 1,
      flag: false
    }
  }
  increment () {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  changeFlag = () => {
    this.setState({
      flag: !this.state.flag
    })
  }
  render () {
    return (
      <div>
        <h3>state component</h3>
        <div>{ this.state.count }</div>
        <button onClick={this.increment.bind(this)}>增加</button>
        <button onClick={this.decrement}>减少</button>
        <h3>{ this.state.flag ? '我是孙悟空' : '我不是孙悟空' }</h3>
        <button onClick={this.changeFlag}>改变</button>
      </div>
    )
  }
}