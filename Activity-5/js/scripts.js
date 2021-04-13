/**
 * Wrap everything in an IIFE (Immediatly Invoked Function Expression) to keep
 * our variables constrained to the scope of this function and out of the global scope.
 */
(function() {

    /****************************************************
     * Package Data and constructor objects
     */
    //Package data array simulated data source, such as JSon
    var data = [
        {
        name: 'emmet',
        description: 'Emmet is the number one code snippet tool.',
        author: 'emmetio',
        url: 'https://atom.io/packages/emmet',
        downloads: 1662209,
        stars: 2535,
        price: 10.50,
        selector: 'p1'
    }
];

// (Atom) Package constructor function
function Package(data){
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function (){
        return this.downloads.toLocaleString();
    }

    this.getFormattedStars = function (){
        return this.stars.toLocaleString ();
    }
}


/**
 * Utility function
 */

 // Returns today's date, formatted
 var getTodaysDate = function (){
     var today = new Date();
     return today.toDateString();
 }

 // Return DOM element by id.
 var getEl = function (id){
     return document.getElementById(id);
 };

/**
 * writes the package object's data to appropriate
 * DOM elements utilizing the package selector property
 * @param {Package} Package
 */
var writePackageinfo = function (package){
    // Get reference to DOM Elements
    var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector + '-author'),
        downloadEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + '-stars');

        // write package data to DOM elements
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
};

// write date
dateEl = getEl('date');
dateEl.textContent = getTodaysDate();

//write package data one-by-one
var emmet = new Package(data[0]);
writePackageinfo(emmet);

}());