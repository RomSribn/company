"use strict"
//===========================================================================================================================================================================================================


document.addEventListener("DOMContentLoaded", () => {
	Promise.all([getFetchingCompany(), getFetchingNews()]).then(res => {
		let companyData = res[0];
		let newsData = res[1];
		formattedDates(companyData, newsData)

		//showing our fields
		hidedFields.totalCompanies.classList.remove('d-none');
		hidedFields.listOfCompanies.classList.remove('d-none');
		hidedFields.companiesByLocation.classList.remove('d-none');
		hidedFields.newsCard.classList.remove('d-none');
		forSpinner.spinner.forEach(spinners => spinners.classList.add('d-none'));

		const uniqArr = ["Poland", "Ukraine", "United States", "Norway", "Sweden", "Germany"];
		
fields.listCompanies.addEventListener('change', handleGetListName)
fields.listByCountries.addEventListener('change', handleHide)



function handleGetListName(event){
	fields.partners.classList.remove('d-none')
	var evt = event.target
	let markup = [];
	companyData.list.forEach(item => {
		// log(item)
		if(item.name === evt.value){
			item.partners.forEach(itemPartners => markup.push(`<div class="partnerListItem"><div class="line"><div class="circleSmall"><h4 class="inner">${itemPartners.value}</h4></div></div><h4>${itemPartners.name}</h4></div>`))
		}
	})
	fields.listPartners.innerHTML = markup.sort().join('')
}

//hiding listByCountries after click
function handleHide(event){
	const evt = event.target
	fields.listByCountries.classList.add('d-none');
	oilCanvas.classList.remove('d-none')
}

//creating diagrams
let arr = [];
var oilCanvas = document.getElementById("oilChart");
res[0].list.forEach(item => arr.push(item.location.name))



function getCountryValues(txt){
       return arr.filter(i => i === txt)
}

function getResArr(){
  return uniqArr.map(item => getCountryValues(item).length);

}

res = getResArr();

var oilCanvas = document.getElementById("oilChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var oilData = {
	labels: uniqArr,
    datasets: [
        {
            data: res,
            backgroundColor: [
                "#e7e6e6",
                "#dddddd",
                "#cccccc",
                "#bbbbbb",
                "#aaaaaa"
            ]
        }]
};

var pieChart = new Chart(oilCanvas, {
  type: 'pie',
  data: oilData,
  options: {
                    legend: {
                        display: false
                    },
                    'onClick' : function (evt, item) {
                    	oilCanvas.classList.add('d-none');
                    	fields.listByCountries.classList.remove('d-none');
                    	let label = item[0]._model.label;
                        fields.listByCountries.innerHTML = createNameByCountries(companyData, label)
                    }
                }
});
oilCanvas.onclick = function(evt){
    var activePoints = pieChart.getElementsAtEvent(evt);
    // => activePoints is an array of points on the canvas that are at the same position as the click event.
};
	});
})







