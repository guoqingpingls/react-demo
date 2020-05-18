import React from 'react'
// import MyNav from './myNav'
import StateComponent from './StateComponent'

class App extends React.Component {
  // render () {
  //   const nav1 = ['菜单', '首页', '侧边栏']
  //   const nav2 = ['web', 'java', 'node']
  //   return (
  //     <div>
  //       <h1>hello react component</h1>
  //       <h4>a demo for component</h4>
  //       <MyNav nav={nav1} title='路径导航' />
  //       <MyNav nav={nav2} title='学习导航' />
  //     </div>
  //   )
  // }
  render () {
    return (
      <div>
        <StateComponent />
      </div>
    )
  }
}
export default App