'use strict'
const axios  = require('axios')
const maps = {}

maps.getDataExample = (req, res) =>{
  axios({
    method: 'GET',
    url: 'http://www.qlue.co.id/vacancy/svc/getDataExample.php'
  })
    .then(dataVacancy => { res.json(dataVacancy.data) })
    .catch(error => console.error(error))
}

maps.getDataJakarta = (req, res) => {
  axios({
    method: 'GET',
    url: 'http://waze.qlue.id/jakarta/update/0atxn84I3hx2WmNm5ifPDZkJaLERZD9A.json'
  })
    .then(dataJakarta => { res.json(dataJakarta.data.alerts) })
    .catch(error => console.error(error))
}

module.exports = maps
