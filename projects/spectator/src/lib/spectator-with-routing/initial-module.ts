import { ActivatedRoute, Router } from '@angular/router';
import { initialSpectatorModule } from '@netbasal/spectator';

import { ModuleMetadata } from '../base/initial-module';

import { ActivatedRouteStub } from './activated-route-stub';
import { SpectatorWithRoutingOptions } from './options';
import { RouterLinkDirectiveStub } from './router-link-stub';

/**
 * @internal
 */
export function initialRoutingModule<S>(options: Required<SpectatorWithRoutingOptions<S>>): ModuleMetadata {
  const moduleMetadata = initialSpectatorModule(options);

  if (options.mockRouterLinks) {
    moduleMetadata.declarations.push(RouterLinkDirectiveStub);
  }

  moduleMetadata.providers.push(options.mockProvider(Router));

  moduleMetadata.providers.push([
    {
      provide: ActivatedRouteStub,
      useFactory: () =>
        new ActivatedRouteStub({
          params: options.params,
          queryParams: options.queryParams,
          data: options.data
        })
    },
    {
      provide: ActivatedRoute,
      useExisting: ActivatedRouteStub
    }
  ]);

  return moduleMetadata;
}
