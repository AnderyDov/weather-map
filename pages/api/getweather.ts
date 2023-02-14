import { getWeather } from '../../helpers/api.service';
import { IGetWeather } from '../../interfaces/IGetWeather';

export default async function handler(req, res) {
    try {
        const weather: IGetWeather = await getWeather('moscow');

        res.status(200).json(weather);
    } catch (error) {
        res.status(200).json({
            message: 'Что пошло не так попробуйте позже',
        });
    }
}
