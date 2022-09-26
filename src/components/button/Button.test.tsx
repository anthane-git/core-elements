import { render } from '@testing-library/react';

import { Button } from './Button';
import { ButtonProps } from './Button.interface';

describe('Test Button', () => {
	let props: ButtonProps;

	beforeEach(() => {
		props = {
			label: 'button',
		};
	});

	const renderComponent = () => render(<Button {...props} />);

	it('should have button className', () => {
		const { container } = renderComponent();

		expect(container.getElementsByClassName('button').length).toBe(1);
	});
});
