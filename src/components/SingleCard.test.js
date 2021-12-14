import { shallow } from 'enzyme';
import React from 'react';
import SingleCard from './SingleCard';

it('expect to render Card component', () => {

    const mockCard = { "src": "Mock-Card", matched: false };

    expect(shallow(<SingleCard card={mockCard} />)).toMatchSnapshot();
})
