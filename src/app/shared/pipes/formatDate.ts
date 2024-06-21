import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FormatDate',
    standalone: true
})
export class FormatDate implements PipeTransform {
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

    