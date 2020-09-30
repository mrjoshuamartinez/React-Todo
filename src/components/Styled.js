import styled from 'styled-components';


//Styled Components
const AppWrapper = styled.div`
    margin: 0px;
    padding: 0px;
`;
const Button = styled.button`
    color: dodgerblue;
`;
const FormWrapper = styled.div`
    min-height: 500px;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;
const IndexWrapper = styled.div`
    min-height: 500px;
    max-width: 275px;
    min-width: 275px;
    border: 1px solid blue;
    border-radius: 8px;
    margin: 0px;
    margin-top: 5%;
    padding: 0px;
    display: flex;
    justify-content: center;
`;
const Input = styled.input`
    color: dodgerblue;
    margin: 0px;
`;
const TaskForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
    padding-bottom: 10%;
`;


export { AppWrapper, Button, FormWrapper, IndexWrapper, Input, TaskForm };
