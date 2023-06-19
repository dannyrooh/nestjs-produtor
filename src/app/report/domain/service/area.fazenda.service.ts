import { Injectable, Scope } from "@nestjs/common";
import ReportDataProvider from "../dataprovider/report.dataprovider";
import AreaFazendaUseCase from "../usecase/area.fazenda.usecase";

@Injectable({ scope: Scope.REQUEST })
export default class AreaFazendaService implements AreaFazendaUseCase {

    constructor(
        private readonly reportDataProvider: ReportDataProvider,
    ) { }

    async execute(): Promise<number> {
        let area = await this.reportDataProvider.areaFazenda();

        if (!area) return Promise.resolve(0.00);

        return area;
    }



}
