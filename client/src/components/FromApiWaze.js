import React from 'react';
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const FromApiWaze = (props) => {
  return(
    <div>
      {props.holdChange.length === 0 ? <h1>Loading . . .</h1> :
        props.holdChange.map((item, index) => {
         return (
           <Marker key={ index } position={ [item.location.y, item.location.x] } icon={
             L.icon({
               iconUrl: 'https://s-media-cache-ak0.pinimg.com/originals/cd/44/f9/cd44f96b2ac5b7361bf53c77e2fd5d3d.png',
               iconSize: [40, 40],
               iconAnchor: [25, 25],
               popupAnchor: [-3, -26]
             })}>
             <Popup>
               <span>
                 City : { item.city } <br/>
                 Street : { item.street } <br/>
                 Report Rating : { item.reportRating } <br/>
                 Reliability : { item.reliability } <br/>
                 Report Description : { item.reportDescription }
               </span>
             </Popup>
           </Marker>
         )
       })
      }
    </div>
  )
}

export default FromApiWaze;
