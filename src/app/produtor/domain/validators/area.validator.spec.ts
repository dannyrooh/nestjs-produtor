import { AreaEntity } from "../entities/area.entity";
import AreaNaoInformadaError from "../exception/areanaoinformada.error";
import AreaNegativaError from "../exception/areanegativa.error";
import AreaTotalError from "../exception/areatotal.error";
import AreaValidator from "./area.validator";

describe('AreaValidator', () => {
    let areaEntity: AreaEntity;

    const valida = (entity = areaEntity, error = AreaNaoInformadaError) => expect(AreaValidator.execute(entity)).rejects.toThrowError(error);

    it('should be Exception AreaNaoInformadaError when null', async () => {
        valida(null)
    });

    it('should be Exception AreaNaoInformadaError when entity is undefined', async () => {
        valida()
    });

    it('should be Exception AreaNaoInformadaError when any property value = 0', async () => {
        valida(new AreaEntity(0, 0, 0))
        valida(new AreaEntity(10, 0, 0))
        valida(new AreaEntity(10, 10, 0))
    });

    it('should be Exception AreaNegativaError when any property value < 0', async () => {
        valida(new AreaEntity(-0.01, 1, 1), AreaNegativaError)
        valida(new AreaEntity(0.01, -1, 1), AreaNegativaError)
        valida(new AreaEntity(0.01, 1, -1), AreaNegativaError)
    });

    it('should be Exception AreaTotalError ', async () => {
        valida(new AreaEntity(1, 1, 1), AreaTotalError)
    });


});


