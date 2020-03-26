import React, { Component } from 'react'

export default class My extends Component {
    render() {
        return (
            <div>
                老子最牛逼，{this.props.name}
            </div>
        )
    }
}
