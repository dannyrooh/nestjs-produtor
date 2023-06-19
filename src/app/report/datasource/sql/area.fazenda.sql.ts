export default class AreaTotalFazendaSql {

    protected _sql = 'select sum(pro_area_total) as area_total from produtor p';

    public static SQL() {
        return (new AreaTotalFazendaSql())._sql;
    }

}

