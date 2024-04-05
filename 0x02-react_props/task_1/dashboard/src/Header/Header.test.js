import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header test', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    it('renders without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('renders img tag', () => {
        expect(wrapper.find('img')).toHaveLength(1);
    });

    it('renders h1 tag', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });
});
