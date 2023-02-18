export function dayLength(sunrise: number, sunset: number) {
    const num = sunset - sunrise;
    const hours = Math.floor(num / 60 / 60);
    const minutes = Math.floor(num / 60) - hours * 60;
    const seconds = num % 60;

    const result = `${hours}ч ${minutes}м ${seconds}с`;

    return result;
}
