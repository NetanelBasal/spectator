import { createHostFactory, SpectatorWithHost } from '@netbasal/spectator';

import { DynamicComponent } from '../dynamic/dynamic.component';

import { ConsumeDynamicComponent } from './consume-dynamic.component';

describe('ConsumeDynamicComponent', () => {
  let host: SpectatorWithHost<ConsumeDynamicComponent>;

  const createHost = createHostFactory({
    declarations: [DynamicComponent],
    entryComponents: [DynamicComponent],
    component: ConsumeDynamicComponent
  });

  it('should work', () => {
    host = createHost(`<app-consume-dynamic></app-consume-dynamic>`);
    expect(host.component).toBeDefined();
  });

  it('should render the dynamic component', () => {
    host = createHost(`<app-consume-dynamic></app-consume-dynamic>`);
    expect(host.queryHost('.dynamic')).toHaveText('dynamic works!');
  });
});
