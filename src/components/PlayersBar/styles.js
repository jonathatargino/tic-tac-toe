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

const PlayerTypography = {
  fontSize: {
    xs: "1.5rem",
    md: "2rem"
  },
  color: "#959595"
}

const CircleBoxProps = {
  width: {
    xs: "60px",
    lg: "100px"
  },
  height: {
    xs: "60px",
    lg: "100px"
  },
  backgroundColor: "#222222",
  borderRadius: "100%",
  display: "flex",
  justifyContent:
  "center",
  alignItems: "center",
  fontSize: {
    xs: "2.0em",
    lg: "2.5em"
  },
}

const FabProps = {
  backgroundColor: "#222222",
  padding: "8px"
}

export default { MainBoxProps, PlayerBoxProps, PlayerTypography, CircleBoxProps, FabProps }