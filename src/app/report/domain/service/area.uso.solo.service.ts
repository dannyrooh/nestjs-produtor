import { Injectable, Scope } from "@nestjs/common";
import ReportDataProvider from "../dataprovider/report.dataprovider";
import AreaPorUsoSoloUseCase from "../usecase/area.uso.solo.usecase";

@Injectable({ scope: Scope.REQUEST })
export default class AreaPorUsoSoloService implements AreaPorUsoSoloUseCase {

    constructor(
        private readonly reportDataProvider: ReportDataProvider,
    ) { }

    async execute(): Promise<any> {
        let area = await this.reportDataProvider.areaUsoSolo();

        if (!area) return null;

        return area;
    }



}
