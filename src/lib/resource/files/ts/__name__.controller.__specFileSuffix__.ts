import { Test, TestingModule } from '@nestjs/testing';
import { <%= classify(name) %>Controller } from './<%= name %>.controller';
import { <%= classify(name) %>Service } from './<%= name %>.service';
import { createMock } from '@golevelup/ts-jest';

describe('<%= classify(name) %>Controller', () => {
  let controller: <%= classify(name) %>Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [<%= classify(name) %>Controller],
      providers: [<%= classify(name) %>Service],
    })
      .useMocker(() => createMock())
      .compile();

    controller = module.get<<%= classify(name) %>Controller>(<%= classify(name) %>Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
