import React from "react";
import styled from "styled-components";
import { Search } from "@mui/icons-material";

const Navbar = () => {
	const Container = styled.div`
		height: 60px;
	`;

	const Wrapper = styled.div`
		padding: 10px 20px;
		display: flex;
		justify-content: space-between;
	`;

	const Left = styled.div`
		flex: 1;
	`;

	const Language = styled.span`
		font-size: 14px;
		cursor: pointer;
	`;

	const SearchContainer = styled.div`
		border: 1px solid lightgray;
	`;

	const Center = styled.div`
		flex: 1;
	`;

	const Right = styled.div`
		flex: 1;
	`;

	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<input type="text" />
						<Search />
					</SearchContainer>
				</Left>
				<Center>center</Center>
				<Right>right</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
