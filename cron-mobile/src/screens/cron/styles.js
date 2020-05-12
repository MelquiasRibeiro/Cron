import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    background: #58355e;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const Container = styled.View`
    margin-top: 37px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 300px;
    border-radius: 150;
    background-color: #fafafa;
`;
export const Count = styled.Text`
    font-size: 36px;
    font-weight: bold;
    color: #1b2f33;
    margin-top: 90px;
`;
export const BunttonsContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
`;
export const Pause = styled.TouchableOpacity`
    height: 150px;
    width: 150px;
    border-bottom-left-radius: 150;
    border: none;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
    background: #1b2f33;
    color: #fafafa;
    margin-left: 0.5px;
    align-items: center;
    justify-content: center;
`;
export const Play = styled.TouchableOpacity`
    height: 150px;
    width: 150px;
    border-bottom-right-radius: 150;
    border: none;
    box-shadow: 0px 40px 50px rgba(0, 0, 0, 0.25);
    background: #28502e;
    color: #fafafa;
    margin-left: 0.5px;
    align-items: center;
    justify-content: center;
`;
export const RestartButton = styled.TouchableOpacity`
    margin-top: 33px;
    height: 56px;
    width: 277px;
    border-radius: 6px;
    background-color: #ec0b43;
    border: none;
    align-items: center;
    justify-content: center;
`;
export const RestartButtonLabel = styled.Text`
    color: #fafafa;
    font-size: 36px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
`;
