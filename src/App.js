import React from 'react'
import guido from './guido.jpg'
import m from './music.mp3'
import video from "./videosample.mp4"
 const App = () => {
  return (
    <div>
      <center>
     <img src={guido} height="220px" width="220px"/><br/>
     <audio controls>
      <source src={m} type="audio/ogg"/>
     </audio><br/>
     <video height="300px" width="300px" controls>
      <source src={video} type="audio/ogg"/>
     </video>

     </center>
    </div>
  )
}
export default App
