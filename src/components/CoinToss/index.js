// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0}

  onTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const imageUrl =
      tossResult === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return imageUrl
  }

  render() {
    const {total, heads, tails} = this.state
    return (
      <div className="bg-container">
        <div className="toss-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p>heads(or)Tails</p>
          <img
            src={this.onTossButton()}
            alt="toss result"
            className="toss-image"
          />
          <button
            type="button"
            className="toss-button"
            onClick={this.onTossButton}
          >
            Toss Coin
          </button>
          <div className="button-card">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
