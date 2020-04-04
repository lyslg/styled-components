import React, { Component } from "react";
import styled, {
	createGlobalStyle,
	css,
	keyframes,
	ThemeProvider
} from "styled-components";
import theme from './theme'

const GlobalStyle = createGlobalStyle`
    body{
        padding:0;
        margin:0;
    }
`;
const awesomeCard = css`
	box-shodow: 0 4px 6px rgba(50, 50, 93, 0.11) 0 1px 3px rgba(0, 0, 0, 0.08);
	background-color: white;
	border-radius: 10px;
	padding: 20px;
`;

const Input = styled.input.attrs({
	required: true
})`
	border: none;
	${awesomeCard};
`;

const Card = styled.div`
	background-color: red;
`;

const Button = styled.button`
	border-radius: 30px;
    padding: 25px 15px;
    background-color: ${props => props.theme.successColor}
`;

export default class App extends Component {
	render() {
		return (
			<Container>
				<GlobalStyle></GlobalStyle>
				<ThemeProvider theme={theme}>
					{/* <Input placeholder="hello" /> */}
					{/* <Button>Hello</Button>
				<Button danger rotationTime={5}>Hello</Button>
            <Anchor href="https://google.com">Go to google</Anchor> */}
					<Form></Form>
				</ThemeProvider>
			</Container>
		);
	}
}

const Form = () => (
	<Card>
		<Button>Hello</Button>
	</Card>
);

const Container = styled.div`
	height: 100vh;
	width: 100%;
    background-color: pink;
    ${Card} {
        background-color: blue;
    }
`;
// const Button = styled.button`
// 	border-radius: 50px;
// 	padding: 5px;
// 	min-width: 120px;
// 	color: white;
// 	font-weight: 600;
// 	-webkit-appearance: none;
//     cursor: pointer;
//     &:active,
//     &:focus {
//         outline:none;
//     }
//     background-color: ${props => (props.danger ? "#e74c3c" : "#2ecc71")};
//     ${props => {
// 		if (props.danger) {
// 			return css`
// 				animation: ${rotation} ${props.rotationTime}s linear infinite;
// 			`;
// 		}
// 	}}
// }
// `;

const Anchor = styled(Button.withComponent("a"))`
	text-decoration: none;
`;

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    
    to {
        transform: rotate(360deg);
    }
`;
