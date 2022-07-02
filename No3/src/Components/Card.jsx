import { Box, Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(props => ({
	container: {
		padding: '20px',
		backgroundColor: props.palette.secondary.main,
		borderRadius: '10px',
	},
}));

export default function Card({ data }) {
	const classes = useStyles();
	return (
		<Box className={classes.container}>
			<Typography gutterBottom variant='h4' color='textPrimary'>
				{data.name}
			</Typography>
			<Divider sx={{ backgroundColor: 'white' }} />
			<Typography mt={'5px'} color='textSecondary'>
				{data.latinName}
			</Typography>
		</Box>
	);
}
