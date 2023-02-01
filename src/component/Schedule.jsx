import styled from "styled-components";


const Schedule = () => {
    return(
        <ScheduleContainer>
            <h3>Графік роботи</h3>
            <p>Працюємо з 11:00 до 23:00</p>
        </ScheduleContainer>
    )
}

export default Schedule;

const ScheduleContainer = styled.div`
    background-color:#FFF;
    width:100%;
    height:3.5em;
    display:flex;
    flex-direction:column;
    align-items:center;

    & h3{
        font-family: 'Ubuntu', sans-serif;
        font-size:1em;
        font-weight:bold;
        display:inline-block;
        border-top:5px solid #DA510F;
        padding-top:.4em;
    }

    & p{
        text-align:center;
        font-family: 'Ubuntu', sans-serif;
        font-size:1em;
        font-weight:300;
        padding-top:.35em;
    }
`