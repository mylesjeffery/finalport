---
slug: front-end-developer
tags:
  - Development
title: Becoming A Front End Developer
date: 2021-04-06T23:20:24.347Z
description: Over the course of the COVID pandemic, I self-taught frontend
  development following Scrimba's Frontend Development Pathway. With prior
  experience in HTML/CSS, I learned JavaScript and React through building
  projects, ranging from a simple carousel to a Netflix clone built with React,
  Firebase, and styled-components.
feature: /img/why-use-react-instead-of-javascript-html-and-css.jpeg
---
After graduating from Parsons in the spring of 2020 the world suddenly changed! The COVID lock down had started. No one was hiring graduates at that time, so I moved back home to the Bay Area.

I've always entertained the idea that I'd like to be able to take a project from concept, through ideation, design, flesh out the user flows and interactions; right through development and into production for real use by real end users.  I already had a strong grounding in the design part of the process, but I didn't have the developer skills necessary to make the app.  I decided to take advantage of the lockdown and set out to learn Front End Development.

I had taken a basic web development class in college that was mostly HTML and CSS, which I felt pretty comfortable with. I was also familiar with the platform Webflow, which is a website design tool that uses HTML and CSS, as I had designed my previous portfolio with it. However dynamic websites and applications that I want to build require javascript and a front end frameworks such as React, React Native, Angular, Vue etc, APIs and backend services. There is a lot to learn and many many tools and frameworks.

I followed Scrimba's [Front End Developer Pathway](https://scrimba.com/learn/frontend), as I liked the ability to pause the screencast and dive right into the code in the browser, as opposed to having VS Code on one side of my screen copying everything the video was doing on the right. I felt that it gave me a better understanding of the code when I could engage with it directly and play with it.

These are a few projects I built along the way, and what I learned from each of them.

<br></br>

<hr></hr>

## Javascript Carousel

<a href="https://mylesjeffery-carousel.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a>

<a href="https://github.com/mylesjeffery/carousel" target="_blank" rel="noreferrer">Github Repo</a>

This project introduced me to manipulating elements in the DOM with javascript via the carousel. It was accomplished by adding a class, "carousel-item-visible" and removing class "carousel-item-hidden", based on the index of the slide, which if is at the end of the list of slides, goes back to the first slide. 

<br></br>

<hr></hr>

## Javascript Pacman

<a href="https://mylesjeffery-js-pacman.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a>

<a href="https://github.com/mylesjeffery/pacman/blob/master/main.js" target="_blank" rel="noreferrer">Github Repo</a>

It's a little bit clunky, but it's a fully functional Pacman all in vanilla javascript. It uses css-grid to display the game, and moves Pacman around based on user input with the arrow keys. It works by adding and removing classes from each square of the grid when the user inputs or the ghosts move. 

<br></br>

<hr></hr>

## Punk API Beer App

<a href="https://mylesjeffery-beer.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a>

<a href="https://github.com/mylesjeffery/my-beer-app/blob/main/main.js" target="_blank" rel="noreferrer">Github Repo</a>

This was my introduction to fetching data from an API using async and await. It uses the Punk Beer API, which  returns JSON with a bunch of draft beer brands. The user can filter for alcohol content and hoppiness, on three levels each. It also has pagination! 

<br></br>

<hr></hr>

## React Movie Search App

<a href="https://mylesjeffery-reactmoviesearchapp.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a>

<a href="https://github.com/mylesjeffery/movie_search_app_react" target="_blank" rel="noreferrer">Github Repo</a>

My first project in React, with higher order components, fetching data from an API, using a form to search. It was my introduction to useState, and my first time writing JSX. This opened my eyes to the potential of React to create interactive, dynamic applications.

<br></br>

<hr></hr>

## React Netflix Clone with Authentication (Firebase), Live Search,  styled-components, and Testing with react-testing-library

<a href="https://mylesjeffery-netflixclone.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a>

Note: for demo you can either sign up with your own email or login with the email: "demo@user.com" and password: "demouser"

<a href="https://github.com/mylesjeffery/netflix-clone" target="_blank" rel="noreferrer">Github Repo</a>

![netflix](/img/netflix.jpg)

For this project I followed [this 10 hour long tutorial](https://www.youtube.com/watch?v=x_EEwGe-a9o&t=4085s&ab_channel=KarlHadwen), and expanded on it by styling it to be responsive to any screen size. It taught me a lot about React and how to structure applications, using styled-components to use CSS-in-JS modularly, and how to integrate user authentication using Google's Firebase. The movie and TV show data was stored in Firebase's Firestore. I learned how to use react-router to hide the browse content until the user signs up or signs in, and built custom hooks to manage context and authentication. useState, useContext, useEffect, useRef, and more react hooks were used. It included a live-search functionality, which, when the user types in, automatically loads the results and brings the show or movie to the top of the list. The tutorial also taught me how to use react-testing-library to test the app, describing components and see if they render elements correctly, as well as firing events and testing their functionality.

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

<br></br>

<hr></hr>

## The Journey Continues...

Turns out I really enjoy coding! Just like building a house, it's vital that your foundations are strong. I took my time, practiced and mastered each layer of the coding stack. When I stand back and think about my learning journey, I think the key skill I've learned is how to learn. I realize that my coding journey will never be complete, there will always be new languages, frameworks and tools. However, I feel confident in my abilities to grasp any new concepts, syntax and development processes. I feel empowered to take on anything I set my mind to.

My background in UX has influenced the way I think about structuring applications, as I can see what information needs to be passed in where, and how certain components should function within the context of a whole application. 

Overall, learning javascript and React over this past year has been really rewarding and I'm looking forward to working with it in the future. 

For future growth I'd love to work more in the combination of these two disciplines, working with UX designers and developers to help realize engaging, intuitive experiences.  Lastly, but perhaps most importantly I want to join a team where I can learn from more experienced developers and merge my code into master.   I'm hoping that the combination of my design / UX and now coding skills make me an interesting candidate!  If so, please [contact me](mailto:mylesjeffery96@gmail.com), I'd love to hear from you! 

Thanks for reading!