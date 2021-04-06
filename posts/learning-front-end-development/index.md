---
slug: learning-frontend
tags:
  - Development
title: Learning Front End Development
date: 2021-04-04T18:41:46.810Z
description: "My experience learning javascript and react over the last year,
  featuring projects I built on the way and what I learned from them,
  culminating in a Netflix clone built with React, Firebase, and
  styled-components. "
feature: /img/why-use-react-instead-of-javascript-html-and-css.jpeg
---
After graduating school in the spring of 2020 just as COVID locked down the country, I knew my job prospects right out of college would probably have to be put on hold for the time being, so I moved back home and decided to devote the next year to learning front end development. 

I studied Integrated Design in school, which focused around branding and user experience design, as I'm passionate about creating engaging digital experiences that evoke a brand's identity through typography, layout, and interaction in web design. 

I wanted to learn front end development to complete the picture: the ability to envision an identity, design a website that is intuitive while expressing that identity, and then develop that website myself. This way I could take a project from paper to production, and have a big picture view of a project while still maintaining the ability to zoom in and work effectively in each stage. 

I had taken a basic web development class in school that was just HTML and CSS, which I felt pretty comfortable with. I had also been using the platform Webflow, which is a website design tool that uses HTML and CSS, so you effectively code visually. However, I wanted to learn javascript and React, as they would give me far more ability to produce dynamic, engaging websites than simple HTML and CSS.

I followed the Scrimba platform's [Front End Developer Pathway](https://scrimba.com/learn/frontend), as I liked the ability to pause the screencast and dive right into the code in the browser, as opposed to having VS Code on one side of my screen copying everything the video was doing on the right. I felt that it gave me a better understanding of the code when I could engage with it directly and play with it.



## Javascript Carousel

[Live Demo](https://amazing-mcnulty-f8a512.netlify.app/)

[Github Repo](https://github.com/mylesjeffery/carousel)

This project introduced me to manipulating elements in the DOM with javascript via the carousel. It was accomplished by adding a class, "carousel-item-visible" and removing class "carousel-item-hidden", based on the index of the slide, which if is at the end of the list of slides, goes back to the first slide. 



## Javascript Pacman

[Live Demo](https://mylesjeffery-js-pacman.netlify.app/)

[Github Repo](https://github.com/mylesjeffery/pacman/blob/master/main.js)

It's a little bit clunky, but it's a fully functional Pacman all in vanilla javascript. It uses css-grid to display the game, and moves Pacman around based on user input with the arrow keys. It works by adding and removing classes from each square of the grid when the user inputs or the ghosts move. 



## Punk API Beer App

[Live Demo](https://mylesjeffery-beer.netlify.app/)

[Github Repo](https://github.com/mylesjeffery/my-beer-app/blob/main/main.js)

This was my introduction to fetching data from an API using async and await. It uses the Punk Beer API, which  returns JSON with a bunch of draft beer brands. The user can filter for alcohol content and hoppiness, on three levels each. It also has pagination! 



## React Movie Search App

[Live Demo](https://mylesjeffery-reactmoviesearchapp.netlify.app/)

[Github Repo](https://github.com/mylesjeffery/movie_search_app_react)

My first project in React, with higher order components, fetching data from an API, using a form to search. It was my introduction to useState, and my first time writing JSX. This opened my eyes to the potential of React to create interactive, dynamic applications.



## React Netflix Clone with Authentication (Firebase), Live Search, and styled-components

[Live Demo](https://mylesjeffery-netflixclone.netlify.app)

[Github Repo](https://github.com/mylesjeffery/netflix-clone)

For this project I followed [this 10 hour long tutorial](https://www.youtube.com/watch?v=x_EEwGe-a9o&t=4085s&ab_channel=KarlHadwen), and expanded on it by styling it to be responsive to any screen size. It taught me a lot about React and how to structure applications, using styled-components to use CSS-in-JS modularly, and how to integrate user authentication using Google's Firebase. The movie and TV show data was stored in Firebase's Firestore. I learned how to use react-router to hide the browse content until the user signs up or signs in, and built custom hooks to manage context and authentication. useState, useContext, useEffect, useRef, and more react hooks were used. It included a live-search functionality, which, when the user types in, automatically loads the results and brings the show or movie to the top of the list. 

I realized the app wasn't responsive, as the tiles just stayed the same size no matter the viewport width. The rows of content also didn't have the slider functionality that Netflix has, where you click the right arrow and it slides the content over. So I set out to add these features, which turned out to be more complicated than I initially thought. I first doubled the amount of content per row, so I could have the slider functionality. I then created Context to manage the slide index, as I would need to access these values from the styled-components file. I put the slide index into the styled component as a `transform: translateX(-${({ sliderIndex }) => sliderIndex}00%);` in which the slider index is `-(index)00%`. So if the slider index is 1, it returns a `translateX(-100%)` which would be the second slide. To make the items responsive, I media queried for each viewport width, and changed the width of each item relative to its parent. For a viewport width of 600px, for example, I wanted 2 items per slide, so I made their width 50%. 

```
export const SliderContext = createContext()

Card.Pane = function CardPane({ children, ...restProps }) {
	const [sliderIndex, setSliderIndex] = useState(0)

	const width = useWindowSize()
	const maxRows = width > 1200 ? 1 : width > 900 ? 2 : width > 600 ? 3 : 4

	if (sliderIndex > maxRows) {
		setSliderIndex(maxRows)
	}

	return (
		<SliderContext.Provider value={{ sliderIndex, setSliderIndex, maxRows }}>
			<Pane {...restProps}>{children}</Pane>
		</SliderContext.Provider>
	)
}

Card.Entities = function CardEntities({ children, ...restProps }) {
	const { sliderIndex } = useContext(SliderContext)
	return (
		<Entities {...restProps} sliderIndex={sliderIndex}>
			{children}
		</Entities>
	)
}

export const Entities = styled.div`
	display: block;
	margin: 0 56px;
	overflow-x: visible;
	white-space: nowrap;
    
    //insert slider index into translate
	transform: translateX(-${({ sliderIndex }) => sliderIndex}00%);
	transition: transform 0.3s ease;
	@media (max-width: 1000px) {
		margin: 0 30px;
	}
`

Card.PrevButton = function CardPrevButton({ children, ...restProps }) {
	const { sliderIndex, setSliderIndex } = useContext(SliderContext)

	function handleclick() {
		if (sliderIndex > 0) {
			setSliderIndex((sliderIndex) => sliderIndex - 1)
		}
	}
	return sliderIndex === 0 ? null : (
		<PrevButton onClick={() => handleclick()} {...restProps}>
			{children}
		</PrevButton>
	)
}

Card.NextButton = function CardNextButton({ children, ...restProps }) {
	const { sliderIndex, setSliderIndex, maxRows } = useContext(SliderContext)

	function handleclick() {
		if (sliderIndex < maxRows) setSliderIndex((sliderIndex) => sliderIndex + 1)
	}

	return sliderIndex === maxRows ? null : (
		<NextButton onClick={() => handleclick()} {...restProps}>
			{children}
		</NextButton>
	)
}

export const Item = styled.div`
	width: ${100 / 2}%;
	display: inline-block;
	flex-direction: column;
	padding: 0 2px;

	position: relative;
	cursor: pointer;
	transition: transform 0.2s;

	@media (min-width: 600px) {
		width: ${100 / 3}%;
		&:hover {
			transform: scale(1.3);
			z-index: 99;
		}
	}
	@media (min-width: 900px) {
		width: ${100 / 4}%;
	}
	@media (min-width: 1200px) {
		width: ${100 / 5}%;
	}
	@media (min-width: 1500px) {
		width: ${100 / 6}%;
	}

	@media (min-width: 1200px) {
		&:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
			display: block;
			width: 100%;
			white-space: normal;
			z-index: 100;
		}
	}
`
```

## Conclusion

Learning javascript and React over this past year has been overall really rewarding and I'm looking forward to working with it in the future. My background in UX has influenced the way I think about structuring these applications, as I can see what information needs to be passed in where, and how certain components should function. I'd really like to work on a project that combines these two disciplines further!