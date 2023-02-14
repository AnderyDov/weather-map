import { getWeather } from '../../helpers/api.service';

export default async function handler(req, res) {
    const weather = await getWeather('moscow');

    res.status(200).json(weather);
}
