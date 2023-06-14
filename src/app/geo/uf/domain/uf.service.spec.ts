import { UfService } from './uf.service';
import { UfRepositoryMemory } from '../dataprovider/repository/uf.repository.memory';
import UfNotFoundError from './exception/ufnotfound.error';


describe('UfService', () => {
  let service: UfService;
  let datasource: UfRepositoryMemory;

  beforeEach(() => {
    datasource = new UfRepositoryMemory();
    service = new UfService(datasource);
  });


  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be Exception NotFound by Id', async () => {
    let uf = 100;
    expect(() => service.findOne(uf)).rejects.toThrow(UfNotFoundError)
  });

  it('should be find Id = 1', async () => {
    let uf = 1;
    expect(() => service.findOne(uf)).toBeDefined();
  });

  it('should be Exception NotFound by UF', async () => {
    let uf = 'PRPR';
    expect(() => service.findOneByUf(uf)).rejects.toThrow(UfNotFoundError)
  });

  it('should be find uf = "PR"', async () => {
    let uf = 'PR';
    expect(() => service.findOneByUf(uf)).toBeDefined();
  });

  it('should be list not empty', async () => {
    expect(() => service.findAll()).toBeDefined();
  });





});
