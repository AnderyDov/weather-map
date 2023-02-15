export function getSunTime(time: number, diff: number): string {
    time = Number(time.toString() + '000');
    diff = Number(diff.toString() + '000');

    const result = new Date(time + diff).toUTCString().split(' ')[4];

    return result;
}
