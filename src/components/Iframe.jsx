import styled from "styled-components";


const IframeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1000px;
  width: 100%;
  padding: 2rem;
  iframe{
    width: 100%;
    height: 100%;
  }
`

function Iframe({link}) {
  return (
    <IframeDiv>
      <iframe src='https://boombets.com/affiliates/?btag=1660769_l292958' frameborder="0"></iframe>
    </IframeDiv>
  );
}

export default Iframe;