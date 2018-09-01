import React from 'react'
import ReactDOM from 'react-dom'

import IdeaSvg from '../../assets/img/idea.svg'

import './style.less'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <img src={IdeaSvg} />
            </div>
        )
    }
}
