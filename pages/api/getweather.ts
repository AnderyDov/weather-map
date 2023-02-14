import { AxiosError } from 'axios';
import { getWeather } from '../../helpers/api.service';
import { IGetWeather } from '../../interfaces/IGetWeather';

export default async function handler(req, res) {
    console.log(req.body);
    if (req.body.city && req.body.city !== '') {
        try {
            const weather: IGetWeather = await getWeather(req.body.city.trim());

            res.status(200).json(weather);
        } catch (err: unknown) {
            if (
                err instanceof AxiosError &&
                err.response?.data?.cod === '404'
            ) {
                res.status(404).json({
                    message: 'Такой населённый пункт не найден',
                });
            } else if (
                err instanceof AxiosError &&
                err.response?.data?.cod === 401
            ) {
                res.status(401).json({
                    message: 'Проблемы с сесрвером попробуйте позже',
                });
            } else {
                res.status(408).json({
                    message: 'Что пошло не так попробуйте позже',
                });
            }
        }
    } else {
        console.log('некорректное название населённого пункта');
    }
}
