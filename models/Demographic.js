
//const data = require('./data');

class Demographic {

  constructor(data = []) {
      this.set_data(data);
  }

  set_data(data) {
      this.data = this._process_data(data.data ? data.data : data);
      this.set_gender_totals();
  }

  set_total(total) {
      this.total = total ? total : 0;
  }

  _process_data(data) {

      if (!data)
          return;

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


    /**
     * Gets the cities of each country and sorts them by total_plays property in descendent way.
     * @returns {any[]}
     */
    get_top_cities() {
        return this.data.map(item => item.cities)
            .flat()
            .sort(this._compare);
    }

    _compare( a, b ) {
        if ( a.total_plays < b.total_plays ){
            return 1;
        }
        if ( a.total_plays > b.total_plays ){
            return -1;
        }
        return 0;
    }

    /**
     * sets the total_female and total_male properties on the object
     */
    set_gender_totals() {
        this.total_female = this.data.reduce(
            (accum,item) => accum + (item.gender.female ? item.gender.female.total : 0),
            0);

        this.total_male = this.data.reduce(
            (accum,item) => accum + (item.gender.male ? item.gender.male.total : 0 ),
            0);

        this.set_total(this.total_female + this.total_male)
    }

    /**
     * the percent of the gender counting the totals
     * @returns {{female: string, male: string}}
     */
    get_gender_percentages() {
        return {
            female: Math.round(this.total_female/this.total * 100),
            male: Math.round(this.total_male/this.total * 100 )
        }
    }

    get_ages_total() {
        let total_ages = {};
        this.data.forEach( country => {
            Object.keys(country.gender).forEach(_gender => {
                for (let [key, value] of Object.entries(country.gender[_gender])) {
                    if (!total_ages[key])
                        total_ages[key] = value;
                    else
                        total_ages[key] += value
                }
            })
        });

        return total_ages;
    }

    get_ages_total_percentages() {

        let total_age_percentages = {};
        const ages_total = this.get_ages_total();

        for (let age of Object.keys(ages_total).filter(value => value !== 'total'))
                total_age_percentages[age] = (ages_total[age]/ages_total['total'] * 100).toFixed(2);


        return Object.entries(total_age_percentages).map(([key, value]) => {
            return { name: key, percentage: value };
        });
    }


}

/*
// sample
let s = new Demographic(data.data.report.data);
console.log(s.total);
console.log(JSON.stringify(s.get_ages_total_percentages(), null, 2));
*/



export default Demographic;
