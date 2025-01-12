import { Test, TestingModule } from '@nestjs/testing';
import { <%= classify(name) %>Service } from './<%= name %>.service';
import { createMock } from '@golevelup/ts-jest';

describe('<%= classify(name) %>Service', () => {
  let service: <%= classify(name) %>Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [<%= classify(name) %>Service],
    })
      .useMocker(() => createMock())
      .compile();

    service = module.get<<%= classify(name) %>Service>(<%= classify(name) %>Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
