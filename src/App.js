import styled, { createGlobalStyle } from "styled-components";

import Header from "./components/Header/Header";
import Backlog from "./pages/Backlog/Backlog";
import Board from "./pages/Board/Board";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont,
        'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
        'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

const AppWrapper = styled.div`
    text-align: center;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <AppWrapper>
                <Header />
                <Board />
                <Backlog />
            </AppWrapper>
        </>
    );
}

export default App;
