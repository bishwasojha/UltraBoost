import React, { useState, useCallback, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import yone from '../Assets/Images/yone.jpg'
import AboutTick from '../Assets/Icons/About/about_tick.svg'
import RightArrow from '../Assets/Icons/About/about_learn-more.svg'

import Navbar from '../components/Navbar'
import Card from '../components/Card.jsx'
import Button from '../components/Button'
import ReactDropdown from '../components/ReactDropdown'
import Checkbox from '../components/Checkbox'
import OrderedItem from '../components/OrderedItem'

// importing json files
const boosttype = require('../Assets/json/boost-type.json')
const ranks = require('../Assets/json/ranks.json')
const regionType = require('../Assets/json/region.json')
const matchPlay = require('../Assets/json/matchesplayed.json')
const checkboxItems = require('../Assets/json/checkbox.json')
const division = require('../Assets/json/Division.json')

const useQuery = () => {
  const location = useLocation()
  return new URLSearchParams(location.search)
}

const Account = () => {
  const query = useQuery()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const [selectedBoostOption, setSelectedBoostOption] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  const [selectedQueueType, setSelectedQueueType] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')
  const [selectedMatchesToBePlayed, setSelectedMatchesToBePlayed] =
    useState(null)

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([])

  const [startingRank, setStartingRank] = useState('')
  const [startingDivision, setStartingDivision] = useState('')
  const [desiredRank, setDesiredRank] = useState('')
  const [desiredDivision, setDesiredDivision] = useState('')

  const [options, setOptions] = useState(
    checkboxItems.map(item => ({
      label: item.text,
      value: item.value,
      checked: false,
    }))
  )
  //const [filteredOptions, setFilteredOptions] = useState(options)

  const handleCheckboxChange = useCallback(
    (isChecked, value, label) => {
      if (isChecked) {
        setSelectedCheckboxes(prevSelectedCheckboxes => [
          ...prevSelectedCheckboxes,
          { value, label },
        ])
      } else {
        setSelectedCheckboxes(prevSelectedCheckboxes =>
          prevSelectedCheckboxes.filter(
            selectedCheckbox => selectedCheckbox.value !== value
          )
        )
      }
    },
    [setSelectedCheckboxes]
  )

  const handleBoostTypeSelect = boostTypeCheck => {
    query.delete('Division')
    query.delete('Placements')
    query.delete('Duo Games')
    query.delete('Normal Wins')
    query.delete('Leveling')
    query.delete('Masteries')
    if (boostTypeCheck) {
      const boostType = boostTypeCheck.value
      query.set('boostType', boostType)
    } else {
      query.delete('boostType')
    }
    navigate(`/account?${query.toString()}`, { replace: true })
    setSelectedBoostOption(query.get('boostType'))
    console.log(`value of ${query.get('boostType')} :`, selectedBoostOption)
  }

  const handleStartingRankChange = ranks => {
    const s_rank = ranks.value
    query.set('startingRank', s_rank)
    navigate(`/account?${query.toString()}`, { replace: true })
    setStartingRank(query.get('startingRank'))
    console.log(`value of ${query.get('startingRank')} :`, startingRank)
  }

  const handleStartingDivisionChange = division => {
    const s_division = division.value
    query.set('startingDivision', s_division)
    navigate(`/account?${query.toString()}`, { replace: true })

    setStartingDivision(query.get('startingDivision'))
    console.log(`value of ${query.get('startingDivision')} :`, startingDivision)
  }

  const handleDesiredRankChange = ranks => {
    const d_rank = ranks.value
    query.set('desiredRank', d_rank)
    navigate(`/account?${query.toString()}`, { replace: true })
    setDesiredRank(query.get('desiredRank'))
    console.log(`value of ${query.get('desiredRank')} :`, desiredRank)
  }

  const handleDesiredDivisionChange = division => {
    const d_division = division.value
    query.set('desiredDivision', d_division)
    navigate(`/account?${query.toString()}`, { replace: true })
    setDesiredDivision(query.get('desiredDivision'))
    console.log(`value of ${query.get('desiredDecision')} :`, desiredDivision)
  }

  const handleSelect = option => {
    setSelectedOption(option)
  }
  const handleQueueType = option => {
    setSelectedQueueType(option)
  }

  const handleRegionSelect = option => {
    setSelectedRegion(option)
  }

  const handleSelectedMatchesToBePlayed = option => {
    setSelectedMatchesToBePlayed(option)
  }

  const renderBoostType = boostTypeCheck => {
    switch (boostTypeCheck) {
      case 'Division':
        return (
          <div>
            <div className="starting">
              <ReactDropdown
                label="Starting Rank"
                options={Object.values(ranks)}
                value={query.get('startingRank')}
                onChange={handleStartingRankChange}
                className="dropdown-input"
                placeholder={startingRank}
              />
              <ReactDropdown
                label="Starting Division"
                options={Object.values(division)}
                value={
                  query.get('startingDivision') &&
                  parseInt(query.get('startingDivision'))
                }
                onChange={handleStartingDivisionChange}
                className="dropdown-input"
                placeholder={startingDivision}
              />
            </div>
            <div className="desired">
              <ReactDropdown
                label="Desired Rank"
                options={Object.values(ranks)}
                value={query.get('desiredRank')}
                onChange={handleDesiredRankChange}
                className="dropdown-input"
                placeholder={desiredRank}
              />
              <ReactDropdown
                label="Desired Division"
                options={Object.values(division)}
                value={
                  query.get('desiredDivision') &&
                  parseInt(query.get('desiredDivision'))
                }
                onChange={handleDesiredDivisionChange}
                className="dropdown-input"
                placeholder={desiredDivision}
              />
            </div>
            <div className="queue-type">
              <ReactDropdown
                label="Queue Type"
                options={[
                  { key: 'Solo', text: 'Solo', value: 'Solo' },
                  { key: 'Duo', text: 'Duo', value: 'Duo' },
                  { key: 'Flexible', text: 'Flexible', value: 'Flexible' },
                ]}
                value={selectedQueueType}
                onChange={handleQueueType}
                className="dropdown-input"
              />
            </div>
            <div className="boost-region">
              <ReactDropdown
                label="Region"
                options={Object.values(regionType)}
                value={selectedRegion}
                onChange={handleRegionSelect}
                className="dropdown-input"
              />
            </div>
          </div>
        )
      case 'Placements':
        return (
          <div>
            <div className="starting">
              <ReactDropdown
                label="Starting Rank"
                options={ranks}
                value={startingRank}
                onChange={(e, { value }) => {
                  handleSelect(value)
                }}
                className="dropdown-input"
                placeholder="Starting Rank"
              />
              <ReactDropdown
                label="Starting Division"
                options={division}
                value={selectedOption}
                onChange={handleSelect}
                className="dropdown-input"
              />
            </div>
            <div className="queue-type">
              <ReactDropdown
                label="Queue Type"
                options={[
                  { key: 'Solo', text: 'Solo', value: 'Solo' },
                  { key: 'Duo', text: 'Duo', value: 'Duo' },
                  { key: 'Flexible', text: 'Flexible', value: 'Flexible' },
                ]}
                value={selectedQueueType}
                onChange={handleQueueType}
                className="dropdown-input"
              />
            </div>
            <div className="boost-region">
              <ReactDropdown
                label="Region"
                options={Object.values(regionType)}
                value={selectedRegion}
                onChange={handleRegionSelect}
                className="dropdown-input"
              />
            </div>
            <div className="matches-played">
              <ReactDropdown
                label="Desired Matches"
                options={Object.values(matchPlay)}
                value={selectedMatchesToBePlayed}
                onChange={handleSelectedMatchesToBePlayed}
                className="dropdown-input"
              />
            </div>
          </div>
        )
      case 'Duo Games':
        return (
          <div>
            <div className="starting">
              <ReactDropdown
                label="Starting Rank"
                options={Object.values(ranks)}
                value={selectedOption}
                onChange={handleSelect}
                className="dropdown-input"
                placeholder="Starting Rank"
              />
              <ReactDropdown
                label="Starting Division"
                options={Object.values(division)}
                value={selectedOption}
                onChange={handleSelect}
                className="dropdown-input"
              />
            </div>
            <div className="queue-type">
              <ReactDropdown
                label="Queue Type"
                options={[
                  { key: 'Solo', text: 'Solo', value: 'Solo' },
                  { key: 'Duo', text: 'Duo', value: 'Duo' },
                  { key: 'Flexible', text: 'Flexible', value: 'Flexible' },
                ]}
                value={selectedQueueType}
                onChange={handleQueueType}
                className="dropdown-input"
              />
            </div>
            <div className="boost-region">
              <ReactDropdown
                label="Region"
                options={Object.values(regionType)}
                value={selectedRegion}
                onChange={handleRegionSelect}
                className="dropdown-input"
              />
            </div>
            <div className="matches-played">
              <ReactDropdown
                label="Desired Matches"
                options={Object.values(matchPlay)}
                value={selectedMatchesToBePlayed}
                onChange={handleSelectedMatchesToBePlayed}
                className="dropdown-input"
              />
            </div>
          </div>
        )
      case 'Normal Wins':
        return (
          <div>
            <div className="queue-type">
              <ReactDropdown
                label="Queue Type"
                options={[{ key: 'Draft', text: 'Draft', value: 'Draft' }]}
                value={selectedQueueType}
                onChange={handleQueueType}
                className="dropdown-input"
              />
            </div>
            <div className="boost-region">
              <ReactDropdown
                label="Region"
                options={Object.values(regionType)}
                value={selectedRegion}
                onChange={handleRegionSelect}
                className="dropdown-input"
              />
            </div>
            <div className="matches-played">
              <ReactDropdown
                label="Desired Matches"
                options={Object.values(matchPlay)}
                value={selectedMatchesToBePlayed}
                onChange={handleSelectedMatchesToBePlayed}
                className="dropdown-input"
              />
            </div>
          </div>
        )
      case 'Leveling':
        return (
          <div>
            <div className="starting">
              <ReactDropdown
                label="Starting Rank"
                options={Object.values(ranks)}
                value={selectedOption}
                onChange={handleSelect}
                className="dropdown-input"
                placeholder="Starting Rank"
              />
              <ReactDropdown
                label="Starting Division"
                options={Object.values(division)}
                value={selectedOption}
                onChange={handleSelect}
                className="dropdown-input"
              />
            </div>
            <div className="desired">
              <ReactDropdown
                label="Desired Rank"
                options={Object.values(ranks)}
                value={selectedOption}
                onChange={handleSelect}
                className="dropdown-input"
              />
              <ReactDropdown
                label="Desired Division"
                options={Object.values(division)}
                value={selectedOption}
                onChange={handleSelect}
                className="dropdown-input"
              />
            </div>
            <div className="queue-type">
              <ReactDropdown
                label="Queue Type"
                options={[
                  { key: 'Solo', text: 'Solo', value: 'Solo' },
                  { key: 'Duo', text: 'Duo', value: 'Duo' },
                  { key: 'Flexible', text: 'Flexible', value: 'Flexible' },
                ]}
                value={selectedQueueType}
                onChange={handleQueueType}
                className="dropdown-input"
              />
            </div>
            <div className="boost-region">
              <ReactDropdown
                label="Region"
                options={Object.values(regionType)}
                value={selectedRegion}
                onChange={handleRegionSelect}
                className="dropdown-input"
              />
            </div>
          </div>
        )
      case 'Masteries':
        return (
          <div>
            <div className="starting">
              <ReactDropdown
                label="Starting Rank"
                options={Object.values(ranks)}
                value={selectedOption}
                onChange={handleSelect}
                className="dropdown-input"
                placeholder="Starting Rank"
              />
              <ReactDropdown
                label="Starting Division"
                options={Object.values(division)}
                value={selectedOption}
                onChange={handleSelect}
                className="dropdown-input"
              />
            </div>
            <div className="desired">
              <ReactDropdown
                label="Desired Rank"
                options={Object.values(ranks)}
                value={selectedOption}
                onChange={handleSelect}
                className="dropdown-input"
              />
              <ReactDropdown
                label="Desired Division"
                options={Object.values(division)}
                value={selectedOption}
                onChange={handleSelect}
                className="dropdown-input"
              />
            </div>
            <div className="queue-type">
              <ReactDropdown
                label="Queue Type"
                options={[
                  { key: 'Solo', text: 'Solo', value: 'Solo' },
                  { key: 'Duo', text: 'Duo', value: 'Duo' },
                  { key: 'Flexible', text: 'Flexible', value: 'Flexible' },
                ]}
                value={selectedQueueType}
                onChange={handleQueueType}
                className="dropdown-input"
              />
            </div>
            <div className="boost-region">
              <ReactDropdown
                label="Region"
                options={Object.values(regionType)}
                value={selectedRegion}
                onChange={handleRegionSelect}
                className="dropdown-input"
              />
            </div>
          </div>
        )
    }
  }

  // useEffect(()=> {
  //   function findStartingRank(ranks) {
  //     const startrank = ranks.ranks;
  //     Object.keys(startrank).forEach((eachranks)=>{
  //         let eachSubRank = startrank[eachranks];
  //         setStartingRank(eachSubRank['text'])
  //     })
  //     }

  //     findStartingRank(ranks);
  //     //console.log('asdf', startingRank);
  //   console.log('ranks1', (Object.keys(Object.keys(ranks.ranks))));
  //  //  console.log('ranks', Object.values(Object.values(Object.values(ranks.ranks))));
  // })
  return (
    <>
      <Navbar />
      <div className="account-container">
        <div className="account-detail-left">
          <div className="account-hometitle">Get Started</div>
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
            <div className="choose-plan">
              <div className="choose-plan-text">1. Choose Your Plan</div>
            </div>
            <div className="order-boost-detail">
              <div className="boost-type">
                <div className="boost-type-input">
                  {/* <Input
                    label="Boost Type"
                    placeholder="Placeholder"
                    type="text"
                    required={true}
                    value={boostType}
                    onChange={e => setBoostType(e.target.value)}
                    error={errors.boostType}
                    className="login-input"
                  /> */}
                  <ReactDropdown
                    label="Boost Type"
                    options={boosttype}
                    placeholder="Boost Type"
                    value={query.get('boostType')}
                    onChange={handleBoostTypeSelect}
                    className="dropdown-input"
                  />
                </div>
                {renderBoostType(query.get('boostType'))}
                <div className="account-continue-btn">
                  <Button
                    className="login-btn-ub"
                    type="submit"
                    loading={loading}
                    disabled={loading}
                    color="blue"
                  >
                    Continue
                    <img src={RightArrow} alt="" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="choose-plan">
              <div className="choose-plan-text">2. Add-ons</div>
            </div>
            <div className="order-boost-detail">
              <div className="choose-plan-checkbox">
                {options.map(option => (
                  <Checkbox
                    key={option.value}
                    value={option.value}
                    isChecked={selectedCheckboxes.some(
                      selectedCheckbox =>
                        selectedCheckbox.value === option.value
                    )}
                    label={option.label}
                    onChange={isChecked =>
                      handleCheckboxChange(
                        isChecked,
                        option.value,
                        option.label
                      )
                    }
                  />
                ))}
              </div>
              <div className="account-continue-btn">
                <Button
                  className="login-btn-ub"
                  type="submit"
                  loading={loading}
                  disabled={loading}
                  color="blue"
                >
                  Continue
                  <img src={RightArrow} alt="" />
                </Button>
              </div>
            </div>
            <div className="choose-plan">
              <div className="choose-plan-text">3. Promotion</div>
            </div>
            <div className="order-boost-detail">
              <div className="promotion-box"></div>
            </div>
          </div>
        </div>
        <div className="account-detail-right">
          <div className="account-img-card">
            <div className="account-img">
              <img src={yone} alt="yone smurf" />
            </div>
            <Card />
          </div>
          <div className="order-summary-card">
            <div className="order-summary">
              <h4>Order Summary</h4>
            </div>
            <div className="order-line"></div>
            {selectedBoostOption &&
            query.get(
              `${'startingRank'} && ${'startingDecision'} && ${'desiredRank'} && ${'desiredDecision'}`
            ) === ' ' ? (
              <p style={{ padding: '1rem' }}>No options selected</p>
            ) : (
              <OrderedItem
                title={`${selectedBoostOption} Boosting ${startingRank} ${startingDivision} to ${desiredRank} ${desiredDivision}`}
                pricing={'$55.00'}
              />
            )}

            <div className="order-cost-from-checkbox">
              {selectedCheckboxes.length === 0 ? (
                <p style={{ padding: '1rem' }}>No options selected</p>
              ) : (
                <ul className="selectedCheckboxInOrder">
                  {selectedCheckboxes.map(checkbox => (
                    <li key={checkbox.value}>
                      <OrderedItem title={checkbox.label} pricing={'$2.0'} />
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="stripe-pay-btn">
              <Button
                className="pay-btn-ub"
                type="submit"
                loading={loading}
                disabled={loading}
                color="blue"
              >
                Pay Using Stripe
              </Button>
            </div>
            <div className="have-question">
              <div>
                Have a question?
                <Link
                  to="/#faq"
                  className="read-faq"
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
