import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {list} = this.props
    return (
      <li className="card-5-2">
        <img
          src={list.competing_team_logo}
          alt={`competing team ${list.competing_team}`}
          className="img5"
        />
        <p className="p1">{list.competing_team}</p>
        <p className="p1">{list.result}</p>
        <p className="h1">{list.match_status}</p>
      </li>
    )
  }
}
export default MatchCard
