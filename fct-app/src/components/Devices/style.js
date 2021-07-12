import styled from 'styled-components';


export const Container = styled.div`
    background-color: #ff7043;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Encode Sans SC';
`

export const Counter = styled.div`
    color: #fff;
    text-align: center;

    span {
        font-size: 70px;
    }

    p {
        font-size: 15px;
        font-weight: 400;
        margin: 0;
    }
`

export const Spin = styled.div`
    position: absolute;
    background: #fff;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    box-sizing: border-box;
    transform-origin: -100% -200%;
    animation: rotation ${props => props.time}s infinite linear;

    @keyframes rotation { 
        from { 
            transform: rotate(0deg); 
        } to { 
            transform: rotate(360deg); 
        }
    }
`

export const SpinWrapper = styled.div`
    position: absolute;
    top: 65%;
    left: 55%;
    width: 100px;
    height: 100px;
    box-sizing: border-box;
`

export const Footer = styled.div`
    width: 100%;
    height: 70px;
    align-self: flex-end;
    position: absolute;
    background-color: #b34f2f;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const Button = styled.button`
    width: 124px;
    height: 40px;
    border-radius: 3px;
    border: 0;
    margin: 10px 6px;
    font-family: 'Lato';
    font-weight: 600;
    ${props => props.color === 'white' ?
        `background: #fff; color: #37474f;` :
        `background: #37474f; color: #fff;`
    };
`