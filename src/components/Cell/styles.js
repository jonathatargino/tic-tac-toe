const CellProps = {
  minWidth: {
    xs: "100px",
    sm: "120px"
  },
  minHeight: {
    xs: "100px",
    sm: "120px"
  },
  backgroundColor: '#222222',
  fontSize: {
    xs: "2.5rem",
    sm: "4rem",
    xl: "6rem"
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: "#4f4f4f",
    opacity: [0.9, 0.8, 0.7]     
  },
}

export default { CellProps }