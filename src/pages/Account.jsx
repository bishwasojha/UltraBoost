import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import yone from '../Assets/Images/yone.jpg'
import AboutTick from '../Assets/Icons/About/about_tick.svg'
import RightArrow from '../Assets/Icons/About/about_learn-more.svg'

import Navbar from '../components/Navbar'
import Card from '../components/Card.jsx'
import Input from '../components/Input'
import Button from '../components/Button'
//import Card from '../components/Card';

const Account = () => {
  const [boostType, setBoostType] = useState('')
  const [startingRank, setStartingRank] = useState('')
  const [startingDivision, setStartingDivision] = useState('')
  const [desiredRank, setDesiredRank] = useState('')
  const [desiredDivision, setDesiredDivision] = useState('')
  const [queueType, setQueueType] = useState('')
  const [region, setRegion] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  return (
    <>
      <Navbar />
      <div className="account-container">
        <div className="account-detail-left">
          <div className="account-hometitle">
            Get Started
          </div>
          <div className="account-title">
            League of Legends <span>Boosting</span>
          </div>
          <div className="account-description">
            World class League of Legends boosters, we work with the top 0.1% of
            players in the ranked ladders on every region.
          </div>
          <div className="account-guarantee">
            <div className="account-guarantee-1">
              <img src={AboutTick} alt="" />
              <span>Guarantee Letter</span>
            </div>
            <div className="account-guarantee-2">
              <img src={AboutTick} alt="" />
              <span>Special Discount 50%</span>
            </div>
          </div>
          <div className="account-buy-order">
            <div className="choose-game">
              <div className="choose-game-text">1. Choose Your Game</div>
              <div className="choose-game-edit">Edit</div>
            </div>
            <div className="choose-plan">
              <div className="choose-plan-text">2. Choose Your Plan</div>
            </div>
            <div className="order-boost-detail">
              <div className="boost-type">
                <div className="boost-type-input">
                  <Input
                    label="Boost Type"
                    placeholder="Placeholder"
                    type="text"
                    required={true}
                    value={boostType}
                    onChange={e => setBoostType(e.target.value)}
                    error={errors.boostType}
                    className="login-input"
                  />
                </div>
                <div className="starting">
                  <Input
                    label="Starting Rank"
                    placeholder="Placeholder"
                    type="text"
                    required={true}
                    value={startingRank}
                    onChange={e => setStartingRank(e.target.value)}
                    error={errors.startingRank}
                    className="login-input"
                  />
                  <Input
                    label="Starting Division"
                    placeholder="Placeholder"
                    type="text"
                    required={true}
                    value={startingDivision}
                    onChange={e => setStartingDivision(e.target.value)}
                    error={errors.startingDivision}
                    className="login-input"
                  />
                </div>
                <div className="desired">
                  <Input
                    label="Desired Rank"
                    placeholder="Placeholder"
                    type="text"
                    required={true}
                    value={desiredRank}
                    onChange={e => setDesiredRank(e.target.value)}
                    error={errors.desiredRank}
                    className="login-input"
                  />
                  <Input
                    label="Desired Division"
                    placeholder="Placeholder"
                    type="text"
                    required={true}
                    value={desiredDivision}
                    onChange={e => setDesiredDivision(e.target.value)}
                    error={errors.desiredRank}
                    className="login-input"
                  />
                </div>
                <div className="queue-type">
                  <Input
                    label="Queue Type"
                    placeholder="Placeholder"
                    type="text"
                    required={true}
                    value={queueType}
                    onChange={e => setQueueType(e.target.value)}
                    error={errors.queueType}
                    className="login-input"
                  />
                </div>
                <div className="boost-region">
                  <Input
                    label="Region"
                    placeholder="Placeholder"
                    type="text"
                    required={true}
                    value={region}
                    onChange={e => setRegion(e.target.value)}
                    error={errors.region}
                    className="login-input"
                  />
                </div>
                <div className="login-btn">
                  <Button
                    className="login-btn-ub"
                    type="submit"
                    loading={loading}
                    disabled={loading}
                  >
                    Continue
                    <img src={RightArrow} alt="" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="choose-plan">
              <div className="choose-plan-text">3. Add-ons</div>
            </div>
          </div>
        </div>
        <div className="account-detail-right">
          <div className="account-img-card">
          <div className="account-img">
            <img src={yone} alt="" srcSet="" />
          </div>
          <Card />
          </div> 
          <div className="order-summary-card">
            <div className="order-summary">
              <h4>Order Summary</h4>
            </div>
            <div className="order-line"></div>
            <div className="division-boosting">
              <div className="division-text">
                Division Boosting (Iron to Platinum)
              </div>
              <div className="division-cost">$55.00</div>
            </div>
            <div className="order-line"></div>
            <div className="division-boosting">
              <div className="division-text-vpn">Use VPN</div>
              <div className="division-cost">$2.00</div>
            </div>
            <div className="order-line"></div>
            <div className="division-boosting">
              <div className="division-text-vpn">Appear Offline</div>
              <div className="division-cost">$1.00</div>
            </div>
            <div className="order-line"></div>
            <div className="division-boosting">
              <div className="division-text-vpn">Discount Code</div>
              <div className="division-cost">-$2.00</div>
            </div>
            <div className="order-line"></div>
            <div className="division-boosting">
              <div className="division-total-text">Total</div>
              <div className="division-total-cost">$56.00</div>
            </div>
            <div className="order-line"></div>
            <div className="login-btn">
              <Button
                className="pay-btn-ub"
                type="submit"
                loading={loading}
                disabled={loading}
              >
                Pay Using Stripe
              </Button>
            </div>
            <div className="have-question">
              <div className="not-a-user">
                Have a question?
                <Link
                  to="/"
                  className="not-registered-link"
                  style={{ textDecoration: 'none' }}
                >
                  Read FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Account
