export default class AreaPorCulturaSql {

    protected _sql =
        'with q as ( ' +
        'select proc_cultura as id, sum(pro_area_agricultavel) area_agricultavel, sum(pro_area_vegetacao) area_vegetacao, sum(pro_area_total) area_total  ' +
        '  from produtor_cultura ' +
        '  join produtor on pro_id = proc_produtor ' +
        'group by proc_cultura) ' +
        'select  ' +
        '  cul_id as id,' +
        '  cul_nome as nome,' +
        '  area_agricultavel,' +
        '  area_vegetacao,' +
        '  area_total  ' +
        'from cultura ' +
        'left join q ' +
        '  on q.id = cul_id ';

    public static SQL() {
        return (new AreaPorCulturaSql())._sql;
    }


}
