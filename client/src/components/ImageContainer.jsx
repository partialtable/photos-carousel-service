/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import ImageContainerEntry from './ImageContainerEntry.jsx';

const PhotoGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

class ImageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const photos = this.props.photos;
    const mappedPhotos = photos.map((photo, key) => {
      return (
        <ImageContainerEntry
          photoUrl={photo.url_path}
          key={`${photo.photo_id} ${key}`}
        />
      );
    });
    return (
      <div>
        <PhotoGrid>
          {mappedPhotos}
        </PhotoGrid>
      </div>
    );
  }
}

export default ImageContainer;
