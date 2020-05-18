import React from 'react'

export default class MyNav extends React.Component {
  render () {
    return (
      <div>
        <h3>{ this.props.title }</h3>
        {
          this.props.nav.map((item, index) => {
            return (
            <div key={index}>{ item }</div>
            )
          })
        }
      </div>
    )
  }
}