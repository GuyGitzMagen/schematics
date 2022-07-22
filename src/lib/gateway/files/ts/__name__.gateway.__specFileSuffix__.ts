import { Test, TestingModule } from '@nestjs/testing';
import { <%= classify(name) %>Gateway } from './<%= name %>.gateway';
import { createMock } from '@golevelup/ts-jest';

describe('<%= classify(name) %>Gateway', () => {
  let gateway: <%= classify(name) %>Gateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [<%= classify(name) %>Gateway],
    })
      .useMocker(() => createMock())
      .compile();

    gateway = module.get<<%= classify(name) %>Gateway>(<%= classify(name) %>Gateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
