import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import thumbnail from './images/thumbnail.jpg';

function App() {
	const [data, setData] = useState(null);
	const [search, setSearch] = useState('');

	const fetchData = async () => {
		const defaultSearch = search == '' ? 'Langit' : search;

		const req = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${defaultSearch}`
		);
		const res = await req.json();

		setData(res.items);
	};

	useEffect(() => {
		fetchData();
		console.log(data);
		if (data != null) {
			console.log(typeof data[0].volumeInfo.description);
			// console.log(data[0].volumeInfo.description.slice(0, 10));
		}
	}, []);

	return (
		<div id='wrapper'>
			<div className='sidebar'>
				<header>Sidebar</header>
				<div className='content' />
			</div>
			<div className='_sidebar' />
			<div className='body'>
				<header>
					<p>Topbar</p>
					<div className='input'>
						<input
							type='text'
							onChange={e => {
								setSearch(e.target.value);
							}}
						/>
						<div
							className='searchButton'
							onClick={() => {
								fetchData();
							}}
						>
							<i className='fa-solid fa-magnifying-glass'></i>
						</div>
					</div>
				</header>
				<div className='container'>
					{data != null &&
						data.map((data, index) => {
							const desc =
								data.volumeInfo.description == null
									? ' '
									: data.volumeInfo.description;
							const image =
								data.volumeInfo.imageLinks.thumbnail == null
									? thumbnail
									: data.volumeInfo.imageLinks.thumbnail;
							if (index == 4 || index == 5) {
								return (
									<div key={index} className={`card item${index + 1} card2`}>
										<img className='imageBook2' src={`${image}`} />
										<div>
											<h2>{data.volumeInfo.title}</h2>
											<p>{`${desc.trim().slice(0, 400)} ...`}</p>
										</div>
									</div>
								);
							} else {
								return (
									<div key={index} className={`card item${index + 1} card1`}>
										<img className='imageBook' src={`${image}`} />
										<div>
											<h2>{data.volumeInfo.title}</h2>
											<p>{`${desc.trim().slice(0, 150)} ...`}</p>
											{/* <p>{desc}</p> */}
										</div>
									</div>
								);
							}
						})}
					{/* <div className='card item1' />
					<div className='card item2' />
					<div className='card item3' />
					<div className='card item4' />
					<div className='card item5 card2' />
					<div className='card item6 card2' />
					<div className='card item7' />
					<div className='card item8' />
					<div className='card item9' />
					<div className='card item10' /> */}
				</div>
				<footer>Footer</footer>
			</div>
		</div>
	);
}

export default App;
