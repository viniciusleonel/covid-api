
// Inverter data para enviar para a API
// 18/03/2020 => 20200318

export function invertDate(date: string): string {
    const noSlash = date.replace(/\//g, '');
    const day = noSlash.slice(0, 2);
    const month = noSlash.slice(2, 4);
    const year = noSlash.slice(4, 8);
    return year + month + day;
}