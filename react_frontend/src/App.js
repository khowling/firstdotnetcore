import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'

import RouterDiag from './RouterDiag.js'
import Bot from './components/bot.js'
import { MyUsage } from './components/myusage.js'
import Login from './components/login.js'

const Header1 = () => [
  <div data-grid="col-12" className="m-rich-heading theme-dark f-accent">
    <div className="c-logo">
        <img itemprop="logo" className="c-image" src="https://ichef.bbci.co.uk/news/660/cpsprodpb/22C8/production/_86340980_talkmore.jpg" alt="Placeholder logo image" itemscope itemType="http://schema.org/ImageObject"/>
        <span>Microsoft</span>
    </div>
    <div>
        <h3 className="c-heading">TopTelco</h3>
        <p className="c-paragraph-3">My Provider</p>
    </div>
  </div>
]

const RichHeading = () => 
        <div className="m-rich-heading  f-image">
            <picture className="c-image">
                <img srcSet="https://media.licdn.com/mpr/mpr/shrinknp_800_800/p/1/005/0ac/3fe/06aaca7.jpg" src="https://media.licdn.com/mpr/mpr/shrinknp_800_800/p/1/005/0ac/3fe/06aaca7.jpg" alt="Placeholder with dark grey background"/>
            </picture>
            <section  data-grid="container">
                <div data-grid="col-12">
                    <h3 className="c-heading">TopTelco - Subscriber Portal</h3>
                    <p className="c-paragraph-3">You can now personalize your Connectivity with over 8 million possible options. You design it. We provide it.</p>
                </div>
            </section>
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



class App extends Component {
  state = { connection: "Not Connected", caseupdates: [] };

  _wsSendJoin(keepalive) {
    this.setState ({connection: "connected"})
  }

  _wsMessageEvent(event) {
    console.log(`dispatching message from server ${event.data}`);
    let msg = JSON.parse(event.data)
    if (msg.type == "case") {
        this.setState({caseupdates: this.state.caseupdates.concat(msg)})
    }
  }

  _wsCloseEvent(event) {
    this.ws.removeEventListener('open', this._wsSendJoin.bind(this));
    this.ws.removeEventListener('message', this._wsMessageEvent.bind(this));
    this.ws.removeEventListener('close', this._wsCloseEvent.bind(this));
    this.ws = null;
    this.setState ({connection: "Not Connected"})
  }


  componentDidMount() {
    this.ws = new WebSocket(`ws://${window.location.hostname}:5000/ws`);
    this.ws.addEventListener('open', this._wsSendJoin.bind(this, false));
    this.ws.addEventListener('message', this._wsMessageEvent.bind(this));
    this.ws.addEventListener('close', this._wsCloseEvent.bind(this));
  }

  render() {
    return (
        <Router>
            <main id="mainContent">
                <RichHeading/>
                <div data-grid="container">
                    <div data-grid="col12">{this.state.connection}</div>
                    <Route exact path="/bot" render={(props) => (<Bot caseupdates={this.state.caseupdates} />)}/>
                    <Route exact path="/diag" component={RouterDiag}/>
                    <Route exact path="/myusage" component={MyUsage}/>
                    <Route exact path="/" component={Login}/>
                </div>
            </main>
        </Router>
    )
  }
}

export default App;
