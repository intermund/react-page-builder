import './styles/index.less'
import React from 'react'
import ReactDOM from 'react-dom'
import Page from './containers/Page'

const App = props => {

	return(
		<div className={`page`}>

			<Page/>

		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById('react'))
if (module.hot) module.hot.accept()