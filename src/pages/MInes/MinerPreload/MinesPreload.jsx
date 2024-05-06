function MinesPreload(props) {
  // eslint-disable-next-line react/prop-types
  const sinal = props.sinal
  // eslint-disable-next-line react/prop-types
  const sinal_embaralhado = sinal.map((Element, index) => {
    return (
      // eslint-disable-next-line react/prop-types
      <img key={index} src={props.sinalFixo[0]} />
    )
  })
  return (
    <>{sinal_embaralhado}</>
  );

}

export default MinesPreload;