import { render } from '@testing-library/react';

import { Input } from './Input';
import { Props } from './Input.interface';

describe('Test Input', () => {
	let props: Props;

	beforeEach(() => {
		props = {
			className: 'control',
			type: 'password',
		};
	});

	const renderComponent = () => render(<Input {...props} />);

	it('should have input className', () => {
		const { container } = renderComponent();

		expect(container.getElementsByClassName('input').length).toBe(1);
	});
});
