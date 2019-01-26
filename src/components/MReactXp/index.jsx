import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

class MReactXp extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {}

    //     this.handleChange =
    // }

    render() {
        return (
            <div className="container">
                Modern React Xp
                <br />

                <button
                    type="button"
                    onClick={() => this.props.history.push('/app/modern-react-xp/components')}
                >
                    Components
                </button>
            </div>
        )
    }
}

MReactXp.propTypes = {
    history: PropTypes.object.isRequired,
}

export default withStyles(() => ({}))(MReactXp)
