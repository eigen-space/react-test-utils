import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import 'jest-styled-components';
import { AnyDictionary } from '@eigenspace/common-types';
import { EmulateActionType } from '../enums/emulate.action.enum';
import { BoxWrapper, ReactTestUtilsConfig } from '..';

export class ReactTestUtils {
    private static themeWrapper?: React.ComponentClass;

    static init(config: ReactTestUtilsConfig): void {
        ReactTestUtils.themeWrapper = config.themeWrapper;
    }

    static renderComponent<P = {}, S = {}>(
        component: React.ReactElement<P>,
        props?: P
    ): ReactWrapper<P, S, React.Component> {
        if (props) {
            return mount<React.Component, P, S>(ReactTestUtils.themeWrap(React.cloneElement(component, props)));
        }

        return mount<React.Component, P, S>(ReactTestUtils.themeWrap(component));
    }

    static defaultPropsWrapper(func: Function): () => void {
        return jest.fn(() => func());
    }

    /**
     * Used to wrap component into box to test absolute positioned elements.
     */
    static boxWrap(component: React.ReactElement, box: BoxWrapper, props?: AnyDictionary): JSX.Element {
        const style: BoxWrapper = { ...box };
        style.width = style.width ? `${style.width}px` : 'fit-content';
        style.height = style.height ? `${style.height}px` : 'auto';

        const childComponent = React.cloneElement(component, props);
        return <div style={style}> {childComponent}</div>;
    }

    static themeWrap(component: React.ReactElement): React.ReactElement {
        if (!ReactTestUtils.themeWrapper) {
            return component;
        }

        return <ReactTestUtils.themeWrapper>{component}</ReactTestUtils.themeWrapper>;
    }

    /**
     * This method add class to element to be able use puppeteer's actions like hover and focus.
     */
    static emulateAction(wrapper: ReactWrapper, action: EmulateActionType, payload = ''): void {
        // @ts-ignore
        wrapper.getDOMNode().setAttribute(action, payload);
    }

    static waitWhileAsyncPollIsNotEmpty(): Promise<void> {
        return new Promise(resolve => setImmediate(resolve));
    }
}
