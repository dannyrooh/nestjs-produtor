export default abstract class ReportDataProvider {

    abstract areaFazenda(): Promise<number>;
    abstract areaPorCultura(): Promise<any>;
    abstract areaporEstado(): Promise<any>;
    abstract areaUsoSolo(): Promise<any>;
    abstract quantidadeFazenda(): Promise<number>;
}