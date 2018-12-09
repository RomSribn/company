"use strict"
const log = txt => console.log(txt);
//===========================================================================================================================================================================================================


const fields = {
	total: document.querySelector('.total'),
	listCompanies: document.getElementById('listCompanies'),
	listPartners: document.querySelector('.partnersList'),
	listByCountries: document.getElementById('listByCountry'),
	partners: document.getElementById('partners')
}
log(fields.partners)
log(fields.total.innerHTML)

log(fields.listCompanies)

fields.listCompanies.addEventListener('click', handleGetListName)
fields.listByCountries.addEventListener('click', handleHide)


//hiding listByCountries after click
function handleHide(event){
	const evt = event.target
	fields.listByCountries.classList.add('d-none');
	oilCanvas.classList.remove('d-none')
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
//create list of partners
// function createPartnersList(company){
// 	let markup = [];
// 	// log(company)
// 	company.list.forEach(item => {
// 		// log(item)
// 		if(item.name === evt.innerHTML){
// 			item.partners.forEach(itemPartners => markup.push(`<div class="partnerListItem"><div class="line"><div class="circleSmall"><h4 class="inner">${itemPartners.value}</h4></div></div><h4>${itemPartners.name}</h4></div>`))
// 		}
// 	})
// 	log(markup)
// 	return markup;
// }

//getting name company from "List of companies"
function handleGetListName(event){
	fields.partners.classList.remove('d-none')
	var evt = event.target
	log(event)
	let markup = [];
	// log(company)
	jsondata.list.forEach(item => {
		// log(item)
		if(item.name === evt.innerHTML){
			item.partners.forEach(itemPartners => markup.push(`<div class="partnerListItem"><div class="line"><div class="circleSmall"><h4 class="inner">${itemPartners.value}</h4></div></div><h4>${itemPartners.name}</h4></div>`))
		}
	})
	fields.listPartners.innerHTML = markup.sort().join('')
}


//input fields from company

function formattedDates(company){
	fields.total.innerText = company.list.length;
	fields.listCompanies.innerHTML = createNameList(company).sort().join('');

	
}


formattedDates(jsondata)







