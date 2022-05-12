const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com',
		'X-RapidAPI-Key': '6a1f5c327amshae901d139c2c676p182734jsnffaf16445d34'
	}
};

fetch('https://the-sneaker-database.p.rapidapi.com/sneakers?limit=20', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));