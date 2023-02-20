import styled from "styled-components";

const HeaderWrapper = styled.div`
    background-color: rgb(32, 32, 61);
    height: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const Title = styled.h1`
    height: 64px;
    pointer-events: none;
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <Title>Project Management Board</Title>
        </HeaderWrapper>
    );
}
