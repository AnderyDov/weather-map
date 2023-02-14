import { atom } from 'recoil';

export const weatherState = atom({
    key: 'weatherState',
    default: {
        coord: {
            lon: 11111111111111,
            lat: 11111111111111,
        },
        weather: [
            {
                id: 11111111111111,
                main: '',
                description: '',
                icon: '',
            },
        ],
        base: 'stations',
        main: {
            temp: 11111111111111,
            feels_like: 11111111111111,
            temp_min: 11111111111111,
            temp_max: 11111111111111,
            pressure: 11111111111111,
            humidity: 11111111111111,
            sea_level: 11111111111111,
            grnd_level: 11111111111111,
        },
        visibility: 11111111111111,
        wind: {
            speed: 11111111111111,
            deg: 11111111111111,
            gust: 11111111111111,
        },
        clouds: {
            all: 11111111111111,
        },
        dt: 11111111111111,
        sys: {
            type: 11111111111111,
            id: 11111111111111,
            country: '',
            sunrise: 11111111111111,
            sunset: 11111111111111,
        },
        timezone: 11111111111111,
        id: 11111111111111,
        name: '',
        cod: 11111111111111,
    },
});
