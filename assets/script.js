var locUrl = 'https://www.loc.gov/';
fetch(locUrl) 
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });
