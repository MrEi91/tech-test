import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet'
import axios from 'axios'

import './App.css';
import FromApiQlue from './components/FromApiQlue'
import FromApiWaze from './components/FromApiWaze'
const position = [-6.21462, 106.84513];

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataFromApiQlue: [],
      dataFromApiWaze: [],
      buttonActive: true
    }
  }

  componentDidMount(){
    const self = this;
    //Fetch data from API QLUE
    axios.get('http://localhost:3000/api/vacancy')
      .then(response => { self.setState({ dataFromApiQlue: response.data }) })
      .catch(error => console.error(error))

    //Fetch data from API WAZE
    axios.get('http://localhost:3000/api/jakarta')
      .then(response => { self.setState({ dataFromApiWaze: response.data }) })
      .catch(error => console.error(error))
  }

  render() {
    return (
      <div className="App">
        <div style={{ flexDirection: 'row', align: 'center', marginBottom: 7 }}>
          <input type='button' style={ styles.buttonWaze } value='Waze' onClick={() => this.setState({ buttonActive: true })}  />
          <input type='button' style={ styles.buttonQlue } value='Qlue'  onClick={() => this.setState({ buttonActive: false })} />
        </div>
        <Map center={position} zoom={12}>
          <TileLayer
            url='https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXJlaTkxIiwiYSI6ImNqMjlmNm1wdzAxMDkycW1tODNmOTh4M3cifQ.IzQ5018DW5hJqcGU8ep1ng'
            attribution='&copy; <a href="#">Eri Irawan</a>'
          />
            {
              this.state.buttonActive === true ? <FromApiWaze holdChange={ this.state.dataFromApiWaze } /> : <FromApiQlue handleChange={ this.state.dataFromApiQlue } />
            }
        </Map>
      </div>
    );
  }
}

const styles = {
  buttonWaze: {
    width: '48%',
    color: '#fffbfb',
    height: 30, backgroundColor: '#3299ff',
    borderWidth: 0,
    marginRight: 1,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  buttonQlue: {
    width: '47%',
    color: '#fffbfb',
    height: 30,
    backgroundColor: '#3299ff',
    borderWidth: 0,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5
  }
}

export default App;
