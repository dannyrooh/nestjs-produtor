import { Test, TestingModule } from '@nestjs/testing';
import { UfController } from './uf.controller';
import UfResponseConverter from './converter/uf.response.converter';
import UfModelConverter from '../dataprovider/converter/uf.model.converter';
import { UfUseCaseExport, UfDataProviderExport } from './../../geo.module'

describe('UfController', () => {
  let controller: UfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({

      controllers: [UfController],
      providers: [
        UfResponseConverter,
        UfUseCaseExport,
        UfModelConverter,
        UfDataProviderExport],


    }).compile();

    controller = module.get<UfController>(UfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
