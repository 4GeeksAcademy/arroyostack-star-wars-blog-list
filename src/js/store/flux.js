const getState = ({ getStore, getActions, setStore }) => {
	const base_url = "https://www.swapi.tech/api";
	return {
		store: {
			planets: [],
			vehicles: [],
			people: [],
			likedElements: []
		},
		actions: {

			initialize: () => {
				if (localStorage.getItem("planets") !== null) return;

				Promise.all([
					fetch(`${ base_url }/people`),
					fetch(`${ base_url }/planets`),
					fetch(`${ base_url }/starships`)
				]).then(responses => {
					return Promise.all(responses.map(res => res.json()));
				}).then(data => {
					data[ 0 ].results.map(item => {
						item.image = `https://starwars-visualguide.com/assets/img/characters/${ item.uid }.jpg`;
					});
					data[ 1 ].results.map(item => {
						item.image = `https://starwars-visualguide.com/assets/img/planets/${ item.uid }.jpg`;
					});
					data[ 2 ].results.map(item => {
						item.image = `https://starwars-visualguide.com/assets/img/starships/${ item.uid }.jpg`;
					});


					setStore({ people: data[ 0 ].results });
					setStore({ planets: data[ 1 ].results });
					setStore({ vehicles: data[ 2 ].results });

					localStorage.setItem('people', JSON.stringify(data[ 0 ].results));
					localStorage.setItem('planets', JSON.stringify(data[ 1 ].results));
					localStorage.setItem('vehicles', JSON.stringify(data[ 2 ].results));

				});
			},
			addLike: (likedObject) => {
				const store = getStore();

				if (store.likedElements.some(item => item.uid === likedObject.uid)) {

					store.likedElements = store.likedElements.filter(element => element.uid !== likedObject.uid);
					localStorage.setItem('likedElements', JSON.stringify(store.likedElements));

					setStore(store);
					return;
				};

				store.likedElements.push(likedObject);
				localStorage.setItem('likedElements', JSON.stringify(store.likedElements));

				setStore(store);

			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
