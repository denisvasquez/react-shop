import React from 'react';
import Navigation from '@components/Navigation';

const Layout = ({ children }) => {
	return (
		<div className="Layout">
			<Navigation />
			{children}
		</div>
	);
}

export default Layout;
