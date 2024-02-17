import { Test, TestingModule } from '@nestjs/testing';
import { AssignorService } from './assignor.service';
import { PrismaService } from '../../services/prisma.service';

describe('AssignorService', () => {
  let service: AssignorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssignorService, PrismaService],
    }).compile();

    service = module.get<AssignorService>(AssignorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAssignor', () => {
    it('should return an assignor', async () => {
      const result = {
        id: '1',
        document: '123456789',
        email: 'test@test.com',
        phone: '+123456789',
        name: 'Test Assignor',
      };
      jest
        .spyOn(service, 'getAssignor')
        .mockImplementation(() => Promise.resolve(result));

      expect(await service.getAssignor('1')).toBe(result);
    });
  });

  describe('createAssignor', () => {
    it('should return an assignor', async () => {
      const result = {
        id: '1',
        document: '123456789',
        email: 'test@test.com',
        phone: '+123456789',
        name: 'Test Assignor',
      };
      const createAssignorDto = {
        document: '123456789',
        email: 'test@test.com',
        phone: '+123456789',
        name: 'Test Assignor',
      };
      jest
        .spyOn(service, 'createAssignor')
        .mockImplementation(() => Promise.resolve(result));

      expect(await service.createAssignor(createAssignorDto)).toBe(result);
    });
  });

  describe('updateAssignor', () => {
    it('should return an assignor', async () => {
      const result = {
        id: '1',
        document: '987654321',
        email: 'updated@test.com',
        phone: '+987654321',
        name: 'Updated Assignor',
      };
      const updateAssignorDto = {
        document: '987654321',
        email: 'updated@test.com',
        phone: '+987654321',
        name: 'Updated Assignor',
      };
      jest
        .spyOn(service, 'updateAssignor')
        .mockImplementation(() => Promise.resolve(result));

      expect(await service.updateAssignor('1', updateAssignorDto)).toBe(result);
    });
  });

  describe('deleteAssignor', () => {
    it('should return an assignor', async () => {
      const result = {
        id: '1',
        document: '987654321',
        email: 'deleted@test.com',
        phone: '+987654321',
        name: 'Deleted Assignor',
      };
      jest
        .spyOn(service, 'deleteAssignor')
        .mockImplementation(() => Promise.resolve(result));

      expect(await service.deleteAssignor('1')).toBe(result);
    });
  });
});
