import React from 'react';
import { DATA } from './Data';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function App() {
  const [url,setUrll] =useState(null)
  
  const changeUrl =(url) =>{
    setUrll(url);
  }
  return (
    <div>
      <div className='myHeader'>My Station</div>
      <div className="App">
        {DATA.map((item) => {
          return (
            <a onClick={()=>setUrll(item.url)} className="radio-station">
              <img src={item.image}></img>
            </a>
          )
        })}
      </div>
      <div className='player'>

        <AudioPlayer
          autoPlay
          preload={'none'}
          showJumpControls={false}
          src={url}
          onPlay={e => console.log("onPlay")}
        // other props here
        />

      </div>
    </div>
  );
}

export default App;
