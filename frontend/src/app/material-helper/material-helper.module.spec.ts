import { MaterialHelperModule } from './material-helper.module';

describe('MaterialHelperModule', () => {
  let materialHelperModule: MaterialHelperModule;

  beforeEach(() => {
    materialHelperModule = new MaterialHelperModule();
  });

  it('should create an instance', () => {
    expect(materialHelperModule).toBeTruthy();
  });
});
