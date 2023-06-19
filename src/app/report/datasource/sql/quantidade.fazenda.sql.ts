export default class QuantidadeFazendasSql {

    protected _sql = 'select count(1) as quantidade_total from produtor';

    public static SQL() {
        return (new QuantidadeFazendasSql())._sql;
    }


}

