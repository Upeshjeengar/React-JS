I am learning React from Hitesh Choudhary(<a href='https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige'> **Chai aur React** </a>).  
This repo provides a good hands summary(including theory and code) of his lectures.  
# Lecture 1
## Introduction and learning Plan

# Lecture 2 & 3
we have 2 methods to install packages(we can also use importing api's using JS)
npx-node package executor

**Method-1**  
install or create using `npm create-react-app app_name`   from package.json/"scripts" you can view various commands  
1.`npm run start` - to run  
2.`npm run build` - creates production code

let's explore files in our folder  
just to explore
you can delete src/setup.js, src/reportWebvitals.js, src/logo, src/App.css  
We had created a file `chai.jsx` in src folder.Flexible here(not while using vite)  

_**Note**: Above method has a heavy package to install, so it is not recommended_   

**Method-2**  
Install and create react-app using vite(bundler)-`npm create vite@latest` then choose react->JS npm   
In this method we don't have node modules so initialize it using `npm i` or `npm install` command

`npm run dev` - to run react-app we created using **vite** 
let's explore files in our folder  
just to explore
you can delete src/assets, src/app.css, src/index.html

we have now main.jsx and App.jsx

What's difference between above two approaches?

**What's special in React** - you can return HTML in JS function and then we can render that HTML.We have more capabilities with using HTML.  
But we had deleted index.html then how can we see a Webpage then?  
go to **package.json** you can see `react-script` in **dependencies**

We had created a file `chai.jsx` in src folder.file extension should stricly be `.jsx` and function name must start from capital

# Lecture 4
## In this lecture we will make our custom basic React
Comments are inserted in the code only(as there are only 2 code files),wherever felt necessary

How React do this?
in `main.jsx`,we created `<MyApp/>` function and react/bundler converts html into tree like structure as in customreact.js/`reactElement`

look at main.jsx of 01vitereact to get a deeper understanding how react works.

# Lecture 5
## Need of react hooks, and a basic counter project
see src/App.jsx   
Use of **react hooks**:UI Updation,   
basic method learned: function `useState()`- takes anything as input, returns a datatype and updation function.It will update data everywhere.

# Lecture 6
## Virtual DOM, Fibre and reconciliation

**CreateRoot** in `main.jsx`-   
Behind the scene it creates a DOM like structure.   
what is it's Need?  
It compares and updates main DOM and your DOM, and updates only things which are updated(changed). But in browsers everytime there is an update,browser reloads and new DOM is created.   
But in **React's virtual DOM** we can track from tree like structure.  

Sometimes an element is changing too frequently, so we don't need to update all intermediate values(Optimization step).  
read about `react filters` and `reconciliation`- on <a href="https://github.com/acdlite/react-filter-architecture">**This**</a>  website

# Lecture 7
## <a href='https://tailwindcss.com'>Tailwind</a> and Props in reactjs

intialize tailwind using `npx tailwindcss init -p` update `tailwind.config.js` (change content to configure tailwind) also update in `index.css`   
In jsx-use className instead of html class,Every independent tag(like img) should be a closing tag

Props:If you'd created a card, store it in components so that you can again use it
create `src/components/card.jsx` how to pass variables to this?  
using **props**
in card.jsx pass props as function parameter


# Lecture 8
## React interview question on counter
goto `02counter/src/App.jsx` Description is written in **addValue** function

# Lecture 10
## useEffect useRef and useCallback with 1 project
Optimized Project Password generator(Features: Has option for customizing with length, including numbers or char & Copy button to copy generated password)- Memoization using react hooks


# Lecture 12
## React router crash course
react-router-dom => Link and NavLink
<Link to='/'>