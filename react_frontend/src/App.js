import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'

import RouterDiag from './RouterDiag.js'
import { Chat } from 'botframework-webchat'
import 'botframework-webchat/botchat.css'

const Header1 = () => [
  <div data-grid="col-12" class="m-rich-heading theme-dark f-accent">
    <div class="c-logo">
        <img itemprop="logo" class="c-image" src="https://ichef.bbci.co.uk/news/660/cpsprodpb/22C8/production/_86340980_talkmore.jpg" alt="Placeholder logo image" itemscope itemtype="http://schema.org/ImageObject"/>
        <span>Microsoft</span>
    </div>
    <div>
        <h3 class="c-heading">TalkTalk</h3>
        <p class="c-paragraph-3">My Provider</p>
    </div>
  </div>
]

const Header = () => 
    <div data-grid="col-12" class="m-rich-heading  f-image">
        <picture class="c-image">
            <source srcset="https://ichef.bbci.co.uk/news/660/cpsprodpb/22C8/production/_86340980_talkmore.jpg" media="(min-width:0)"/>
            <img srcset="https://ichef.bbci.co.uk/news/660/cpsprodpb/22C8/production/_86340980_talkmore.jpg" src="https://ichef.bbci.co.uk/news/660/cpsprodpb/22C8/production/_86340980_talkmore.jpg" alt="Placeholder with dark grey background"/>
        </picture>
        <div>
            <h3 class="c-heading">TalkTalk - Whitebuilding Hackathon</h3>
            <p class="c-paragraph-3">You can now personalize your Connectivity with over 8 million possible options. You design it. We provide it.</p>
        </div>
    </div>

const Alert = () => 
  <div class="m-alert f-error" role="alert" style={{"margin-top": 0, "margin-bottom": "10px"}}>
    <button class="c-action-trigger c-glyph glyph-cancel" aria-label="Close alert"></button>
    <div>
        <div class="c-glyph glyph-incident-triangle" aria-label="Warning message"></div>
        <p class="c-paragraph">We detected your router is disconnected more that your neibours
            <span class="c-group">
                <a class="c-action-trigger" href="#">Talk to our BOT to investigate</a>
            </span>
        </p>
    </div>
  </div>

const Histogram = () => 
<div class="m-histogram" >
    <div>
        <span>4</span>
        <div class="c-group">
            <div class="c-rating" data-value="4" data-max="5" itemscope itemtype="https://schema.org/AggregateRating">
                <p class="x-screen-reader">Community rating:
                    <span itemprop="ratingValue">4</span>/
                    <span itemprop="bestRating">5</span>
                </p>
                <div></div>
            </div>
            <span>1,185</span>
        </div>

    </div>
    <ul>
        <li>
            <a href="#">5
                <span class="c-glyph"></span>
                <span class="x-screen-reader">Stars</span>
                <div>
                    <div aria-label="20.8% of users" style={{"width": "20.8%"}}>
                        <span>208 hrs</span>
                    </div>
                </div>
            </a>
        </li>
        <li>
            <a href="#"> 4
                <span class="c-glyph"></span>
                <span class="x-screen-reader">Stars</span>
                <div>
                    <div aria-label="54.3% of users" style={{"width": "84.3%"}}>
                        <span>543 hrs</span>
                    </div>
                </div>
            </a>
        </li>
        <li>
            <a href="#">3
                <span class="c-glyph"></span>
                <span class="x-screen-reader">Stars</span>
                <div>
                    <div aria-label="34.2% of users" style={{"width": "34.2%"}}>
                        <span>342</span>
                    </div>
                </div>
            </a>
        </li>
        <li>
            <a href="#">2
                <span class="c-glyph"></span>
                <span class="x-screen-reader">Stars33</span>
                <div>
                    <div aria-label="8.2% of users" style={{"width": "8.2%"}}>
                        <span>82</span>
                    </div>
                </div>
            </a>
        </li>
        <li>
            <a href="#">1
                <span class="c-glyph"></span>
                <span class="x-screen-reader">Stars</span>
                <div>
                    <div aria-label="1.0% of users" style={{"width": "1.0%"}}>
                        <span>10</span>
                    </div>
                </div>
            </a>
        </li>
    </ul>
</div>


const TwoColTable = () => 
  <div data-grid="col-12 pad-12x stack-2" class="m-system-requirements">
      <div data-grid="col-6">
          <div class="c-table f-divided">
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
          <div class="c-table f-divided">
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

const Persona = () => 
    <div class="m-persona-3">
        <div>
            <picture role="img" aria-label="Microsoft profile picture" style={{"background-color": "white"}}>
                <img class="c-image f-round" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Cartoon_Robot.svg/407px-Cartoon_Robot.svg.png" alt="Microsoft profile picture" id="personaSize3"/>
            </picture>
        </div>
        <div>
            <h5 class="c-heading">T-BOT</h5>
            <p class="c-subheading">Connectivity Specilist</p>
        </div>
    </div>

const Products = () => 
    <div class="m-product-placement f-app" data-grid="col-12">
                <ul class="c-group">
                    <li>
                        <section class="m-product-placement-item context-app f-size-medium" itemscope itemtype="http://schema.org/Product">
                            <a href="#">
                                <div class="f-defa ult-image">
                                    <picture>
                                        <source srcset="https://static-s.aa-cdn.net/img/ios/1222519103/1bfd2b8479f5f016c2b76f062ae4e203" media="(min-width:0)"/>
                                        <img class="c-image" srcset="https://static-s.aa-cdn.net/img/ios/1222519103/1bfd2b8479f5f016c2b76f062ae4e203" src="/images/content-images/app-glyph-default-large.png" alt="Three boxes in a square with grey background" onerror="handleImgError(this, 'medium')"/>
                                    </picture>
                                </div>
                                <div>
                                    <h3 class="c-heading" itemprop="product name">Broadband</h3>
                                    <div class="c-rating" data-value="4.5" data-max="5" itemscope itemtype="https://schema.org/AggregateRating">
                                        <p class="x-screen-reader">Community rating:
                                            <span itemprop="ratingValue">4.5</span>/
                                            <span itemprop="bestRating">5</span>
                                        </p>
                                        <div></div>
                                    </div>
                                    <div class="c-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                                        <span itemprop="price">Gold</span>
                                        <link itemprop="availability" href="http://schema.org/InStock"/>
                                    </div>
                                </div>
                            </a>
                        </section>
                    </li>
                    <li>
                        <section class="m-product-placement-item context-app f-size-medium" itemscope itemtype="http://schema.org/Product">
                            <a href="#">
                                <div class="f-def ault-image">
                                    <picture>
                                        <source srcset="http://www.myglt.net/wp-content/uploads/2016/05/system-internet.png" media="(min-width:0)"/>
                                        <img class="c-image" srcset="http://www.myglt.net/wp-content/uploads/2016/05/system-internet.png" src="/images/content-images/app-glyph-default-large.png" alt="Three boxes in a square with grey background" onerror="handleImgError(this, 'medium')"/>
                                    </picture>
                                </div>
                                <div>
                                    <h3 class="c-heading" itemprop="product name">Phone</h3>
                                    <div class="c-rating" data-value="4.5" data-max="5" itemscope itemtype="https://schema.org/AggregateRating">
                                        <p class="x-screen-reader">Community rating:
                                            <span itemprop="ratingValue">4.5</span>/
                                            <span itemprop="bestRating">5</span>
                                        </p>
                                        <div></div>
                                    </div>
                                    <div class="c-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                                        <span itemprop="price">Evenings and Weekends</span>
                                        <link itemprop="availability" href="http://schema.org/InStock"/>
                                    </div>
                                </div>
                            </a>
                        </section>
                    </li>
                    <li>
                        <section class="m-product-placement-item context-app f-size-medium" itemscope itemtype="http://schema.org/Product">
                            <a href="#">
                                <div class="f-def ault-image">
                                    <picture>
                                        <source srcset="http://www.contactnumbers.co.uk/uploads/images/TV-License-Customer-services.png" media="(min-width:0)"/>
                                        <img class="c-image" srcset="http://www.contactnumbers.co.uk/uploads/images/TV-License-Customer-services.png" src="/images/content-images/app-glyph-default-large.png" alt="Three boxes in a square with grey background" onerror="handleImgError(this, 'medium')"/>
                                    </picture>
                                </div>
                                <div>
                                    <h3 class="c-heading" itemprop="product name">TV</h3>
                                    <div class="c-rating" data-value="5" data-max="5" itemscope itemtype="https://schema.org/AggregateRating">
                                        <p class="x-screen-reader">Community rating:
                                            <span itemprop="ratingValue">5</span>/
                                            <span itemprop="bestRating">5</span>
                                        </p>
                                        <div></div>
                                    </div>
                                    <div class="c-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                                        <span itemprop="price">Sports + Entertainment</span>
                                        <link itemprop="availability" href="http://schema.org/InStock"/>
                                    </div>
                                </div>
                            </a>
                        </section>
                    </li>
                </ul>
    </div>

const Panes2 = () => 
  <div class="m-panes m-panes-section-ext" data-grid="col-12">
    <section>
       
        <Products/>
        <div data-grid="col-12" class="m-banner">
            <h2 class="c-heading-3">My Packages</h2>
            <a href="#" class="c-call-to-action c-glyph">
                <span>See new Offers</span>
            </a>
        </div>
        <Histogram/>
    </section>
    <section>
    <Alert/>
          <Persona/>
          <div style={{"position": "relative", "height": "550px", "text-align": "left"}}>
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
            <a class="m-skip-to-main" href="#mainContent" tabindex="0">Skip to main content</a>
            <main id="mainContent" data-grid="container">
                <Header/>
                <Route exact path="/" component={Panes2}/>
                <Route exact path="/diag" component={RouterDiag}/>
            </main>
            </div>
        </Router>
    )
  }
}

export default App;
