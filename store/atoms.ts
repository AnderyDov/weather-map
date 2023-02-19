import { atom } from 'recoil';

export const defaultDatas = {
    coord: {
        lon: 37.57,
        lat: 55.75,
    },
    weather: [
        {
            id: 0,
            main: '__________',
            description: '__________',
            icon: '__________',
        },
    ],
    base: 'stations',
    main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
    },
    visibility: 0,
    wind: {
        speed: 0,
        deg: 0,
        gust: 0,
    },
    clouds: {
        all: 0,
    },
    dt: 0,
    sys: {
        type: 0,
        id: 0,
        country: '__________',
        sunrise: 0,
        sunset: 0,
    },
    timezone: 0,
    id: 0,
    name: '__________',
    cod: 0,
};

export const errorState = atom({
    key: 'errorState',
    default: '',
});

export const cityState = atom({
    key: 'cityState',
    default: '',
});

export const weatherState = atom({
    key: 'weatherState',
    default: defaultDatas,
});
