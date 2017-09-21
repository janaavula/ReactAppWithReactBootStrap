import React from 'react';
import { Table } from 'react-bootstrap';

export default (props) => {
  const songs = props.album ? props.album.songs : [];
  const songList = songs.map( song => {
    return (
      <tr key={song.id}>
        <td>{song.id}</td>
        <td>{song.title}</td>
        <td>{song.length}</td>
        <td>{song.rating}</td>
      </tr>
    );
  });
  return (
    <section>
      <h2>Songs</h2>
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Track</th>
            <th>Title</th>
            <th>Length</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {songList}
        </tbody>
      </Table>
    </section>
  );
};
