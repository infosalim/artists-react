import React from "react";
import { Link } from "react-router-dom";



const ArtistsList = props => {
  const list = ({ allArtists }) => {
    if (allArtists) {
      return allArtists.map(item => {

        const style = {
            background: `url('/images/covers/${item.cover}.jpg') no-repeat`
        }
        return (
            <Link 
                key={item.id} 
                to={`/artist/${item.id}`} 
                className="artist-item"
                style={style}>

                <div>{item.name}</div>
            </Link>
            );
      });
    }
  };

  return (
    <div className="artist-list">
    <h4>Browse the artistlist</h4>
        {list(props)}
    </div>
  );
};

export default ArtistsList;
