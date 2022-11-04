
export interface ICountry {
    name: string,
    capital: string,
    population: number,
    area: number,
    region: string,
    flag: string,
};


export interface ICountryAPI {
    flags: ICountryFlags,
    name: ICountryName,
    capital: string[],
    region: string,
    area: number,
    population: number,
}

interface ICountryFlags {
    png: string,
    svg: string,
}

interface ICountryName {
    common: string,
    official: string,
    nativeName: Record<string, ICountryNativeName | undefined>,
}

interface ICountryNativeName {
    common: string,
    official: string,
}



