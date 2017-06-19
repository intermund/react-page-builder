import React, { Component } from 'react'
import './Page.scss'

class Page extends Component {

	state = {
		pageName: this.props.page,
	}

	render() {

		const { pageName } = this.state

		return (
			<div className={`page ${pageName} `}>

				<section className={`section top-section `}>
					<div className="wrapper">

						<div className={``}>
							Choose your plan to start
						</div>

						<div className={``}>

							<button className={`button`}>
								GEOSURF <br/> STATIC <br/> PROXY
							</button>

							<button className={`button`}>
								GEOSURF <br/> RESIDENTIAL <br/> PROXY
							</button>
						</div>

					</div>
				</section>

				<section className={`section plans-section`}>
					<div className="wrapper">

						Plans

					</div>
				</section>

			</div>
		)
	}
}

export default Page