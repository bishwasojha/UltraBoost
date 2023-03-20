import React from 'react'
import HomeTitle from './HomeTitle';
import feature_1 from '../Assets/Icons/Feature/Feature1.svg';
import feature_2 from '../Assets/Icons/Feature/Feature2.svg';
import feature_3 from '../Assets/Icons/Feature/Feature3.svg';
import feature_4 from '../Assets/Icons/Feature/Feature4.svg';
import feature_5 from '../Assets/Icons/Feature/Feature5.svg';
import feature_6 from '../Assets/Icons/Feature/Feature6.svg';
const Feature = () => {
  return (
    <div className="feature-container">
        <div className="container">
            <div className="feature-heading">
                <HomeTitle> FEATURES </HomeTitle>
                <div className="text-special-feature">
                    <h1>Our Special</h1><h2>Features </h2>
                </div>
            </div>
            <div className="feature-description">
                <div className="feature-wrapper">
                    <div className="feature-wrapper-1">

                    <div className="each-feature">
                        <div className="feature-icon">
                            <img src={feature_1} alt="" />
                        </div>
                        <div className="feature-name">
                            <h3>Feature Name</h3>
                            <p> Lorem ipsum dolor sit consectetur adipiscing elit nulla massanen.</p>
                        </div>
                    </div>
                    <div className="each-feature">
                        <div className="feature-icon">
                            <img src={feature_2} alt="" />
                        </div>
                        <div className="feature-name">
                            <h3>Feature Name</h3>
                            <p> Lorem ipsum dolor sit consectetur adipiscing elit nulla massanen.</p>
                        </div>
                    </div>
                    <div className="each-feature">
                        <div className="feature-icon">
                            <img src={feature_3} alt="" />
                        </div>
                        <div className="feature-name">
                            <h3>Feature Name</h3>
                            <p> Lorem ipsum dolor sit consectetur adipiscing elit nulla massanen.</p>
                        </div>
                    </div>
                    </div>

                    <div className="feature-wrapper-2">

                     <div className="each-feature">
                        <div className="feature-icon">
                            <img src={feature_4} alt="" />
                        </div>
                        <div className="feature-name">
                            <h3>Feature Name</h3>
                            <p> Lorem ipsum dolor sit consectetur adipiscing elit nulla massanen.</p>
                        </div>
                    </div>
                    <div className="each-feature">
                        <div className="feature-icon">
                            <img src={feature_5} alt="" />
                        </div>
                        <div className="feature-name">
                            <h3>Feature Name</h3>
                            <p> Lorem ipsum dolor sit consectetur adipiscing elit nulla massanen.</p>
                        </div>
                    </div>
                    <div className="each-feature">
                        <div className="feature-icon">
                            <img src={feature_6} alt="" />
                        </div>
                        <div className="feature-name">
                            <h3>Feature Name</h3>
                            <p> Lorem ipsum dolor sit consectetur adipiscing elit nulla massanen.</p>
                        </div>
                    </div>
                    </div>
                    


                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Feature