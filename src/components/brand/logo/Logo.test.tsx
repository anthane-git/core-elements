import { render } from '@testing-library/react';

import { Logo } from './Logo';
import { Props } from './Logo.props';

describe('Test Logo', () => {
	let props: Props;

	beforeEach(() => {
		props = {
			className: 'logo',
		};
	});

	const renderComponent = () => render(<Logo {...props} />);

	it('should have logo className', () => {
		const { container } = renderComponent();

		expect(container.getElementsByClassName('logo').length).toBe(1);
	});
});
