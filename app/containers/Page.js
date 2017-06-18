import React, { Component } from 'react'
import { style } from 'typestyle'

const pageStyle = style({
	backgroundColor: 'lightgreen'
})

class Page extends Component {

	render() {

		return (
			<div className={`page ${this.props.page} ${pageStyle}`}>
				PAGE
			</div>
		)
	}
}

export default Page