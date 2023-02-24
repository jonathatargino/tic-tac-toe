const CellProps = {
  backgroundColor: 'primary.light',
  fontSize: "6rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'primary.dark',
    opacity: [0.9, 0.8, 0.7]     
  },
}

export default { CellProps }