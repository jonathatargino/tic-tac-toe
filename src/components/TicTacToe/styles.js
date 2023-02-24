const ContainerProps = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px"
}


const GridBoxProps = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 260px)",
  gridTemplateRows: "repeat(3, 260px)",
  gap: "20px",
}


export default { ContainerProps, GridBoxProps }
