import React from 'react'

const purchaseLinks = {
	starter: 'https://www.2checkout.com/checkout/purchase?sid=1350420&quantity=1&product_id=659',
	pro: 'https://www.2checkout.com/checkout/purchase?sid=1350420&quantity=1&product_id=660',
	plus: 'https://www.2checkout.com/checkout/purchase?sid=1350420&quantity=1&product_id=661',
	enterprise: 'http://geosurf.com/contact'
}

export default props => {

	const openModal = link => {
		window.open(link, '_blank', 'width=800,height=700,left=400,top=100')
	}

	return (
		<div className="plans-wrapper plans-residential">

			<div className="plan">

				<div className="plan-name">Starter</div>
				<div className="plan-users">Unlimited connections</div>
				<div className="plan-limit">20GB/month</div>
				<div className="plan-perks">Residential IPs in 192 Countries</div>
				<div className="plan-perks">Over 2 Million IPs</div>
				<div className="plan-perks">Email support</div>
				<div className="plan-perks">15$ per additional GB</div>

				<button className="buy-btn" onClick={ () => { openModal(purchaseLinks.starter) } }>300$/month</button>

			</div>


			<div className="plan">

				<div className="plan-name">Professional</div>
				<div className="plan-users">Unlimited connections</div>
				<div className="plan-limit">75GB/month</div>
				<div className="plan-perks">10$ per additional GB</div>
				<div className="plan-perks">Over 2 Million IPs</div>
				<div className="plan-perks">Email support</div>
				<div className="plan-perks">Residential IPs in 192 Countries</div>

				<button className="buy-btn" onClick={ () => { openModal(purchaseLinks.pro) } }>500$/month</button>

			</div>


			<div className="plan favorite">

				<div className="plan-name">Plus</div>
				<div className="plan-users">Unlimited connections</div>
				<div className="plan-limit">250GB/month</div>
				<div className="plan-perks">8$ per additional GB</div>
				<div className="plan-perks">Over 2 Million IPs</div>
				<div className="plan-perks">Dedicated support</div>
				<div className="plan-perks">Residential IPs in 192 Countries</div>

				<button className="buy-btn" onClick={ () => { openModal(purchaseLinks.plus) } }>2000$/month</button>

			</div>


			<div className="plan">

				<div className="plan-name">Enterprise</div>
				<div className="plan-users">Unlimited connections</div>
				<div className="plan-limit">Over 2TB/month</div>
				<div className="plan-perks">Option for a dedicated pool of IPs</div>
				<div className="plan-perks">Over 2 Million IPs</div>
				<div className="plan-perks">Dedicated support</div>
				<div className="plan-perks">Residential IPs in 192 Countries</div>

				<button className="buy-btn" onClick={ () => { openModal(purchaseLinks.enterprise) } }>Contact us</button>

			</div>



		</div>
	)
}