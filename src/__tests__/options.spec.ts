import { describe, it, expect } from 'vitest'

import { deepMergeOptions } from '../deep-merge-options';

const defOptions = {
  icons: {
    home: 'home',
    user: 'account',
  }
};

describe('deepMergeOptions', () => {
  it('use base values', () => {
         const result = deepMergeOptions(defOptions, {
    });
    expect(result.icons).toEqual(defOptions.icons);
  });

  it('marge nested object', () => {
    const result = deepMergeOptions(defOptions, {
      icons: {
        home: 'house'
      }
    });
    expect(result.icons.home).toEqual('house');
    expect(result.icons.user).toEqual('account');
  });

})
