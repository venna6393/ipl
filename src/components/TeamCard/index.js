import {Component} from 'react'
import {Link} from 'react-router-dom'

class TeamCard extends Component {
  render() {
    const {list} = this.props
    return (
      <li>
        <Link to={`/team-matches/${list.id}`} className="li">
          <img src={list.teamImageUrl} alt={list.name} className="img1" />
          <p className="h1">{list.name}</p>
        </Link>
      </li>
    )
  }
}

export default TeamCard
