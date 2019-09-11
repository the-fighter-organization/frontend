import { format } from 'date-fns'
import pt from 'date-fns/locale/pt'

export default class DateHandler {
    public static dateToInputDate(date?: Date | string) {
        if (!date) {
            return ''
        }

        return format(date, 'YYYY-MM-DD')
    }

    public static dateToShortDateTimeString(date?: Date | string) {
        if (!date) {
            return '';
        }

        return format(date, 'DD/MM/YYYY HH:mm', { locale: pt })
    }

    public static dateToShortDateString(date?: Date | string) {
        if (!date) {
            return '';
        }

        return format(date, 'DD/MM/YYYY', { locale: pt })
    }

    public static format(date: Date | string, dateFormat: string) {
        if (!date) {
            return '';
        }

        return format(date, dateFormat, { locale: pt })
    }
}