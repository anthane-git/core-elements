import { render } from '@testing-library/react';

import { Caption } from './Caption';
import { Props } from './Caption.interface';

describe('Test Caption', () => {
	let props: Props;

	beforeEach(() => {
		props = {};
	});

	const renderComponent = () => render(<Caption {...props} />);

	it('should have button className', () => {
		const { container } = renderComponent();

		expect(container.getElementsByClassName('typography').length).toBe(1);
	});
});
