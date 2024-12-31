import styled from "styled-components";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.Button`
  margin-top: 5%;

`;

export const TextoLoadList = styled.Text`
  color: #000;

`;

export const ViewCenter = styled.ScrollView`
`;

export const ViewItens = styled.View`
    /* width: 100%;
    align-items: center;
    justify-content: center;

    flex-direction: row; */

    /* display: grid; */
    /* grid-template-columns: auto auto auto; */
    /* flex-wrap: wrap; */
    display: grid;
    width: 300px;
    height: 100px;
    grid-template-columns: 50px 50px;
    grid-column: auto;
    background-color: aquamarine;
    grid-column-start: auto;
    grid-column-end: auto;
    
    /* grid-template-columns: 1fr 1fr 1fr; */
    gap: 8px;
    
`;

export const TextoList = styled.Text`
    

`;