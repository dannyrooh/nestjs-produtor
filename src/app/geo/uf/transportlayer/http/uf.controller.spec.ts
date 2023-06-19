import { UfController } from './uf.controller';
import UfDTOConverter from '../converter/uf.dto.converter';
import { UfRepositoryMemory } from '../../datasource/repository/uf.repository.memory';
import { UfService } from '../../domain/uf.service';
import UfNotFoundError from '../../domain/exception/ufnotfound.error';

describe('UfController', () => {

  let controller: UfController;
  let service: UfService;
  let datasource: UfRepositoryMemory;
  let converter: UfDTOConverter;

  beforeEach(async () => {
    datasource = new UfRepositoryMemory();
    service = new UfService(datasource);
    converter = new UfDTOConverter;
    controller = new UfController(service, converter)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be return UF with id 1', async () => {
    let id = 1;
    const response = await controller.getById(id);
    expect(response.id).toEqual(id);
  });

  it('should be return UF="PR"', async () => {
    let UF = 'PR';
    const response = await controller.getByUf(UF);
    expect(response.uf).toEqual(UF);
  });

  it('should be httpError by Id', async () => {
    let id = 100;
    expect(() => controller.getById(id)).rejects.toThrowError(UfNotFoundError.UFNOFOUNDMESSAGE(id))
  });

  it('should be httpError by UF', async () => {
    let uf = 'PRPR';
    expect(() => controller.getByUf(uf)).rejects.toThrowError(UfNotFoundError.UFNOFOUNDMESSAGE(uf))
  });

});
