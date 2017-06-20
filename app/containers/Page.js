import './Page.scss'
import React, { Component } from 'react'
import StaticPlans from '../components/StaticPlans'
import ResidentialPlans from '../components/ResidentialPlans'

class Page extends Component {

	constructor(props) {
		super(props)

		this.state = {
			plansToShow: 'res',
			pageData: window.PAGE_DATA
		}
	}

	setActivePlan = (plan) => {

		this.setState({
			plansToShow: plan
		})
	}

	renderPlans = () => {
		return this.state.plansToShow === 'res' ?
			<ResidentialPlans />
			:
			<StaticPlans />
	}

	render() {

		const { page } = this.props
		const { plansToShow, pageData } = this.state

		return (
			<div className={`page page-${page} `}>

				<section className={`section section-top`}>
					<div className="wrapper">

						<div className={`heading av-special-heading-tag`}>
							{ pageData.title }
						</div>

						<div className={`button-group`}>

							<button className={`button ${plansToShow === 'static' ? 'active' : ''}`}
									onClick={ () => this.setActivePlan('static')}>
								GEOSURF <br/> STATIC
							</button>

							<button className={`button ${plansToShow === 'res' ? 'active' : ''}`}
									onClick={ () => this.setActivePlan('res')}>
								GEOSURF <br/> RESIDENTIAL
							</button>
						</div>

					</div>
				</section>

				<section className={`section section-plans`}>
					<div className="wrapper">

						{ this.renderPlans() }

					</div>
				</section>

				<section className="section section-info">
					<div className="wrapper">

						<div className="contact-info">
							<p>Can’t find what you are looking for? Let us know about your special requirement and one
								of
								our gateway professionals will contact you shortly!</p>
							<a href="http://geosurf.com/contact/" className={`contact-us`}>Contact</a>
						</div>


					</div>
				</section>

			</div>
		)
	}
}

export default Page