"use strict"
const log = txt => console.log(txt);
//===========================================================================================================================================================================================================


const fields = {
	total: document.querySelector('.total'),
	listCompanies: document.getElementById('listCompanies'),
	listPartners: document.querySelector('.partnersList'),
	listByCountries: document.getElementById('listByCountry'),
	partners: document.getElementById('partners'),
}

const newsFields = {
	cardImg: document.querySelector('.card-image'),
	cardTitle: document.querySelector('.card-title'),
	cardText: document.querySelector('.card-text'),
	cardsAuthor: document.querySelector('.author'),
	cardsPublic: document.querySelector('.public')
}

// log(newsFields.cardText.innerText.slice(0, 10))
const hidedFields = {
	totalCompanies: document.querySelector('.circle'),
	listOfCompanies: document.querySelector('.listCompanies'),
	companiesByLocation: document.querySelector('.companiesByLocation'),
	newsCard: document.querySelector('.carousel')
}
const forSpinner = {
	spinner: document.querySelectorAll('.sk-circle')
}

const carousel = document.querySelector('.carousel-inner')
// log(fields.partners)
// log(fields.total.innerHTML)

// log(fields.listCompanies)


//fetching dates
function getFetchingCompany(){
	return fetch('http://codeit.pro/codeitCandidates/serverFrontendTest/company/getList')
			.then(response => {
				if(response.ok) return response.json();
				throw new Error ('Error fetching')
			})
			// .then(data => data)
			.catch(error => log(error))
}
function getFetchingNews(){
	return fetch('http://codeit.pro/codeitCandidates/serverFrontendTest/news/getList')
	.then(response => {
		if(response.ok) return response.json();
				throw new Error ('Error fetching')
	})
	// .then(data => data)
	.catch(error => log(error))
}




//creating list of companies
function createNameList(company){
	let markup = [];
	company.list.forEach(item => {
		markup.push(`<option>${item.name}</option>`)
	})
	return markup
}


//list of companies by countries
function createNameByCountries(company, item){
	let markup = [];
	company.list.forEach(i => {
		if(i.location.name === item){
			markup.push(`<option>${i.name}</option>`)
		}
	})
	return markup
}

//create news list
// put title in h4 ${title}, when title will be excist
function createNewsList(news){
	let markup = [];
	news.list.forEach(i => {

		markup.push(`<div class="carousel-item"><div class="card border-0"><div class="row no-gutters"><div class="col-auto"><img src="${i.img}" class="img-fluid card-image" alt="News Image"></div><div class="col"><div class="card-block px-2"><a href="https://${i.link}" class="badge badge-light"><h4 class="card-title">Title</h4></a><p class="card-text">${i.description.slice(0, 170)}...</p></div></div></div><div class="mt-3 w-100"><div class="col"><p class="author"><span class="font-weight-bold">Author: </span>${i.author}</p><p class="public"><span class="font-weight-bold">Public: </span>${getDate(i.date)}</p></div></div></div></div>`)
	})
	markup.splice(0, 1, `<div class="carousel-item active"><div class="card border-0"><div class="row no-gutters"><div class="col-auto"><img src="${news.list[0].img}" class="img-fluid card-image" alt="News Image"></div><div class="col"><div class="card-block px-2"><a href="https://${news.list[0].link}" class="badge badge-light"><h4 class="card-title">Title</h4></a><p class="card-text">${news.list[0].description.slice(0, 170)}...</p></div></div></div><div class="mt-3 w-100"><div class="col"><p class="author"><span class="font-weight-bold">Author: </span>${news.list[0].author}</p><p class="public"><span class="font-weight-bold">Public: </span>${getDate(news.list[0].date)}</p></div></div></div></div>`);
	return markup
}

//get date of public some news post
function getDate(date){
	let format = date+'000';
	let d = new Date(+format);
	let formatter = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric"
});
	return formatter.format(d)
}


//input fields from company

function formattedDates(company, news){
	fields.total.innerText = company.list.length;
	fields.listCompanies.innerHTML = createNameList(company).sort().join('');
	carousel.innerHTML = createNewsList(news).join('');
	
}
















