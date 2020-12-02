import * as React from 'react';
import { ReactTestUtils } from './react-test.utils';

describe('ReactTestUtils', () => {

    describe('#boxWrap', () => {
        const component = <input/>;

        it('should set defined box value', async () => {
            const box = { width: '150', height: '50' };
            const wrapper = ReactTestUtils.boxWrap(component, box);
            await expect({ component: wrapper }).toMatchComponentImageAsync();
        });

        it('should set default value, any key in box is undefined', async () => {
            const wrapper = ReactTestUtils.boxWrap(component, {});
            await expect({ component: wrapper }).toMatchComponentImageAsync();
        });
    });
});
