/* eslint-disable react/prop-types */
function MinerGrid(props) {
  const sinal = props.sinal
  // eslint-disable-next-line react/prop-types
  const sinal_embaralhado = sinal.map((Element, index) => {
    return (
      <img key={index} src={Element} />
    )
  })

  return (
    <>{sinal_embaralhado}</>
  );
}

export default MinerGrid;