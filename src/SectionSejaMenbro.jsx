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

        button{
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
            background-color: rgb(16, 205, 0);
        }

        h3{
            color: rgb(16, 205, 0);
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
            <p>VOCÊ TERÁ ACESSO ÀS ATUALIZAÇÕES PRIMEIRO DO QUE OS OUTROS USUÁRIOS, QUALQUER TROCA DE PLATAFORMA, JOGOS NOVOS QUE SURGIREM, TODAS AS ATUALIZAÇÕES ESTARÃO DISPONÍVEIS UM MÊS ANTES PARA VOCÊ, SEMPRE QUEM CHEGA PRIMEIRO NOS JOGOS FATURA MUITO MAIS, E VOCÊ TERÁ ACESSO ÀS INFORMAÇÕES PRIMEIRO PARA LUCRAR MAIS.</p>
            <div>
                <button>ACESSO VIP</button>
            </div>
        </Section>
    );
}

export default SectionSejMenbro;