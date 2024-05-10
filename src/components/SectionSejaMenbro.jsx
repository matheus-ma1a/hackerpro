import styled from "styled-components";

function SectionSejMenbro() {

    const Section = styled.div`

        background-color: rgb(32, 32, 36);
        color: rgb(255, 255, 255);
        border-radius: 4px;
        border: 0.5px solid rgb(68, 68, 68);
        max-width: 600px;
        padding: 30px 1rem;
        text-align: start;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        font-size: 14px;
        line-height: 1.7rem;
        text-transform: none;
        white-space: normal;
        margin: 1rem ;  
     
        div{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }

        a{
            border: 0px;
            cursor: pointer;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.875rem;
            line-height: 1.75;
            width: 100%;
            border-radius: 4px;
            padding: 0.6rem 1.5rem;
            color: white;
            background-color: #4f08d3;
            text-align: center;
        }

        h3{
            color: #4f08d3;
        }
        
        @media (max-width: 667px) {
            font-size: 13px;
            width: 100%;
            margin: 1rem;
            line-height: 1.2rem;

            p{
                margin: 0 1rem;
            }
        }

    `

    return (
        <Section id="vip">
            <h3>SEJA UM MEMBRO VIP</h3>
            <p>VOCÊ TERÁ ACESSO ÀS ATUALIZAÇÕES E NOVOS JOGOS QUE SURGIREM PRIMEIRO QUE OS OUTROS USUÁRIOS. ALÉM DOS MELHORES JOGOS DO MOMENTO E COM A MAIOR ASSERTIVIDADE. TUDO ISSO LIBERADO PRA VOCÊ!</p>
            <div>
                <a href="" >ACESSO VIP</a>
            </div>
        </Section>
    );
}

export default SectionSejMenbro;