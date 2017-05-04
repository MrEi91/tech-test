import React from 'react';
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const FromApiQlue = (props) => {
  return(
    <div>
      {props.handleChange.length === 0 ? <h1>Loading . . .</h1> :
        props.handleChange.map((item, index) => {
          return (
            <Marker key={ index } position={ [item.lat, item.lng] } icon={
              L.icon({
                iconUrl: 'http://www.qlue.co.id/vacancy/svc/icon-marker.png',
                iconSize: [45, 45],
                iconAnchor: [25, 25],
                popupAnchor: [-3, -26]
              })}>
              <Popup>
                <span>
                  Placemark ID : { item.placemark_id }<br/>
                  Name         : { item.name }<br/>
                  Address      :  { item.address }<br/>
                  Latitude     : { item.lat } <br/>
                  Longitude    : { item.lng }
                </span>
              </Popup>
            </Marker>
          )
        })
      }
    </div>
  )
}

export default FromApiQlue;
