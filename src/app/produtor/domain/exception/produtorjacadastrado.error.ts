export default class ProdutorJaCadastradoError extends Error {


    public static MESSAGE_ERROR(k?: string, id?: string) {

        let msg = '';
        if (k) {
            msg = ((k.length == 11) ? ' CPF: ' : ' CNPJ: ') + k;
        }

        if (id) {
            msg += ' ID: ' + id;
        }

        return 'Produtor já cadastrado ' + msg;
    }

    constructor(k?: string, id?: string) {
        super(ProdutorJaCadastradoError.MESSAGE_ERROR(k, id))
    }
}