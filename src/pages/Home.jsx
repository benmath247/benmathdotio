import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/home/LoadingScreen';
import LoadedHome from '../components/home/LoadedHome';

function Home() {
  // this image takes a bit to load, so we show a loading screen until it does
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "images/me/me.png";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className='container'>
      {imageLoaded ? (
        <LoadedHome />
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}

export default Home;
