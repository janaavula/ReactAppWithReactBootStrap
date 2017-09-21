import React from 'react';
import { Route, Link } from 'react-router-dom';
import AlbumDetail from './AlbumDetail';
import {Grid, Row, Col} from 'react-bootstrap';

export default (props) => {
  const albums = props.artist ? props.artist.albums : [];
  const albumsList = albums.map( album => {
    return (
      <li key={album.id}>
        <Link to={`${props.match.url}/albums/${album.id}`}>{album.title}</Link>
      </li>
    );
  });
  return (
    <section className="albums">
      <Grid>
        <Row>
          <Col md={2}>
            <h2>Albums</h2>
            <ul>
              {albumsList}
            </ul>
          </Col>
          <Col md={10}>
          <Route
            path={`${props.match.path}/albums/:albumId`}
            render={(routeProps) => {
              const album = albums.find(album => album.id ===
                Number(routeProps.match.params.albumId));
              return <AlbumDetail {...routeProps} album={album} />;
            }}
          />
          </Col>
        </Row>
      </Grid>
    </section>
  );
};
