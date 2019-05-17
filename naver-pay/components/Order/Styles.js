export const styles = theme => ({
  root: {
    width: '92%',
    marginLeft: '4%',
    marginTop: 4
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  columnName: {
    flexBasis: '40%',
  },
  columnSubName: {
    flexBasis: '20%',
  },
  columnDate: {
    flexBasis: '20%',
  },
  columnButton: {
    flexBasis: '10%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  button: {
    width: '100%',
    height: '100%'
  }
});