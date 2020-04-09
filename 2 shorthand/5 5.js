const cities = {
    continent: 'Asia',
    country: 'Indonesia',
    city: 'Medan'
}

for (let key in cities) console.log(key)
//=> continent
//=> country
//=> city


const popularDestination = {
    title: 'Danau Toba',
    rating: 10,
    reviewers: 83487
}

for (let key in popularDestination) console.log(popularDestination[key])
//=> Danau Toba
//=> 10
//=> 83487