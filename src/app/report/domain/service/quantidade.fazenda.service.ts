import { Injectable, Scope } from "@nestjs/common";
import ReportDataProvider from "../dataprovider/report.dataprovider";
import QuantidadeFazendaUseCase from "../usecase/quantidade.fazenda.usecase";

@Injectable({ scope: Scope.REQUEST })
export default class QuantidadeFazendaService implements QuantidadeFazendaUseCase {

    constructor(
        private readonly reportDataProvider: ReportDataProvider,
    ) { }

    async execute(): Promise<any> {
        let area = await this.reportDataProvider.quantidadeFazenda();

        if (!area) return null;

        return area;
    }



}
