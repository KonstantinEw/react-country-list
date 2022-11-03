import { Color, ICountry } from "../types"
import { Badge } from "./Badge"


export const CountryItem = ({ name, flag, population, area, capital, region }: ICountry) => {
    return (<li className="list-group-item d-flex justify-content-between">
        <img src={`${flag}`} alt="flag" width="100" height="70" />
        <p>{`${name}`}</p>
        <p>{`${capital}`}</p>
        <p>{`${region}`}</p>
        <Badge lable='area' count={area} color={Color.Primary} />
        <Badge lable='population' count={population} color={Color.Secondary} />
    </li>)
}
