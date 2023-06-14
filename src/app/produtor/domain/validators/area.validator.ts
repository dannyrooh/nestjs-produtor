import { AreaEntity } from "../entities/area.entity";
import AreaNaoInformadaError from "../exception/areanaoinformada.error";
import AreaNegativaError from "../exception/areanegativa.error";
import AreaTotalError from "../exception/areatotal.error";


export default class AreaValidator {

    public async execute(areaEntity: AreaEntity) {

        if ((areaEntity === null) || (areaEntity == undefined)) throw new AreaNaoInformadaError();

        const validar_area = (value: number) => {

            if ((!value) || (isNaN(value)) || (value === 0)) throw new AreaNaoInformadaError();

            if (value < 0) throw new AreaNegativaError();

        }

        validar_area(areaEntity.agricultavel)
        validar_area(areaEntity.vegetacao)
        validar_area(areaEntity.total)

        if (areaEntity.agricultavel + areaEntity.vegetacao > areaEntity.total) throw new AreaTotalError()

    }

}