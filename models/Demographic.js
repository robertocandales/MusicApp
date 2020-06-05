
//const data = require('./data');

class Demographic {

  constructor(data = []) {
      this.set_data(data);
  }

  set_data(data) {
      this.data = this._process_data(data);
  }

  _process_data(data) {

      // helper inner function
      function set_totals(item, key, total_hold_object) {
          const a =  Object.values(item.gender[key]); // totals values
          item.gender[key].total = a.reduce((a, b) => a + b, 0); // set the total by gender
          total_hold_object.total += item.gender[key].total;
      }

      // traverse the male and female property and set the total plays in each gender
      data.forEach(item =>
      {

          let plays_by_country = { total: 0 }; // I created an object because there's no exists
          Object.keys(item.gender).forEach(function(key) {
              set_totals(item, key, plays_by_country);
          });


          item.cities.forEach(city => {
              let plays_by_city = { total: 0 };
              Object.keys(city.gender).forEach(function(key) {
                  set_totals(city, key, plays_by_city);
              });
              city.total_plays = plays_by_city.total;
          });

          item.total_plays = plays_by_country.total;
      });


      return data;
  }

}

/*
// sample
let s = new Demographic(data.data.report.data);
console.log(JSON.stringify(s.data, null, 2));
 */

export default Demographic;
