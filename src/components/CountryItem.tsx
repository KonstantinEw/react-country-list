import { ICountry } from "../types"
import { Color } from "../types/colors"
import { Badge } from "./Badge"


export const CountryItem = ({ name, flag, population, area, capital, region }: ICountry) => {
    return (<li className="list-group-item d-flex justify-content-between">
        <img src={flag} alt="flag" width="100" height="70" />
        <p>{name}</p>
        <p>{capital}</p>
        <p>{region}</p>
        <Badge label='area' count={area} color={Color.Primary} />
        <Badge label='population' count={population} color={Color.Secondary} />
    </li>)
}
