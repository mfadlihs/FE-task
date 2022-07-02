import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';

const useStyles = makeStyles(props => ({
	container: {
		margin: 'auto',
		display: 'flex',
		width: 'max-content',
		gap: '40px',
	},
	button: {
		fontSize: '20px',
		color: 'white',
	},
}));

export default function FilterButton(props) {
	const { setIsByName, isByName } = props;

	const classes = useStyles();
	return (
		<Box mb={'50px'} className={classes.container}>
			<ButtonBox
				onClick={() => {
					setIsByName(true);
				}}
				active={isByName}
			>
				By Name
			</ButtonBox>
			<ButtonBox
				onClick={() => {
					setIsByName(false);
				}}
				active={!isByName}
			>
				By Latin Name
			</ButtonBox>
		</Box>
	);
}

const ButtonBox = styled(Box, {
	shouldForwardProp: props => props !== 'active',
})(props => ({
	backgroundColor: props.active
		? `${props.theme.palette.complementary1.main}70`
		: `${props.theme.palette.complementary1.main}`,
	color: 'white',
	fontSize: '20px',
	padding: '15px 60px',
	borderRadius: '15px',
	'&:hover': {
		cursor: 'pointer',
	},
}));
