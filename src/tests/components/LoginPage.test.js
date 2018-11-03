import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render login page correctly', () => {
	const wrapper = shallow(<LoginPage />);
	expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
	const onButtonSpy = jest.fn();
	const wrapper = shallow(<LoginPage startLogin={onButtonSpy}/>);
	wrapper.find('button').simulate('click');
	expect(onButtonSpy).toHaveBeenCalled();
});