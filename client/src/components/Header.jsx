import React from 'react';
/*
still need to solve:
- logic for displaying features with value 'true'
- why can't I get nested properties? (props.headerData.location.city)
- urls for icons
*/
const Header = (props) => (
  <div className="listing-header">
    <div className="headline">
      <h1>{props.headline}</h1>
    </div>
    <div className="header-widgets">
      <div className="header-info">
        <div className="stars-info">
          {props.stars} ({props.reviews}) •
        </div>
        <div className="superhost-badge">
          {props.superHost === true ? 'Superhost •' : null}
        </div>
        <div className="location-info">
          {props.neighborhood ? props.neighborhood + ', ' : null}
          {props.city}, {props.state}
        </div>
      </div>
      <div className="header-actions">
        <div className="share-button">
          Share
        </div>
        <div className="save-button">
          Save
        </div>
      </div>
    </div>
  </div>
);

export default Header;