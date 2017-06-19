import './styles/index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import Page from './containers/Page'

const App = props => <Page page="pricing"/>

ReactDOM.render(<App/>, document.getElementById('react'))
if (module.hot) module.hot.accept()