const ContainerProps = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
}


const GridBoxProps = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
  gap: {
    xs: "10px",
    sm: "20px",
  },
  width: {
    xs: "60vw",
    sm: "40vw",
    xl: "30vw",
  },
  height: {
    xs: "60vw",
    sm: "40vw",
    xl: "30vw",
  }
}


export default { ContainerProps, GridBoxProps }
