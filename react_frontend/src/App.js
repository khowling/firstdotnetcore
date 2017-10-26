import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'

import RouterDiag from './RouterDiag.js'
import {Persona, Alert, Histogram} from './components/common.js'
import { Landing } from './components/landing.js'
import { Chat } from 'botframework-webchat'
import 'botframework-webchat/botchat.css'

const Header1 = () => [
  <div data-grid="col-12" className="m-rich-heading theme-dark f-accent">
    <div className="c-logo">
        <img itemprop="logo" className="c-image" src="https://ichef.bbci.co.uk/news/660/cpsprodpb/22C8/production/_86340980_talkmore.jpg" alt="Placeholder logo image" itemscope itemType="http://schema.org/ImageObject"/>
        <span>Microsoft</span>
    </div>
    <div>
        <h3 className="c-heading">TalkTalk</h3>
        <p className="c-paragraph-3">My Provider</p>
    </div>
  </div>
]

const Header = () => 
    <div data-grid="col-12" className="m-rich-heading  f-image" style={{"background": "#156BC6"}}>
        <picture className="c-image">
            <source srcSet="https://ichef.bbci.co.uk/news/660/cpsprodpb/22C8/production/_86340980_talkmore.jpg" media="(min-width:0)"/>
            <img srcSet="https://ichef.bbci.co.uk/news/660/cpsprodpb/22C8/production/_86340980_talkmore.jpg" src="https://ichef.bbci.co.uk/news/660/cpsprodpb/22C8/production/_86340980_talkmore.jpg" alt="Placeholder with dark grey background"/>
        </picture>
        <div>
            <h3 className="c-heading">TalkTalk - Whitebuilding Hackathon</h3>
            <p className="c-paragraph-3">You can now personalize your Connectivity with over 8 million possible options. You design it. We provide it.</p>
        </div>
    </div>



const TwoColTable = () => 
  <div data-grid="col-12 pad-12x stack-2" className="m-system-requirements">
      <div data-grid="col-6">
          <div className="c-table f-divided">
              <table>
                  <caption>Minimum</caption>
                  <tbody>
                      <tr>
                          <th scope="row">Item Bravo</th>
                          <td>Description paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae convallis eros, nec iaculis nisi.</td>
                      </tr>
                      <tr>
                          <th scope="row">Item charlie</th>
                          <td>Description sentence.</td>
                      </tr>
                      <tr>
                          <th scope="row">Item Delta</th>
                          <td>Description paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                      </tr>
                      <tr>
                          <th scope="row">Item Echo</th>
                          <td>Description sentence.</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
      <div data-grid="col-6">
          <div className="c-table f-divided">
              <table>
                  <caption>Recommended</caption>
                  <tbody>
                      <tr>
                          <th scope="row">Item Bravo</th>
                          <td>Description paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae convallis eros, nec iaculis nisi.</td>
                      </tr>
                      <tr>
                          <th scope="row">Item charlie</th>
                          <td>Description sentence.</td>
                      </tr>
                      <tr>
                          <th scope="row">Item Delta</th>
                          <td>Description paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                      </tr>
                      <tr>
                          <th scope="row">Item Echo</th>
                          <td>Description sentence.</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>



const Products = () => 
    <div className="m-product-placement f-app" data-grid="col-12">
                <ul className="c-group">
                    <li>
                        <section className="m-product-placement-item context-app f-size-medium" itemscope itemType="http://schema.org/Product">
                            <a href="#">
                                <div className="f-defa ult-image">
                                    <picture>
                                        <source srcset="https://static-s.aa-cdn.net/img/ios/1222519103/1bfd2b8479f5f016c2b76f062ae4e203" media="(min-width:0)"/>
                                        <img className="c-image" srcset="https://static-s.aa-cdn.net/img/ios/1222519103/1bfd2b8479f5f016c2b76f062ae4e203" src="/images/content-images/app-glyph-default-large.png" alt="Three boxes in a square with grey background" onerror="handleImgError(this, 'medium')"/>
                                    </picture>
                                </div>
                                <div>
                                    <h3 className="c-heading" itemprop="product name">Broadband</h3>
                                    <div className="c-rating" data-value="4.5" data-max="5" itemscope itemType="https://schema.org/AggregateRating">
                                        <p className="x-screen-reader">Community rating:
                                            <span itemprop="ratingValue">4.5</span>/
                                            <span itemprop="bestRating">5</span>
                                        </p>
                                        <div></div>
                                    </div>
                                    <div className="c-price" itemprop="offers" itemscope itemType="http://schema.org/Offer">
                                        <span itemprop="price">Gold</span>
                                        <link itemprop="availability" href="http://schema.org/InStock"/>
                                    </div>
                                </div>
                            </a>
                        </section>
                    </li>
                    <li>
                        <section className="m-product-placement-item context-app f-size-medium" itemscope itemType="http://schema.org/Product">
                            <a href="#">
                                <div className="f-def ault-image">
                                    <picture>
                                        <source srcset="http://www.myglt.net/wp-content/uploads/2016/05/system-internet.png" media="(min-width:0)"/>
                                        <img className="c-image" srcset="http://www.myglt.net/wp-content/uploads/2016/05/system-internet.png" src="/images/content-images/app-glyph-default-large.png" alt="Three boxes in a square with grey background" onerror="handleImgError(this, 'medium')"/>
                                    </picture>
                                </div>
                                <div>
                                    <h3 className="c-heading" itemprop="product name">Phone</h3>
                                    <div className="c-rating" data-value="4.5" data-max="5" itemscope itemType="https://schema.org/AggregateRating">
                                        <p className="x-screen-reader">Community rating:
                                            <span itemprop="ratingValue">4.5</span>/
                                            <span itemprop="bestRating">5</span>
                                        </p>
                                        <div></div>
                                    </div>
                                    <div className="c-price" itemprop="offers" itemscope itemType="http://schema.org/Offer">
                                        <span itemprop="price">Evenings and Weekends</span>
                                        <link itemprop="availability" href="http://schema.org/InStock"/>
                                    </div>
                                </div>
                            </a>
                        </section>
                    </li>
                    <li>
                        <section className="m-product-placement-item context-app f-size-medium" itemscope itemType="http://schema.org/Product">
                            <a href="#">
                                <div className="f-def ault-image">
                                    <picture>
                                        <source srcset="http://www.contactnumbers.co.uk/uploads/images/TV-License-Customer-services.png" media="(min-width:0)"/>
                                        <img className="c-image" srcset="http://www.contactnumbers.co.uk/uploads/images/TV-License-Customer-services.png" src="/images/content-images/app-glyph-default-large.png" alt="Three boxes in a square with grey background" onerror="handleImgError(this, 'medium')"/>
                                    </picture>
                                </div>
                                <div>
                                    <h3 className="c-heading" itemprop="product name">TV</h3>
                                    <div className="c-rating" data-value="5" data-max="5" itemscope itemType="https://schema.org/AggregateRating">
                                        <p className="x-screen-reader">Community rating:
                                            <span itemprop="ratingValue">5</span>/
                                            <span itemprop="bestRating">5</span>
                                        </p>
                                        <div></div>
                                    </div>
                                    <div className="c-price" itemprop="offers" itemscope itemType="http://schema.org/Offer">
                                        <span itemprop="price">Sports + Entertainment</span>
                                        <link itemprop="availability" href="http://schema.org/InStock"/>
                                    </div>
                                </div>
                            </a>
                        </section>
                    </li>
                </ul>
    </div>

const AttitionalInfo = () => 
    <section className="m-additional-information" style={{"boarderLeft": "0px solid rgba(0,0,0,.2)"}}>
        <div data-grid="col-12 stack-2">

                <div data-grid="col-6">
                    <ul className="c-list f-bare f-lean">
                        <li>
                            <strong>Publisher</strong>
                        </li>
                        <li>Electronic Arts</li>
                        <li>Copyright &copy; 2016</li>
                    </ul>
                    <ul className="c-list f-bare f-lean">
                        <li>
                            <strong>Release date</strong>
                        </li>
                        <li>11/4/15</li>
                    </ul>
                    <ul className="c-list f-bare f-lean">
                        <li>
                            <strong>Approximate size</strong>
                        </li>
                        <li>00.00 GB</li>
                    </ul>
                </div>
                <div data-grid="col-6">
                    <div className="c-age-rating">
                        <img className="c-image" src="http://placehold.it/56x56" alt="Placeholder with grey background"/>
                        <p className="c-label">Teen</p>
                        <p className="c-paragraph">Suitable for 13+</p>
                        <div className="c-content-toggle">
                            <ul className="c-list f-bare f-lean" id="learn-more" data-f-expanded="false">
                                <li>Blood and gore</li>
                                <li>Adult themes</li>
                            </ul>
                            <button data-f-more="More" data-f-less="Less" data-f-show="0" aria-hidden="true">More</button>
                        </div>
                    </div>
                    <div className="c-content-toggle">
                        <p id="content-toggle-target" data-f-expanded="false">
                            <strong>Permissions</strong>


                        </p>
                        <button data-f-more="Show more" data-f-less="Show less" data-f-show="3" aria-hidden="true">Show more</button>
                    </div>
                </div>
        </div>
    </section>

const Panes2 = () => 
  <div className="m-panes m-panes-section-ext" data-grid="col-12">
    <section>
        <div data-grid="col-12" className="m-banner">
            <h2 className="c-heading-3">Broadband details</h2>
            <a href="#" className="c-call-to-action c-glyph">
                <span>See new Offers</span>
            </a>
        </div>
        <AttitionalInfo/>
        <Histogram/>
    </section>
    <section>
        <Alert type="error" head_txt="Router Disconnecting" body_txt="We've detected a potential issue"/>
        <Persona name="TT-BOT" desc="Connectivity Specilist" image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Cartoon_Robot.svg/407px-Cartoon_Robot.svg.png"/>
        <div style={{"position": "relative", "height": "550px", "textAlign": "left"}}>
        <Chat directLine={{ 
            //domain: "http://localhost:3978/api/messages",
            //webSocket: false,
            secret: "v1qqRfc36XU.cwA.Lhg.IhYIqjHqUBOWPManjbvHtxA6mm763YmgwOCZ1u-SIv4" }
            } 
            user={{ id: 'Keith', name: 'Keith' }}/>
        </div>
    </section>
  </div>

class App extends Component {
  state = { value: 0 };

  render() {
    return (
        <Router>
            <div>
            <a className="m-skip-to-main" href="#mainContent" tabIndex="0">Skip to main content</a>
            <main id="mainContent" data-grid="container">
                <Header/>
                <Route exact path="/bot" component={Panes2}/>
                <Route exact path="/diag" component={RouterDiag}/>
                <Route exact path="/" component={Landing}/>
            </main>
            </div>
        </Router>
    )
  }
}

export default App;
