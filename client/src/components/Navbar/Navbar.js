import { makeStyles } from '@material-ui/core/styles'
import Appbar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root : {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
}))

const Navbar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Appbar position='static'>
        <Toolbar>
          <IconButton className={classes.menuButton} color='inherit' edge='start' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant='h6'>
            Google Books Search App
          </Typography>
          <Link to='/' className={classes.link}>
            <Button color='inherit'>Search Book</Button>
          </Link>
        </Toolbar>
      </Appbar>
    </div>
  )
}

export default Navbar