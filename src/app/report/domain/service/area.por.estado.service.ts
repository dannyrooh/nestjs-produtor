import { Injectable, Scope } from "@nestjs/common";
import ReportDataProvider from "../dataprovider/report.dataprovider";
import AreaPorEstadoUseCase from "../usecase/area.por.estado.usecase";

@Injectable({ scope: Scope.REQUEST })
export default class AreaPorEstadoService implements AreaPorEstadoUseCase {

    constructor(
        private readonly reportDataProvider: ReportDataProvider,
    ) { }

    async execute(): Promise<any> {
        let area = await this.reportDataProvider.areaporEstado();

        if (!area) return null;

        return area;
    }



}
