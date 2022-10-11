import { render } from '@testing-library/react';

import { Group } from './Group';
import { Props } from './Group.interface';

describe('Test Group', () => {
	let props: Props;

	beforeEach(() => {
		props = {
			className: 'group',
			type: 'password',
		};
	});

	const renderComponent = () => render(<Group {...props} />);

	it('should have group className', () => {
		const { container } = renderComponent();

		expect(container.getElementsByClassName('group').length).toBe(2);
	});
});
