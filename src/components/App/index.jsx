import React from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import CssBaseline from '@material-ui/core/CssBaseline'

import actionCreators from '../../redux/action-creators'

// import AppHeader from './Header'
// import AppFooter from './Footer'
import Routes from './Routes'

import './style.less'

class App extends React.Component {
    // Constructor -------------------------------------------------------------
    constructor(props) {
        super(props)

        this.timerOnResize = null
        this.timerRefAppRoot = null

        this.onResize = () => {
            clearTimeout(this.timerOnResize)
            this.timerOnResize = setTimeout(() => this._onResize(), 550)
        }

        this.refAppRoot = () => (el) => {
            clearTimeout(this.timerRefAppRoot)
            this.timerRefAppRoot = setTimeout(() => this._refAppRoot(el), 650)
        }
    }

    // LC methods --------------------------------------------------------------
    componentDidMount() {
        window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    // Event handlers ----------------------------------------------------------
    _onResize() {
        this.forceUpdate()
    }

    // Refs --------------------------------------------------------------------
    _refAppRoot(el) {
        if (el && this.props.ui.appWidth !== el.clientWidth) {
            this.props.ui_SetAppWidth({ appWidth: el.clientWidth })
        }
    }

    // Main render -------------------------------------------------------------
    render() {
        // console.log('::: App.props', this.props)
        // console.log('::: App.state', this.state)

        return (
            <div
                id="app-root"
                ref={this.refAppRoot()}
            >
                <CssBaseline />

                {/* <AppHeader /> */}

                <BrowserRouter>
                    <Routes />
                </BrowserRouter>

                {/* <AppFooter /> */}
            </div>
        )
    }
}

// Statics ---------------------------------------------------------------------
App.propTypes = {
    ui: PropTypes.object.isRequired,

    ui_SetAppWidth: PropTypes.func.isRequired,
}

// Export ----------------------------------------------------------------------
const mapStateToProps = (state, ownProps) => ({
    ...state,
    ...ownProps,
})
const mapDispatchToProps = dispatch => bindActionCreators(
    { ...actionCreators },
    dispatch,
)

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(App)
export default module.hot ? hot(module)(connectedComponent) : connectedComponent

// export default module.hot ? hot(module)(App) : App
