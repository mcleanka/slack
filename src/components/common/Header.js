import { Avatar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

function Header() {
	return (
		<HeaderContainer>
			<HeaderLeft>
				<HeaderAvatar

				/>
			</HeaderLeft>

			{/* Search */}

			{/* Header Right */}
		</HeaderContainer>
	)
}

export default Header;

const HeaderContainer = styled.div``;
const HeaderLeft = styled.div``;
const HeaderAvatar = styled(Avatar)``;