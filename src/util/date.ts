import { format } from 'date-fns'
import pt from 'date-fns/locale/pt'

export default class DateHandler {
    public static dateToInputDate(date?:Date | string){
        if(!date){
            return ''
        }

        return format(date, 'YYYY-MM-DD')
    }

    public static dateToShortDateTimeString(date?: Date | string){
        if(!date){
            return '';
        }

        return format(date, 'DD/MM/YYYY HH:mm', {locale: pt})
    }
}