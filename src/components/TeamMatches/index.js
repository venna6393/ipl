import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {item: {}, isLoading: true}

  componentDidMount() {
    this.getItem()
  }

  getItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const item1 = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({item: item1, isLoading: false})
  }

  render() {
    const {item, isLoading} = this.state
    const {latestMatchDetails, recentMatches} = item
    console.log(latestMatchDetails)

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div>
            <div className="bg1">
              <div className="card-3">
                <img
                  src={item.teamBannerUrl}
                  alt="team banner"
                  className="img2"
                />
              </div>
              <div className="card-4">
                <h1 className="h1">Latest Matches</h1>
                <LatestMatch details={latestMatchDetails} />
              </div>
              <div className="card-5">
                <ul className="ul2">
                  {recentMatches.map(each => (
                    <MatchCard list={each} key={each.id} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
