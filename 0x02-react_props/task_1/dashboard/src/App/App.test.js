import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App tests', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<App />)
	})
	it('renders without crashing', () => {

		expect(wrapper).toBeDefined();
	});

	it('contains Notification component', () => {

		expect(wrapper.find('Notification')).toHaveLength(1);
	});

	it('contain Login component', () => {
		expect(wrapper.find('Login')).toHaveLength(1)
	});

	it('contain Header component', () => {
		expect(wrapper.find('Header')).toHaveLength(1)
	});

	it('contain Footer component', () => {
		expect(wrapper.find('Footer')).toHaveLength(1)
	});


	
});