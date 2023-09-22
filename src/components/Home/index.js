import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {list: [], isLoading: true}

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const list1 = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({list: list1, isLoading: false})
  }

  render() {
    const {list, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div className="bg">
            <div className="card">
              <div className="card-1">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
                  className="img"
                  alt="ipl logo"
                />
                <h1 className="h1">IPL Dashboard</h1>
              </div>
              <ul className="ul">
                {list.map(each => (
                  <TeamCard key={each.id} list={each} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Home
