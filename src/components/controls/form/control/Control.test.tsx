import { render } from '@testing-library/react';

import { Control } from './Control';
import { Props } from './Control.interface';

describe('Test Control', () => {
	let props: Props;

	beforeEach(() => {
		props = {
			className: 'control',
		};
	});

	const renderComponent = () => render(<Control {...props} />);

	it('should have control className', () => {
		const { container } = renderComponent();

		expect(container.getElementsByClassName('control').length).toBe(1);
	});
});
