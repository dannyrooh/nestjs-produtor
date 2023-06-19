import { Injectable, Scope } from "@nestjs/common";
import ReportDataProvider from "../../domain/dataprovider/report.dataprovider";
import { DataSource } from "typeorm";
import AreaTotalFazendaSql from "../sql/area.fazenda.sql";
import AreaPorCulturaSql from "../sql/area.por.cultura.sql";
import AreaPorEstadoSql from "../sql/area.por.estado.sql";
import AreaUsoSoloSql from "../sql/area.uso.solo.sql";
import QuantidadeFazendasSql from "../sql/quantidade.fazenda.sql";

@Injectable({ scope: Scope.REQUEST })
export class ReportRepository implements ReportDataProvider {

    constructor(private readonly dataSource: DataSource) { }

    areaPorCultura(): Promise<any> {
        return this.dataSource.query(AreaPorCulturaSql.SQL());
    }
    areaporEstado(): Promise<any> {
        return this.dataSource.query(AreaPorEstadoSql.SQL());
    }
    areaUsoSolo(): Promise<any> {
        return this.dataSource.query(AreaUsoSoloSql.SQL());
    }
    quantidadeFazenda(): Promise<number> {
        return this.dataSource.query(QuantidadeFazendasSql.SQL());
    }

    async areaFazenda(): Promise<number> {
        return this.dataSource.query(AreaTotalFazendaSql.SQL());
    }

}