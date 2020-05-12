import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    section {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 400px;
        width: 400px;
        border-radius: 50%;
        background-color: #fafafa;
        box-sizing: border-box;
        div.buttons {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin-top: 16px;

            button.play {
                height: 200px;
                width: 200px;
                border-bottom-right-radius: 100%;
                border: none;
                box-shadow: 0px 40px 50px rgba(0, 0, 0, 0.25);
                background: #28502e;
                color: #fafafa;
                box-sizing: border-box;
                margin-left: 0.5px;
                transition: background 0.5s;

                &:hover {
                    background: ${lighten(0.05, '#28502e')};
                }
            }
            button.pause {
                height: 200px;
                width: 200px;
                border-bottom-left-radius: 100%;
                border: none;
                margin-right: 0.5px;
                box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
                background: #1b2f33;
                color: #fafafa;
                box-sizing: border-box;
                transition: background 0.5s;

                &:hover {
                    background: ${lighten(0.05, '#1b2f33')};
                }
            }
        }
        h1 {
            font-size: 48px;
            font-weight: bold;
            color: #1b2f33;
            margin-top: 130px;
        }
    }
    button.reset {
        margin-top: 44px;
        height: 75px;
        width: 370px;
        border-radius: 8px;
        background-color: #ec0b43;
        color: #fafafa;
        border: none;
        font-size: 48px;
        text-transform: uppercase;
        font-weight: bold;
        transition: background 0.5s;

        &:hover {
            background: ${darken(0.1, '#ec0b43')};
        }
    }
`;
