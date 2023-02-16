export function windDirection(num: number) {
    switch (true) {
        case num >= 338 && num <= 360 && num >= 0 && num < 23:
            return 'С';
        case num >= 23 && num < 68:
            return 'СВ';
        case num >= 68 && num < 113:
            return 'В';
        case num >= 113 && num < 158:
            return 'ЮВ';
        case num >= 158 && num < 203:
            return 'Ю';
        case num >= 203 && num < 248:
            return 'ЮЗ';
        case num >= 248 && num < 293:
            return 'З';
        case num >= 293 && num < 338:
            return 'СЗ';
        default:
            return '?';
    }
}
