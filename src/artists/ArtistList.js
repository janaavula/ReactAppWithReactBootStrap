import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import {Grid, Row, Col} from 'react-bootstrap';

import ArtistDetail from './ArtistDetail';
import './artist.css';

class ArtistList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: []
    }
  }

  componentDidMount() {


    //Comment of using async and await instead of promisey
    // (async () => {
    //   const res = await axios.get('/artists.json')
    //   this.setState({ artists: res.data });
    // })();
    axios.get('/artists.json')
    .then(res => {
      this.setState({ artists: res.data });
    });
  }

  render() {
    const artists = this.state.artists.map( artist => {
      return (
        <li key={artist.id}>
          <NavLink
            activeClassName="activeLink"
            to={`${this.props.match.path}/${artist.id}`}>{artist.name}
          </NavLink>
        </li>
      );
    });
    return (
      <section className='artists'>
      <Grid>
        <Row>
          <Col md={2}>
            <h2>Artists</h2>
            <ul>
              {artists}
            </ul>
         </Col>
         <Col md={10}>
          <Route
            path={`${this.props.match.path}/:artistId`}
            render={(routeProps) => {
              const artist = this.state.artists.find(artist => artist.id ===
                Number(routeProps.match.params.artistId));
              return <ArtistDetail {...routeProps} artist={artist} />;
            }}
         />
        </Col>
       </Row>
      </Grid>
      </section>
    );
  }
}

export default ArtistList;
