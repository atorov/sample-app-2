import React from 'react'

import IdeaSvg from '../../../assets/img/idea.svg'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <span>
                    Here we have an image ...
                </span>
                <br />

                <img src={IdeaSvg} alt="" />
            </div>
        )
    }
}
