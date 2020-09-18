import { TestBed } from '@angular/core/testing';

import { SpyObject } from '../mock';
import { Token } from '../token';

/**
 * @internal
 */
export abstract class BaseSpectator {
  public inject<T>(token: Token<T>): SpyObject<T> {
    return (<any>TestBed).inject(token) as SpyObject<T>;
  }
}
