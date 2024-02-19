import { Test, TestingModule } from '@nestjs/testing';
import { PayableService } from './payable.service';
import { PrismaService } from '../../services/prisma.service';

describe('PayableService', () => {
  let service: PayableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PayableService, PrismaService],
    }).compile();

    service = module.get<PayableService>(PayableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getPayable', () => {
    it('should return a payable', async () => {
      const result = {
        id: '1',
        value: 100.5,
        emissionDate: new Date(),
        assignorId: 'ba851db8-d981-485f-942b-463e8ae9208d',
      };
      jest
        .spyOn(service, 'getPayable')
        .mockImplementation(() => Promise.resolve(result));

      expect(await service.getPayable('1')).toBe(result);
    });
  });

  describe('createPayable', () => {
    it('should return a payable', async () => {
      const result = {
        id: '1',
        value: 100.5,
        emissionDate: new Date(),
        assignorId: 'ba851db8-d981-485f-942b-463e8ae9208d',
      };
      const createPayableDto = {
        value: 100.5,
        emissionDate: new Date(),
        assignorId: 'ba851db8-d981-485f-942b-463e8ae9208d',
      };
      jest
        .spyOn(service, 'createPayable')
        .mockImplementation(() => Promise.resolve(result));

      expect(await service.createPayable(createPayableDto)).toBe(result);
    });
  });

  describe('updatePayable', () => {
    it('should return a payable', async () => {
      const result = {
        id: '1',
        value: 200.5,
        emissionDate: new Date(),
        assignorId: 'ba851db8-d981-485f-942b-463e8ae9208d',
      };
      const updatePayableDto = {
        value: 200.5,
        emissionDate: new Date(),
        assignorId: 'ba851db8-d981-485f-942b-463e8ae9208d',
      };
      jest
        .spyOn(service, 'updatePayable')
        .mockImplementation(() => Promise.resolve(result));

      expect(await service.updatePayable('1', updatePayableDto)).toBe(result);
    });
  });

  describe('deletePayable', () => {
    it('should return a payable', async () => {
      const result = {
        id: '1',
        value: 200.5,
        emissionDate: new Date(),
        assignorId: 'ba851db8-d981-485f-942b-463e8ae9208d',
      };
      jest
        .spyOn(service, 'deletePayable')
        .mockImplementation(() => Promise.resolve(result));

      expect(await service.deletePayable('1')).toBe(result);
    });
  });
});
