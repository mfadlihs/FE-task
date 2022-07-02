import { useEffect, useState } from 'react';
import logo from './logo.svg';
import Background from './Components/Background';
import { Box, Grid, TextField } from '@mui/material';
import { Theme } from './Theme/GlobalTheme';
import { ThemeProvider, Button, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import Card from './Components/Card';
import './App.css';
import FilterButton from './Components/FilterButton';

const useStyles = makeStyles({
	container: {
		zIndex: 1000,
		position: 'relative',
	},
	search: {
		backgroundColor: '#393E46',
		display: 'flex',
		width: 'max-content',
		margin: 'auto',
		padding: '15px 10px 15px 25px',
		borderRadius: '10px',
		alignItems: 'center',
	},
	listContainer: {},
});

function App() {
	const classes = useStyles();

	const [search, setSearch] = useState('');

	const [isByName, setIsByName] = useState(true);

	const [data, setData] = useState([
		{ name: 'White Prawn', latinName: 'Penaeus indicus' },
		{ name: 'Tiger Prawn', latinName: 'Penaeus Mondon' },
		{ name: 'Flower Prawn', latinName: 'Penaeus semisulcatus' },
		{ name: 'Pink Shrimp', latinName: 'Metapenaeus dobsoni' },
		{ name: 'Brown Shrimp', latinName: 'Metapenaeus monoceros' },
		{ name: 'King Prawn', latinName: 'Metapenaeus affinis' },
	]);

	return (
		<ThemeProvider theme={Theme}>
			{/* <Background> */}
			<Box className={classes.container} pb={'100px'}>
				<Box mt={'60px'} className={classes.search}>
					<TextField
						sx={{
							width: '400px',
							marginRight: '10px',
							'& input': {
								color: 'white',
							},
						}}
						variant='filled'
						label='Cari disini'
						color='complementary2'
						onChange={e => {
							setSearch(e.target.value);
						}}
					/>
					<IconButton>
						<SearchIcon color='complementary2' fontSize='large' />
					</IconButton>
				</Box>
				<Box px={'200px'} mt={'50px'} className={classes.listContainer}>
					<FilterButton isByName={isByName} setIsByName={setIsByName} />
					<Grid container columnSpacing={'20px'} rowSpacing={'50px'}>
						{/* {data.map(data => (
							<Grid item md={6}>
								<Card data={data} />
							</Grid>
						))} */}
						{search === ''
							? data.map(data => (
									<Grid item md={6}>
										<Card data={data} />
									</Grid>
							  ))
							: data
									.filter(data => {
										if (isByName) {
											return data.name
												.toLowerCase()
												.includes(search.toLowerCase());
										} else {
											return data.latinName
												.toLowerCase()
												.includes(search.toLowerCase());
										}
									})
									.map(data => (
										<Grid item md={6}>
											<Card data={data} />
										</Grid>
									))}
					</Grid>
				</Box>
			</Box>
			{/* </Background> */}
		</ThemeProvider>
	);
}

export default App;
