const MainBoxProps = {
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignContent: "center",
}

const PlayerBoxProps = {
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center"
}

const CircleBoxProps = {
  width: "100px",
  height: "100px",
  backgroundColor: "#cccc",
  borderRadius: "100%",
  display: "flex",
  justifyContent:
  "center",
  alignItems: "center",
  fontSize: "2.5em"
}

const FabProps = {
  padding: "8px"
}

export default { MainBoxProps, PlayerBoxProps, CircleBoxProps, FabProps }