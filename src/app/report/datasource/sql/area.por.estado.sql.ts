export default class AreaPorEstadoSql {

    protected _sql =

        'with q as ( ' +
        'select loc_uf as id, sum(pro_area_agricultavel) area_agricultavel, sum(pro_area_vegetacao) area_vegetacao, sum(pro_area_total) area_total  ' +
        '  from produtor  ' +
        '  join localidade  ' +
        '    on pro_localidade = loc_id ' +
        'group by 1) ' +
        'select  ' +
        '    uf_id as id,  ' +
        '    uf_uf as uf,  ' +
        '    uf_nome as nome, ' +
        '    area_agricultavel, ' +
        '    area_vegetacao, ' +
        '    area_total ' +
        '  from uf ' +
        '  left join q  ' +
        '    on q.id = uf_id ';


    public static SQL() {
        return (new AreaPorEstadoSql())._sql;
    }


}

