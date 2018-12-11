import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage';

it('should render Loading Page correctly', () => {
	const wrapper = shallow( <LoadingPage />)
	expect(wrapper).toMatchSnapshot();
});