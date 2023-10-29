// Fetch the data from the API
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Problem 1: Get all the countries from Asia continent/region using the Filter function
    const countriesInAsia = data.filter((country) => country.region === "Asia");
    console.log("Countries in Asia:", countriesInAsia);

    // Problem 2: Get all the countries with a population of less than 2 lakhs using the Filter function
    const countriesWithPopulationLessThan2Lakhs = data.filter(
      (country) => country.population < 200000
    );
    console.log("Countries with population less than 2 lakhs:", countriesWithPopulationLessThan2Lakhs);

    // Problem 3: Print the name, capital, and flag of each country using the forEach function
    data.forEach((country) => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.png);
      console.log("-------");
    });

    // Problem 4: Print the total population of countries using the reduce function
    const totalPopulation = data.reduce(
      (accumulator, country) => accumulator + country.population,
      0
    );
    console.log("Total population of countries:", totalPopulation);

    // Problem 5: Print the country that uses US dollars as currency.
    const countryUsingUSD = data.find((country) =>
      country.currencies && country.currencies.USD
    );
    console.log("Country using US dollars as currency:", countryUsingUSD);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });