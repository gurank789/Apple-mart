import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        ◊◊ Monthly pricing is after purchase using EMI with qualifying cards at 14% pa over a 6 month tenure. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions.

Representative example:
Based on purchase of ₹79900. Total amount payable ₹83194 paid over 6 months as 6 monthly payments of ₹13866 at an interest rate of 14% pa. Total interest paid to bank: ₹3294.

◊◊◊ Qualified Purchasers can receive Promotion Savings when they purchase an Eligible Product with Promotion Product at a Qualifying Location. Only one Promotion Product per Eligible Product per Qualified Purchaser. Offer subject to availability. Subject to terms and conditions herein.
The promotional Apple Education Pricing on AppleCare+ is available for eligible products only when the eligible product and AppleCare+ are purchased directly from an Apple Store or concurrently from the online Apple Store for Education during the promotional period and cannot be combined with non-promotional Apple Education Pricing. AppleCare+ attached to eligible products outside of the promotional period is not eligible for this promotional rate.
Apple Education Pricing is available to current and newly accepted university students and their parents, as well as teachers and staff at all levels. Quantity limits apply during the promotional period only and cannot be combined with non-promotional Apple Education Pricing. AppleCare+ attached to eligible products outside of the promotional period is not eligible for this promotional rate.

§ No Cost EMI is available with the purchase of an eligible product made using eligible cards on 3- or 6-month tenures from most leading banks. Minimum order spend applies as per your card issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuing bank. Offer may be revised or withdrawn at any time without any prior notice. Terms & Conditions apply.

Representative example:
Based off a 6 month tenure. ₹79900 total cost includes 15% pa and No Cost EMI savings of ₹3380, paid over 6 months as 6 monthly payments of ₹13317.

§§ Instant savings, otherwise referred to as instant Cashback on the Apple Store Online, is available with the purchase of an eligible product for qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards only. Minimum transaction value of ₹10001 applies. Click here to see instant savings amounts and eligible devices. Instant savings are available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Terms & conditions apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
