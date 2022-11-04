import { ICountry, ICountryAPI } from "../types"

export const transformCountries = (countries: ICountryAPI[]): ICountry[] => countries.map(country => {
    return {
        name: country.name.common,
        capital: country.capital[0],
        population: country.population,
        area: country.area,
        region: country.region,
        flag: country.flags.svg,
    }
})