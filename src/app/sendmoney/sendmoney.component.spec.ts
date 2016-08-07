/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SendMoneyComponent } from './sendmoney.component';

describe('Component: Sendmoney', () => {
  it('should create an instance', () => {
    let component = new SendMoneyComponent();
    expect(component).toBeTruthy();
  });
});
