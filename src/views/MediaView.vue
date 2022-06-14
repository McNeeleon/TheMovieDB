<script setup>
import { onMounted, ref } from 'vue';
import { useMoviesCounterStore } from '../stores/moviesCounter';

import { userMovieApi } from '../api/userMovies-api';

import SwiperSlider from '../components/SwiperSlider.vue';
import AppImageViewer from '../components/AppImageViewer.vue';
import AppStarRating from '../components/AppStarRating.vue';
import MediaTopCast from '../components/MediaTopCast.vue';
import MediaCardMovies from '../components/MediaCardMovies.vue';
import AppPreloader from '../components/AppPreloader.vue';

const moviesCounterStore = useMoviesCounterStore();

// import ImdbApi from '../api/imdb-api';

const props = defineProps({
	id: {
		type: String,
	},
});

const mediaData = {
	id: 'tt1877830',
	title: 'The Batman',
	originalTitle: '',
	fullTitle: 'The Batman (2022)',
	type: 'Movie',
	year: '2022',
	image:
		'https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.6751_AL_.jpg',
	releaseDate: '2022-03-04',
	runtimeMins: '176',
	runtimeStr: '2h 56min',
	plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
	plotLocal: '',
	plotLocalIsRtl: false,
	awards: 'Awards, 2 wins & 7 nominations',
	directors: 'Matt Reeves',
	directorList: [{ id: 'nm0716257', name: 'Matt Reeves' }],
	writers: 'Matt Reeves, Peter Craig, Bill Finger',
	writerList: [
		{ id: 'nm0716257', name: 'Matt Reeves' },
		{ id: 'nm0185976', name: 'Peter Craig' },
		{ id: 'nm0277730', name: 'Bill Finger' },
	],
	stars: 'Robert Pattinson, Zoë Kravitz, Jeffrey Wright',
	starList: [
		{ id: 'nm1500155', name: 'Robert Pattinson' },
		{ id: 'nm2368789', name: 'Zoë Kravitz' },
		{ id: 'nm0942482', name: 'Jeffrey Wright' },
	],
	actorList: [
		{
			id: 'nm1500155',
			image:
				'https://imdb-api.com/images/original/MV5BNzk0MDQ5OTUxMV5BMl5BanBnXkFtZTcwMDM5ODk5Mg@@._V1_Ratio1.0000_AL_.jpg',
			name: 'Robert Pattinson',
			asCharacter: 'Bruce Wayneas Bruce Wayne…',
		},
		{
			id: 'nm2368789',
			image:
				'https://imdb-api.com/images/original/MV5BM2NmMWViOTYtOGJhYi00MzU2LWI5ODYtOGJhYzhkMWViODY5XkEyXkFqcGdeQXVyNjk2NTA3MTc@._V1_Ratio1.0000_AL_.jpg',
			name: 'Zoë Kravitz',
			asCharacter: 'Selina Kyleas Selina Kyle…',
		},
		{
			id: 'nm0942482',
			image:
				'https://imdb-api.com/images/original/MV5BMjI1NDYyNzk4OV5BMl5BanBnXkFtZTgwNDAyMzI1MDI@._V1_Ratio1.5000_AL_.jpg',
			name: 'Jeffrey Wright',
			asCharacter: 'Lt. James Gordonas Lt. James Gordon',
		},
		{
			id: 'nm0268199',
			image:
				'https://imdb-api.com/images/original/MV5BMTg4NzM5NDk0MV5BMl5BanBnXkFtZTcwNzAzMTUxNw@@._V1_Ratio1.0000_AL_.jpg',
			name: 'Colin Farrell',
			asCharacter: 'Ozas Oz…',
		},
		{
			id: 'nm0200452',
			image:
				'https://imdb-api.com/images/original/MV5BMjMwMzE1OTc0OF5BMl5BanBnXkFtZTcwMDU2NTg0Nw@@._V1_Ratio1.0000_AL_.jpg',
			name: 'Paul Dano',
			asCharacter: 'The Riddleras The Riddler',
		},
		{
			id: 'nm0001806',
			image:
				'https://imdb-api.com/images/original/MV5BNzYwNjgwMjMxMF5BMl5BanBnXkFtZTcwNjUwOTc3NQ@@._V1_Ratio1.0000_AL_.jpg',
			name: 'John Turturro',
			asCharacter: 'Carmine Falconeas Carmine Falcone',
		},
		{
			id: 'nm0785227',
			image:
				'https://imdb-api.com/images/original/MV5BYTgwYmM0ZjgtMWRmZC00YTc1LWIwYWEtYTFjMTZiMDNjNWRkXkEyXkFqcGdeQXVyNjcwMjczMzE@._V1_Ratio1.0000_AL_.jpg',
			name: 'Andy Serkis',
			asCharacter: 'Alfredas Alfred',
		},
		{
			id: 'nm0765597',
			image:
				'https://imdb-api.com/images/original/MV5BMjE0Mjg0NzE2Nl5BMl5BanBnXkFtZTcwMDE1MTkxMw@@._V1_Ratio1.0000_AL_.jpg',
			name: 'Peter Sarsgaard',
			asCharacter:
				'District Attorney Gil Colsonas District Attorney Gil Colson',
		},
		{
			id: 'nm4422686',
			image:
				'https://imdb-api.com/images/original/MV5BMTcyNzEzMjY4NV5BMl5BanBnXkFtZTgwOTMzOTA5MjI@._V1_Ratio1.0000_AL_.jpg',
			name: 'Barry Keoghan',
			asCharacter: 'Unseen Arkham Prisoneras Unseen Arkham Prisoner',
		},
		{
			id: 'nm11123883',
			image:
				'https://imdb-api.com/images/original/MV5BZTgwYzdjZWItZTdjYy00ODE2LTk1MWUtMTRjZWU5MTNkMjIyXkEyXkFqcGdeQXVyNjkwNzEwMzY@._V1_Ratio1.0000_AL_.jpg',
			name: 'Jayme Lawson',
			asCharacter: 'Bella Reálas Bella Reál',
		},
		{
			id: 'nm4909175',
			image:
				'https://imdb-api.com/images/original/MV5BNzNlMWM1ZGUtM2IzYi00M2JjLWEyNDEtZGFlZDZiNDJkNzkwXkEyXkFqcGdeQXVyNTQ0NDUzNjQ@._V1_Ratio1.0000_AL_.jpg',
			name: 'Gil Perez-Abraham',
			asCharacter: 'Officer Martinezas Officer Martinez',
		},
		{
			id: 'nm0567945',
			image:
				'https://imdb-api.com/images/original/MV5BMTUyOTMxNzg3M15BMl5BanBnXkFtZTgwNjc3MDI3MTE@._V1_Ratio1.0000_AL_.jpg',
			name: 'Peter McDonald',
			asCharacter: 'Kenzieas Kenzie',
		},
		{
			id: 'nm0642126',
			image:
				'https://imdb-api.com/images/original/MV5BNjM3OTc1Nzk0OF5BMl5BanBnXkFtZTcwOTEwNDA5Nw@@._V1_Ratio1.0000_AL_.jpg',
			name: "Con O'Neill",
			asCharacter: 'Chief Mackenzie Bockas Chief Mackenzie Bock',
		},
		{
			id: 'nm0273159',
			image:
				'https://imdb-api.com/images/original/MV5BMDI5MmRmODEtNjIxZS00NWQxLWJkN2UtZDRjNjZkMzMyOWIyXkEyXkFqcGdeQXVyNDgzOTM5Nzc@._V1_Ratio1.4714_AL_.jpg',
			name: 'Alex Ferns',
			asCharacter: 'Commissioner Pete Savageas Commissioner Pete Savage',
		},
		{
			id: 'nm0672303',
			image:
				'https://imdb-api.com/images/original/MV5BMjE1ODc2MjEzMV5BMl5BanBnXkFtZTgwNDg1MzQxMDE@._V1_Ratio1.0000_AL_.jpg',
			name: 'Rupert Penry-Jones',
			asCharacter: 'Mayor Don Mitchell, Jr.as Mayor Don Mitchell, Jr.',
		},
		{
			id: 'nm1017942',
			image:
				'https://imdb-api.com/images/original/MV5BMTZkY2JmNzYtNDJmZS00N2FhLTg5MDItYjY3MTFlOTFiNDRlXkEyXkFqcGdeQXVyMTMwMzk2Mg@@._V1_Ratio1.0000_AL_.jpg',
			name: 'Kosha Engler',
			asCharacter: 'Mrs. Mitchellas Mrs. Mitchell',
		},
		{
			id: 'nm10706149',
			image: 'https://imdb-api.com/images/original/nopicture.jpg',
			name: 'Archie Barnes',
			asCharacter: "Mitchell's Sonas Mitchell's Son",
		},
		{
			id: 'nm8940462',
			image:
				'https://imdb-api.com/images/original/MV5BNjdkZWI2NjEtNjI1YS00NDFkLTk1ZGEtMjE0NmM1MjJkMDcwXkEyXkFqcGdeQXVyNTIyNTU1NDc@._V1_Ratio1.0000_AL_.jpg',
			name: 'Janine Harouni',
			asCharacter: 'Carlaas Carla',
		},
	],
	fullCast: null,
	genres: 'Action, Crime, Drama',
	genreList: [
		{ key: 'Action', value: 'Action' },
		{ key: 'Crime', value: 'Crime' },
		{ key: 'Drama', value: 'Drama' },
	],
	companies: 'Warner Bros., DC Entertainment, 6th & Idaho Productions',
	companyList: [
		{ id: 'co0002663', name: 'Warner Bros.' },
		{ id: 'co0283444', name: 'DC Entertainment' },
		{ id: 'co0510680', name: '6th & Idaho Productions' },
	],
	countries: 'USA',
	countryList: [{ key: 'USA', value: 'USA' }],
	languages: 'English, Spanish, Latin, Italian',
	languageList: [
		{ key: 'English', value: 'English' },
		{ key: 'Spanish', value: 'Spanish' },
		{ key: 'Latin', value: 'Latin' },
		{ key: 'Italian', value: 'Italian' },
	],
	contentRating: 'PG-13',
	imDbRating: '8',
	imDbRatingVotes: '477389',
	metacriticRating: '72',
	ratings: {
		imDbId: 'tt1877830',
		title: 'The Batman',
		fullTitle: 'The Batman (2022)',
		type: 'Movie',
		year: '2022',
		imDb: '8',
		metacritic: '72',
		theMovieDb: '7.8',
		rottenTomatoes: '85',
		filmAffinity: '7.1',
		errorMessage: '',
	},
	wikipedia: null,
	posters: null,
	images: {
		imDbId: 'tt1877830',
		title: 'The Batman',
		fullTitle: 'The Batman (2022)',
		type: 'Movie',
		year: '2022',
		items: [
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BOTc3ODFlMWYtZDJjNC00ZGQyLTk5MWQtNzliNWMzOWVlM2FlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio2.3400_AL_.jpg',
			},
			{
				title: 'Andy Serkis in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BMjA1MDA2OGMtMGM0MS00MDIzLTljMWQtNzE0NTZjNmU4N2M1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio1.5000_AL_.jpg',
			},
			{
				title: 'Colin Farrell in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BMTNmNzljNWQtZjVmMi00OGY5LWEyZjctNjQ1ZDRmNDlkZTJiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio1.5000_AL_.jpg',
			},
			{
				title: 'Jeffrey Wright and Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BM2I1Y2Y1Y2UtYzRmZC00N2E1LWI1YjItNGIyMDAwYjU3YjJjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio1.5000_AL_.jpg',
			},
			{
				title: 'Robert Pattinson and Zoë Kravitz in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BYjIyNzZlZDktZjZjMS00OTVhLTgxYWQtMjJkNjRlZDMyNTlhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio1.5000_AL_.jpg',
			},
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BMTEwNTlhYzItZjhiMC00YTZjLWIyNjYtOGYwODNhMTFhNDQ4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio1.5000_AL_.jpg',
			},
			{
				title: 'Robert Pattinson and Zoë Kravitz in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BOTAyMGVhMDItYjY3Yy00N2NkLThjMDEtOWRiMDI3Nzc4ZjEyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio1.5000_AL_.jpg',
			},
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BNTk0NDgxZTItOWU2NS00NzY1LWFjZjctOWU0ZmQ5ZWYyYzJkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio1.5000_AL_.jpg',
			},
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BYTQ5MmY3OWUtMGRmYy00MTZiLWE3YjQtNmJjOTdlZjg1N2E2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio1.5000_AL_.jpg',
			},
			{
				title: 'Zoë Kravitz in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BMDJjOTNlMDYtNGI5Ni00NTRmLTk5MDAtOGJiNDBhYmM3ODM4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio1.5000_AL_.jpg',
			},
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BMmM3ZjA3NDktZGMzZi00ZmZmLTlmNzQtMjZlYmNlNjNkZDA0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio2.3800_AL_.jpg',
			},
			{
				title: 'Andy Serkis and Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BNDU4ZGIyMDktMzdkZi00ODk3LWIyOTctOTU4YWQ1NjFkM2MyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio1.5000_AL_.jpg',
			},
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BMDU2MDIwNDQtYzUzZS00ZDAxLWJjNWMtYWU5NTM1MDJkNDcyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio1.7800_AL_.jpg',
			},
			{
				title: 'Jeffrey Wright and Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BNTcxMzdmNTQtNGNhMS00Y2M5LThjMTMtMmE0Njk3YjI1ZmRmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio1.5000_AL_.jpg',
			},
			{
				title: 'Zoë Kravitz in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BMjU5ZTI4NjYtNjg5OC00NjQwLTk4M2QtMDJlZDNmMGQyZDY2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio2.4000_AL_.jpg',
			},
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BYmI0MmNhNTYtOTg3Zi00YjM4LThiNDctYWZmYWM3ZjBiNDBmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio2.4200_AL_.jpg',
			},
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BZmNkZTgwNTEtODhjOC00MmY3LTg3OWEtMDJjNzMwY2U1NWZiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio2.3800_AL_.jpg',
			},
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BNTlhMmIxZWEtNzg5MC00M2U1LTk1YWQtMzVmOGE0ZGJkZDBjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio1.7800_AL_.jpg',
			},
			{
				title: 'Colin Farrell : May 31',
				image:
					'https://imdb-api.com/images/original/MV5BMjg1OWU5NDEtODAyYi00MjBhLTk2NGItNWVhMDlhMTg0MzcxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio1.0000_AL_.jpg',
			},
			{
				title: 'Matt Reeves: April 27',
				image:
					'https://imdb-api.com/images/original/MV5BNTQ2YzI2MmMtY2I5YS00YWMwLTg2ZTItZmY0Yzg0ZjcwYzg0XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio1.0000_AL_.jpg',
			},
			{
				title: 'The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BYjRhOWE0NmUtYjg4MS00OTk1LTg3N2ItOGMzZTgzMjA0ODMzXkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_Ratio1.0000_AL_.jpg',
			},
			{
				title:
					'Paul Dano, Colin Farrell, Peter Sarsgaard, Robert Pattinson, and Zoë Kravitz in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio1.0000_AL_.jpg',
			},
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BODRmZjcwNTYtNWQ1OC00YTgwLThlZmItZTQwZWE5ZWExNzlhXkEyXkFqcGdeQXVyMTA2ODkwNzM5._V1_Ratio1.0000_AL_.jpg',
			},
			{
				title: 'Robert Pattinson and Zoë Kravitz in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BYjVmMGU3ZjAtMDNmMy00ZmE2LWI0ODQtMzc2NDczOTdlZjYyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio1.0000_AL_.jpg',
			},
			{
				title: 'Robert Pattinson and Zoë Kravitz in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BYzMwZjBiMjctZjYzZC00YTk0LWI2ZTAtNTgwNWZhYzhjOTA5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio1.0000_AL_.jpg',
			},
			{
				title: 'Robert Pattinson and Zoë Kravitz in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BMGZkZGFhMzEtYTZiNi00NTVlLTgyYjUtOTIyNjQ4NDE2ZWY0XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_Ratio1.0000_AL_.jpg',
			},
			{
				title: 'Paul Dano in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BZjJlYTllZGYtN2Y0Zi00MDg5LWFlNTktM2ExN2ZjZjc3ZGIxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio1.0000_AL_.jpg',
			},
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BYTExZTdhY2ItNGQ1YS00NjJlLWIxMjYtZTI1MzNlMzY0OTk4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio1.0000_AL_.jpg',
			},
			{
				title: 'The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BZTE2YTY3YTMtM2FlMS00YmI3LTgyMWUtM2FhMWIyZWRmMDk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio1.0000_AL_.jpg',
			},
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BZTgyY2ExMTEtYmJjMS00ZGQwLWE1NzktNmY4MzNiYjEzY2M3XkEyXkFqcGdeQXVyODUxNjcxNjE@._V1_Ratio1.7800_AL_.jpg',
			},
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BZTZkMzE0MTQtYmJjNy00NzQ5LWEyYWQtNWQ1NjU0YWI2NTVkXkEyXkFqcGdeQXVyODUxNjcxNjE@._V1_Ratio2.3800_AL_.jpg',
			},
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BZDgyMWJlOTctYTQ0YS00MmYzLTllOTUtOTdmZDk4OGY5YWZmXkEyXkFqcGdeQXVyODUxNjcxNjE@._V1_Ratio2.3800_AL_.jpg',
			},
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BODkxN2Q0NTUtOGMyMS00NTM1LWI3NTUtMTRhZDMzYTIwNjJhXkEyXkFqcGdeQXVyODUxNjcxNjE@._V1_Ratio2.4000_AL_.jpg',
			},
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BNTcyNThmYmUtZjIyNi00YzRlLTg0MmEtMmY5ZWVlMzY2MzI5XkEyXkFqcGdeQXVyODUxNjcxNjE@._V1_Ratio2.4200_AL_.jpg',
			},
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BNDUzYjE0ZmMtZjRlMi00OGY4LTg0NGMtMTVhMzU5YzkzNTFmXkEyXkFqcGdeQXVyODUxNjcxNjE@._V1_Ratio2.4000_AL_.jpg',
			},
			{
				title: 'Zoë Kravitz in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BNWU5ZDc4ZDctODFmOS00MTkwLThkMjEtNjdjZGVjZDA4YWJiXkEyXkFqcGdeQXVyODUxNjcxNjE@._V1_Ratio2.3800_AL_.jpg',
			},
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BOTYxYWRhNTMtZjBhOC00ZGI4LTkzMjYtNmM2NWZiNjQ5ODkxXkEyXkFqcGdeQXVyODUxNjcxNjE@._V1_Ratio2.3000_AL_.jpg',
			},
			{
				title: 'The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BMDEyZWRmMDYtMzQ0My00ZTFjLWIxYzQtMzhmODlkYjBkNTU2XkEyXkFqcGdeQXVyODUxNjcxNjE@._V1_Ratio2.3400_AL_.jpg',
			},
			{
				title: 'Zoë Kravitz in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BMzliOGM4MDAtZGZlYy00NTE3LWExMWEtZGJhZWY0MmQwNzU4XkEyXkFqcGdeQXVyODUxNjcxNjE@._V1_Ratio1.0000_AL_.jpg',
			},
			{
				title: 'Andy Serkis and Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BOTdkNTIwZDEtY2Q2Ni00NWY1LWE3OTUtNGUyZGRlYzdhZTg3XkEyXkFqcGdeQXVyODUxNjcxNjE@._V1_Ratio2.3800_AL_.jpg',
			},
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BZTgxMWJiODMtM2FkYi00MzBlLWI0NmUtNjM2ODMxYmEwMGJlXkEyXkFqcGdeQXVyODUxNjcxNjE@._V1_Ratio2.3800_AL_.jpg',
			},
			{
				title: 'Andy Serkis and Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BMjc1ZjgxOTYtNjBkMy00MzRlLWFlODEtYmYzODgzOGQ5ODUzXkEyXkFqcGdeQXVyODUxNjcxNjE@._V1_Ratio2.4000_AL_.jpg',
			},
			{
				title: 'Andy Serkis and Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BMmFiMjk0NTAtOGIxMC00ZTlmLWI4YWMtZTI2MDQxOTBkODM2XkEyXkFqcGdeQXVyODUxNjcxNjE@._V1_Ratio2.4400_AL_.jpg',
			},
			{
				title: 'Zoë Kravitz in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BMDNhYWEyNmItZTQzOC00N2RiLTk5ODUtM2MwZTg2MzdlNTlhXkEyXkFqcGdeQXVyODUxNjcxNjE@._V1_Ratio2.4600_AL_.jpg',
			},
			{
				title: 'Paul Dano in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BZjE0OTkyMGEtY2ZhZC00NzQ1LWFiZmQtMzNiNDBmOTJkNTkyXkEyXkFqcGdeQXVyNDIyNjA2MTk@._V1_Ratio1.7800_AL_.jpg',
			},
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BNGI2YTRmNGUtNzBlOC00OWQ3LWE3NmYtZDkzZDViMjY3ZWZiXkEyXkFqcGdeQXVyNDIyNjA2MTk@._V1_Ratio1.5800_AL_.jpg',
			},
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BNWZhODQ3YzItZTAyNC00Njg4LTljOWUtMjI4MjU4YTA5NTJmXkEyXkFqcGdeQXVyNDIyNjA2MTk@._V1_Ratio1.7200_AL_.jpg',
			},
			{
				title: 'Robert Pattinson in The Batman (2022)',
				image:
					'https://imdb-api.com/images/original/MV5BOWQ2YWMyNTAtMThmYi00YzFmLThhYzgtMzNhYTcwODM1YzRhXkEyXkFqcGdeQXVyNDIyNjA2MTk@._V1_Ratio1.7200_AL_.jpg',
			},
		],
		errorMessage: '',
	},
	trailer: null,
	boxOffice: {
		budget: '',
		openingWeekendUSA: '$134,008,624',
		grossUSA: '$369,261,437',
		cumulativeWorldwideGross: '$768,461,437',
	},
	tagline: 'Unmask The Truth',
	keywords: 'superhero,batman character,gotham city,based on comic,dc comics',
	keywordList: [
		'superhero',
		'batman character',
		'gotham city',
		'based on comic',
		'dc comics',
	],
	similars: [
		{
			id: 'tt10872600',
			title: 'Spider-Man: No Way Home',
			image:
				'https://imdb-api.com/images/original/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_Ratio0.6763_AL_.jpg',
			imDbRating: '8.3',
		},
		{
			id: 'tt0468569',
			title: 'The Dark Knight',
			image:
				'https://imdb-api.com/images/original/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_Ratio0.6763_AL_.jpg',
			imDbRating: '9.0',
		},
		{
			id: 'tt1160419',
			title: 'Dune',
			image:
				'https://imdb-api.com/images/original/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6763_AL_.jpg',
			imDbRating: '8.1',
		},
		{
			id: 'tt1211837',
			title: 'Doctor Strange',
			image:
				'https://imdb-api.com/images/original/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_Ratio0.6763_AL_.jpg',
			imDbRating: '7.5',
		},
		{
			id: 'tt0372784',
			title: 'Batman Begins',
			image:
				'https://imdb-api.com/images/original/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6763_AL_.jpg',
			imDbRating: '8.2',
		},
		{
			id: 'tt10234724',
			title: 'Moon Knight',
			image:
				'https://imdb-api.com/images/original/MV5BYTc5OWNhYjktMThlOS00ODUxLTgwNDQtZjdjYjkyM2IwZTZlXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_Ratio0.6763_AL_.jpg',
			imDbRating: '7.5',
		},
		{
			id: 'tt19064880',
			title: 'The Batman: Deleted Arkham Scene',
			image:
				'https://imdb-api.com/images/original/MV5BYTc5MTBiZjQtZGM3ZC00NzExLWE5YTktN2FjNTlhNjIzYWU4XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_Ratio0.6763_AL_.jpg',
			imDbRating: '8.2',
		},
		{
			id: 'tt18689424',
			title: 'Batman v Superman: Dawn of Justice Ultimate Edition',
			image:
				'https://imdb-api.com/images/original/MV5BYzgyMTMzZjUtNGNjMy00NTJjLWIzNDYtMTc2YzQwOGE5MGM4XkEyXkFqcGdeQXVyMTUwODYzMjcw._V1_Ratio0.6763_AL_.jpg',
			imDbRating: '7.2',
		},
		{
			id: 'tt1464335',
			title: 'Uncharted',
			image:
				'https://imdb-api.com/images/original/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_Ratio0.6763_AL_.jpg',
			imDbRating: '6.4',
		},
		{
			id: 'tt11138512',
			title: 'The Northman',
			image:
				'https://imdb-api.com/images/original/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_Ratio0.6763_AL_.jpg',
			imDbRating: '7.4',
		},
		{
			id: 'tt1345836',
			title: 'The Dark Knight Rises',
			image:
				'https://imdb-api.com/images/original/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_Ratio0.6763_AL_.jpg',
			imDbRating: '8.4',
		},
		{
			id: 'tt4154796',
			title: 'Avengers: Endgame',
			image:
				'https://imdb-api.com/images/original/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_Ratio0.6763_AL_.jpg',
			imDbRating: '8.4',
		},
	],
	tvSeriesInfo: null,
	tvEpisodeInfo: null,
	errorMessage: null,
};

const initialSlide = ref(0);
const isMediaViewer = ref(false);

const movieRating = ref(0);

// const mediaData = ref([]);
const mediaImages = ref([]);

const isLoading = ref(true);
const isImgLoad = ref(true);

const obser = ref(null);

const watchLater = ref(false);

const actionsList = ref([
	{
		name: 'Like',
		inList: false,
		id: 'like',
	},
	{
		name: 'Watched',
		inList: false,
		id: 'watched',
	},
	{
		name: 'Watch later',
		inList: watchLater,
		id: 'watchLater',
	},
	{
		name: 'Favorite films',
		inList: false,
		id: 'favoriteFilms',
	},
]);

const loadUserMovieInfo = () => {
	moviesCounterStore.loadCounterMovies();

	const categorListMovie = userMovieApi.getUserMovieInfo(props.id);

	categorListMovie
		.then((response) => {
			actionsList.value.map((el) => {
				return Object.assign(el, {
					inList: response[el.id].booleanValue,
				});
			});
		})
		.catch((e) => e);
};

onMounted(() => {
	loadUserMovieInfo();
	// CH API Path
	// ImdbApi.getTitleById(props.id, ['Ratings'])
	// 	.then((res) => {
	// 		// fetch('https://jsonplaceholder.typicode.com/todos/1')
	// 		// .then((response) => response.json())
	// 		// .then((r) => {
	// 		isLoading.value = true;
	// 		mediaData.value = res;
	// 		isLoading.value = false;
	// 	})
	// 	.then((_) => {
	// 		observer.observe(obser.value);
	// 	});
	// });
	// const callback = function (entries) {
	// 	if (entries[0].isIntersecting) {
	// 		isImgLoad.value = true;
	// 		ImdbApi.getTitleImages(props.id).then((res) => {
	// 			mediaImages.value = res.items;
	// 			isImgLoad.value = false;
	// 			console.log('load');
	// 			observer.unobserve(obser.value);
	// 		});
	// 	}
	// };
	// const options = {
	// 	rootMargin: '0px',
	// 	threshold: 0.1,
	// };
	// const observer = new IntersectionObserver(callback, options);
});

const opneMediaViewer = (slideNumber) => {
	initialSlide.value = slideNumber;
	isMediaViewer.value = true;
	console.log(slideNumber);
};

const setRating = (rat) => {
	movieRating.value = rat;
};

const closeMediaViewer = () => (isMediaViewer.value = false);

const breakpoints = {
	576: {
		slidesPerView: 3,
		spaceBetween: 10,
	},
	640: {
		slidesPerView: 3,
		spaceBetween: 10,
	},
	768: {
		slidesPerView: 4,
		spaceBetween: 15,
	},
	1024: {
		slidesPerView: 5,
		spaceBetween: 20,
	},
	1400: {
		slidesPerView: 6,
		spaceBetween: 20,
	},
};

const watchListHandler = (options) => {
	actionsList.value.find(
		(el) => el.id === options.id && (el.inList = !el.inList)
	);

	const { title, image, year, runtimeMins, imDbRating } = mediaData;

	moviesCounterStore.movieCounter([options.id, options.inList], mediaData.type);

	userMovieApi.postUserMovieInfo(actionsList, props.id, {
		title,
		image,
		year,
		runtimeMins,
		imDbRating,
		vote: movieRating.value,
	});
};

const watchLaterHandler = () => {
	watchLater.value = !watchLater.value;
	moviesCounterStore.movieCounter(
		['watchLater', watchLater.value],
		mediaData.type
	);

	userMovieApi.postUserMovieInfo(actionsList, props.id);
};
</script>

<template>
	<div class="container-xl bg-white">
		<div
			v-if="isLoading"
			class="media p-2 md-4"
		>
			<MediaCardMovies
				:media-data="mediaData"
				:actions-list="actionsList"
				@add-to-watch-list="watchListHandler"
				@add-to-watch-later="watchLaterHandler"
			/>

			<div class="media-info">
				<div class="description mb-5">
					<h4 class="fw-600">Описание</h4>
					<p>
						{{ mediaData.plot }}
					</p>
				</div>
				<div class="star-rating mb-5">
					<AppStarRating
						:movie-rating="mediaData.imDbRating"
						:movie-rating-votes="mediaData.imDbRatingVotes"
						@set-rating="setRating"
					/>
				</div>

				<div
					ref="obser"
					class="media-images mb-4"
				>
					<template v-if="!isImgLoad">
						<h3
							class="border-start border-5 border-warning ps-2 p-0 mb-3"
							style="cursor: pointer"
							@click="opneMediaViewer(0)"
						>
							Photos {{ mediaImages.length + 1 }}
						</h3>

						<SwiperSlider
							:data="mediaImages.slice(0, 9)"
							:slides-view="2"
							:breakpoints="breakpoints"
							#="{ item, id }"
						>
							<div
								class="mb-4"
								style="max-width: 210px; height: 210px; cursor: pointer"
							>
								<img
									style="width: 100%; height: 100%; object-fit: cover"
									:src="item.image"
									:alt="item.title"
									@click="opneMediaViewer(id)"
								/>
							</div>
						</SwiperSlider>

						<AppImageViewer
							v-if="isMediaViewer"
							:initial-slide="initialSlide"
							:images-list="mediaImages"
							@close-media-viewer="closeMediaViewer"
						></AppImageViewer>
					</template>

					<AppPreloader v-else />
				</div>

				<div class="top-cast">
					<MediaTopCast :actor-list="mediaData.actorList" />
				</div>
			</div>
		</div>
		<div v-else>EMPTY</div>
	</div>
</template>

<style lang="scss">
.card {
	color: black;
}
.media {
	/* background-image: url('https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_Ratio0.6699_AL_.jpg'); */
	/* background-repeat: no-repeat;
  background-size: cover;
  background-position: center; */
	min-height: 510px;
	width: 100%;
	position: relative;
}

.media::before {
	/* content: '';
  display: block;
  background-color: rgba(22, 23, 30, 0.8);

  position: absolute;
  height: 100%;
  width: 100%; */
}

img {
	border-radius: 8px;
}
</style>
