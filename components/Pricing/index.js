import React, { Component } from 'react';

import Link from 'next/link'

class PricingPlan extends Component {
    render() {
        return (
            <section className="pricing-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="section-title text-center">
                                <span>Koszt</span>
                                <h2>Tabela</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="pricing-grids">
                                <div className="grid">
                                    <div className="pricing-header">
                                        <div className="circuler-price">
                                            <i className="fi flaticon-verified"></i>
                                        </div>
                                        <p>Basic</p>
                                    </div>
                                    <div className="pricing-body">
                                        <h2><sup>$</sup>30 <span>month</span></h2>
                                        <ul>
                                            <li>bla </li>
                                            <li>bla bla </li>
                                            <li>bla bla bla</li>
                                            <li>24/Support</li>
                                        </ul>
                                        <Link href="/" className="template-btn"><a className="template-btn">Zamów</a></Link>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="pricing-header">
                                        <div className="circuler-price">
                                            <i className="fi flaticon-paint-palette"></i>
                                        </div>
                                        <p>Standard</p>
                                    </div>
                                    <div className="pricing-body">
                                        <h2><sup>$</sup>45<span>month</span></h2>
                                        <ul>
                                            <li>bla </li>
                                            <li>blalopment</li>
                                            <li>blaign</li>
                                            <li>24/Support</li>
                                        </ul>
                                        <Link href="/" ><a className="template-btn">Zamów</a></Link>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="pricing-header">
                                        <div className="circuler-price">
                                            <i className="fi flaticon-operator"></i>
                                        </div>
                                        <p>Premium</p>
                                    </div>
                                    <div className="pricing-body">
                                        <h2><sup>$</sup>50 <span>month</span></h2>
                                        <ul>
                                            <li>bla</li>
                                            <li>blaopment</li>
                                            <li>blign</li>
                                            <li>blport</li>
                                        </ul>
                                        <Link href="/"><a className="template-btn">Zamów</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="white_svg svg_white">
                    <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                        <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                    </svg>
                </div>
            </section>
        );
    }
}

export default PricingPlan;