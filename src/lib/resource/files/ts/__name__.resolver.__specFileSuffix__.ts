import { Test, TestingModule } from '@nestjs/testing';
import { <%= classify(name) %>Resolver } from './<%= name %>.resolver';
import { <%= classify(name) %>Service } from './<%= name %>.service';
import { createMock } from '@golevelup/ts-jest';

describe('<%= classify(name) %>Resolver', () => {
  let resolver: <%= classify(name) %>Resolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [<%= classify(name) %>Resolver, <%= classify(name) %>Service],
    })
      .useMocker(() => createMock())
      .compile();

    resolver = module.get<<%= classify(name) %>Resolver>(<%= classify(name) %>Resolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
