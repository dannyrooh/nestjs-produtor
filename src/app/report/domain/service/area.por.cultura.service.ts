import { Injectable, Scope } from "@nestjs/common";
import ReportDataProvider from "../dataprovider/report.dataprovider";
import AreaFazendaUseCase from "../usecase/area.fazenda.usecase";
import AreaPorCulturaUseCase from "../usecase/area.por.cultura.usecase";

@Injectable({ scope: Scope.REQUEST })
export default class AreaPorCulturaService implements AreaPorCulturaUseCase {

    constructor(
        private readonly reportDataProvider: ReportDataProvider,
    ) { }

    async execute(): Promise<any> {
        let area = await this.reportDataProvider.areaPorCultura();

        if (!area) return null;

        return area;
    }



}
