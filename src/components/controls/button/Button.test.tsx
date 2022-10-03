import { render } from '@testing-library/react';

import { Button } from './Button';
import { Props } from './Button.props';

describe('Test Button', () => {
	let props: Props;

	beforeEach(() => {
		props = {
			className: 'button',
			type: 'contained',
			label: 'button',
		};
	});

	const renderComponent = () => render(<Button {...props} />);

	it('should have button className', () => {
		const { container } = renderComponent();

		expect(container.getElementsByClassName('button').length).toBe(1);
	});
});
