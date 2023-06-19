export default class AreaUsoSoloSql {

    protected _sql = 'select sum(pro_area_agricultavel) area_agricultavel, sum(pro_area_vegetacao) area_vegetacao from produtor p ';

    public static SQL() {
        return (new AreaUsoSoloSql())._sql;
    }


}


