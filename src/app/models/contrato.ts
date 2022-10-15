export interface Contrato{
    id : number,
    status: string,
    responsavel: string,
    sede: string,
    criadoEm: string,
    alteradoEm?: string,
    tipoContrato: string
}
