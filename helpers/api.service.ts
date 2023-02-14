import axios from 'axios';

async function getWeather(city: string) {
    const token = process.env.WEATHER_TOKEN;
    const { data } = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather',
        {
            params: {
                q: city,
                appid: token,
                lang: 'ru',
                units: 'metric',
            },
        },
    );
    return data;
}
export { getWeather };
