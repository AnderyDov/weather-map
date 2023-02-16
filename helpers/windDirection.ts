export function windDirection(num: number) {
    switch (true) {
        case num >= 338 && num <= 360 && num >= 0 && num < 23:
            return 'N';
        case num >= 23 && num < 68:
            return 'NE';
        case num >= 68 && num < 113:
            return 'E';
        case num >= 113 && num < 158:
            return 'SE';
        case num >= 158 && num < 203:
            return 'S';
        case num >= 203 && num < 248:
            return 'SW';
        case num >= 248 && num < 293:
            return 'W';
        case num >= 293 && num < 338:
            return 'NW';
        default:
            return '?';
    }
}
