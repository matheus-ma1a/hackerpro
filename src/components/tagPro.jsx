import styled from "styled-components";

function tagPro(props) {

    const Tagpro = styled.div`
        background-color: ${props => props.bgc};
        position: absolute;
        color: #ffffff;
        font-weight: bold;
        top: 18px;
        border-radius: 8px 8px  0 0;


    `

    return ( 
        <Tagpro bgc={props.bgc} >{props.props}</Tagpro>
     );
}

export default tagPro;