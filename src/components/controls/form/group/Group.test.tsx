import { render } from '@testing-library/react';

import { Group } from './Group';
import { Props } from './Group.interface';

describe('Test Group', () => {
	let props: Props;

	beforeEach(() => {
		props = {
			className: 'control',
			type: 'password',
		};
	});

	const renderComponent = () => render(<Group {...props} />);

	it('should have input className', () => {
		const { container } = renderComponent();

		expect(container.getElementsByClassName('group').length).toBe(1);
	});
});
