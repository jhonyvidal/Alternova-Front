import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FormatDate',
    standalone: true
})
export class FormatDate implements PipeTransform {
    /**
   * Transforms a given date value into a formatted string.
   * The format is "DayOfWeek, Day Month Year, Hours:Minutes am/pm".
   * 
   * Example:
   * Input: 2023-06-20T15:30:00
   * Output: "Tue, 20 June 2023, 3:30 pm"
   * 
   * @param valor - The date value to be transformed.
   * @returns The formatted date string.
   */
  transform(valor: any): any {
    const fecha = new Date(valor);

    const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    const diaSemana = diasSemana[fecha.getDay()];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();
    let horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const ampm = horas >= 12 ? 'pm' : 'am';

    horas = horas % 12 || 12;

    const fechaFormateada = `${diaSemana}, ${dia} ${mes} ${año}, ${horas}:${minutos} ${ampm}`;

    return fechaFormateada;
    
  }
}

    