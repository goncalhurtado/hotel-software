import { parse, format } from 'date-fns';

export const formatDate = (date) => {


    const parsedDate = parse(date, "EEE MMM dd yyyy HH:mm:ss 'GMT'XXX 'hora estándar de Argentina'", new Date());
    console.log(parsedDate);
    // Formatear la fecha en 'yyyy-MM-dd'

    const formattedDate = format(parsedDate, 'yyyy-MM-dd');
    console.log(formattedDate);
}