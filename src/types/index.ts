
export interface ICountry {
    name: string,
    capital: string,
    population: number,
    area: number,
    region: string,
    flag: string,
};

export enum Color {
    Primary = 'primary',
    Secondary = 'secondary',
    Success = 'success',
    Danger = 'danger',
    Warning = 'warning',
    Info = 'info',
    Light = 'light',
    Dark = 'dark',
};

export type BadgeLable = 'area' | 'population';