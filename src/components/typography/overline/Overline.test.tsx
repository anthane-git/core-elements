import { render } from '@testing-library/react';

import { Overline } from './Overline';
import { Props } from './Overline.interface';

describe('Test Overline', () => {
	let props: Props;

	beforeEach(() => {
		props = {};
	});

	const renderComponent = () => render(<Overline {...props} />);

	it('should have button className', () => {
		const { container } = renderComponent();

		expect(container.getElementsByClassName('typography').length).toBe(1);
	});
});
