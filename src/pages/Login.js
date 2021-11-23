import React, {useState}from 'react'
import {Grid, Container,Paper, Avatar, Typography, TextField, Button, CssBaseline} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import fondo from '../assets/img/Fondo.png'
import {LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root:{
        backgroundImage: `url(${fondo})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100vh'
    },

    container: {
		opacity: '0.6',
		height: '60%',
		marginTop: theme.spacing(10),
		[theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
			marginTop: 0,
			width: '100%',
			height: '100%'
		}
	},

    div:{
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },

    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },

    buttom:{
        margin: theme.spacing(3, 0, 2),

    }

}))
const Login = () => {
    const [body, setBody] = useState({nickname:'', password:''})
    const classes = useStyles()
    const handleChange = e => {
        console.log(e.target.value)
        setBody({
            ...body,
            [e.target.name]:e.target.value
        })
    }
    const onSubmit = () =>{
        console.log(body)
    }

    return (
        <div>
            <Grid container component='main' className={classes.root} >
                <CssBaseline/>
                <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
                <div className={classes.div}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component='h1' variant='h5'>Log In</Typography>
                    <form className={classes.form}>
                        <TextField
                           fullWidth
                           autoFocus
                           color='primary'
                           margin='normal'
                           variant='outlined'
                           label = 'Nickname'
                           name='nickname'
                           value={setBody.nickname}
                           onChange={handleChange}
                        />

                        <TextField
                           fullWidth
                           autoFocus
                           type='password'
                           color='primary'
                           margin='normal'
                           variant='outlined'
                           label = 'Password'
                           name='password'
                           value={setBody.password}
                           onChange={handleChange}
                        />
                        <Link to="/home">
                            <Button
                                fullWidth
                                variant='contained'
                                color = 'secondary'
                                className={classes.buttom}
                                onClick={()=>onSubmit()}
                            >
                                JOIN !!
                            </Button>
                        </Link>

                    </form>

                </div>
                </Container>
            </Grid>
            
        </div>
    )
}

export default Login
