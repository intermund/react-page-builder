import React from 'react'

const purchaseLinks = {
	gold: 'http://geosurf.com/pricing/signup/gold/',
	platinum: 'http://geosurf.com/pricing/signup/platinum/',
	diamond: 'http://geosurf.com/pricing/signup/diamond/',
	enterprise: 'http://geosurf.com/contact'
}

export default props => {

	const openModal = link => {
		window.open(link, '_self')
	}


	return (

		<div className="plans-wrapper plans-static">

			<div className="plan">

				<div className="plan-name">Gold</div>
				<div className="plan-users">1 User</div>
				<div className="plan-limit">500MB</div>
				<div className="plan-perks">Geosurf Toolbar</div>
				<div className="plan-locations">5 Premium Proxy Locations</div>

				<button className="buy-btn" onClick={ () => { openModal(purchaseLinks.gold) } }>89$/month</button>

			</div>

			<div className="plan">

				<div className="plan-name">Platinum</div>
				<div className="plan-users">2 Users</div>
				<div className="plan-limit">700MB</div>
				<div className="plan-perks">Geosurf Toolbar</div>
				<div className="plan-locations">9 Premium Proxy Locations</div>


				<button className="buy-btn" onClick={ () => { openModal(purchaseLinks.platinum) } }>139$/month</button>

			</div>

			<div className="plan favorite">

				<div className="plan-name">Diamond</div>
				<div className="plan-users">2 Users</div>
				<div className="plan-limit">1GB</div>
				<div className="plan-perks">Geosurf Toolbar</div>
				<div className="plan-locations">12 Premium Proxy Locations</div>

				<button className="buy-btn" onClick={ () => { openModal(purchaseLinks.diamond) } }>199$/month</button>

			</div>

			<div className="plan">

				<div className="plan-name">Enterprise</div>
				<div className="plan-users">Customized number of users</div>
				<div className="plan-limit">Customized usage volume</div>
				<div className="plan-perks">Geosurf Toolbar, AdClarity, Desktop VPN, Mobile VPN, Direct</div>
				<div className="plan-locations">120+ Premium Proxy Locations</div>
				<div className="plan-perks">Dedicated Account Manager</div>
				<div className="plan-perks">Media Insights Reports</div>

				<button className="buy-btn" onClick={ () => { openModal(purchaseLinks.enterprise) } }>Contact us</button>

			</div>

		</div>
	)
}