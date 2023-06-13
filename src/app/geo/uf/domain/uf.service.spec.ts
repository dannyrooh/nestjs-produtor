import { Test, TestingModule } from '@nestjs/testing';
import { UfService } from './uf.service';


const ufDataSourceMock = {
  create: jest.fn()
}

const ufModelConverter = {
  create: jest.fn()
}

describe('UfService', () => {
  let service: UfService;

  beforeEach(() => {
    // service = new UfService(ufDataSourceMock as any, ufModelConverter as any);
  });

});
