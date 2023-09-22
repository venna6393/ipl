import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {details} = this.props
    console.log(details)
    return (
      <div className="card-4-1">
        <div className="card-4-2">
          <p className="h1">{details.competing_team}</p>
          <p className="p1">{details.date}</p>
          <p className="p1">{details.venue}</p>
          <p className="p1">{details.result}</p>
          <p>{details.man_of_the_match}</p>
        </div>
        <div className="card-4-3">
          <img
            src={details.competing_team_logo}
            alt={`latest match ${details.competing_team}`}
            className="img4"
          />
        </div>
        <div className="card-4-2">
          <h1 className="h1">First Innings</h1>
          <p className="p1">{details.first_innings}</p>
          <h1 className="h1">Second Innings</h1>
          <p className="p1">{details.second_innings}</p>
          <h1 className="h1">Umpires</h1>
          <p className="p1">{details.umpires}</p>
        </div>
      </div>
    )
  }
}
export default LatestMatch
