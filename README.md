# Toronto Waste Lookup

It is the project for Shopify Web Engineering Challenge. It is a web app to search for waste items using the Toronto Waste Wizard database.

## Instructions

The following **required** functionality is completed:

- [x] Reproduce the design as provided in the screenshot, which displays example search results.
- [x] The data must be taken from the [Waste Wizard Lookup data (JSON)](https://www.toronto.ca/city-government/data-research-maps/open-data/open-data-catalogue/#5ed40494-a290-7807-d5da-09ab6a56fca2).
- [x] Typing in the search field should *NOT* perform an API call.
- [x] A search must be performed when hitting enter or clicking the search button.
- [x] When the search input field is cleared, the list of results should also be cleared. 
- [x] Performing a search should render a list of potential matching items based on keywords. Each item should:
   - [x] Render the title and description of the item.
   - [x] Render a grey star button *if the item is not already favourited*.
   - [x] Render a green star icon *if the item is not already favourited*.
   - [x] Clicking the star button should add the item to the favourites list.
- [x] When the number of favourites is more than one, the app should render a list of items. Each saved item should:
   - [x] Render the title and description of the item.
   - [x] Render a green star button *if the item has been favourited*.
   - [x] Clicking the green star button should remove the item from the saved list.

## Video Walkthrough

<img src='https://i.imgur.com/sX63Qk1.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

What things you need to install the software and how to install them

```
node >=8.0.0
```

### Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
git clone https://github.com/ASHISH932/Shopify-Web-Engineering-Challenge.git
cd Shopify-Web-Engineering-Challenge
npm install
```
### Test

```bash
npm run test
```

### Usage

```bash
npm start
```

## Architecture 
<img src='https://i.imgur.com/NakvcA5.jpg' title='Video Walkthrough' width='' alt='App Architecture' />

## Test Cases

The 29 test case of this project is written in jest and enzyme. Enzyme is used for snapshot testing and UI simulation testing.

The test cases are in the same folder structure as the app, so the test case for reducer can be found on reducer folder in test folder.


## In-Memory Cache

As per the requirement frequently searched keywords are cached on the server. This is implemented by an in-memory cache.

### Implementation
Each keyword occurence is counted in an in memory cache, when it is more than a threshold amount(5 for now) it is been saved in cache for 6 hours. 

After the completion of 6 hours, the cache is removed from memory and keyword occurence is reduced by the threshold amount, so that it can be removed from frequently used if it is not accessed now frequently

## Built With

- [React](https://reactjs.org/) - The Frontend Web Framework Used
- [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps
- [Redux-Saga](https://redux-saga.js.org/) - Middleware for Redux
- [Jest](https://jestjs.io/) - Javascript unit testing tool
- [Enzyme](https://airbnb.io/enzyme/) - Component testing tool (Snapshot testing)
- [Npm](https://www.npmjs.com/) - Dependency Management
- [Express](https://expressjs.com/) - The Server Framework Used