const rp = require('request-promise');
const $ = require('cheerio');
// const url ='https://students.wts.edu/resources/creeds/westminsterconfession.html';
const url = 'https://reformed.org/documents/wcf_with_proofs/';

rp(url)
  .then((html) => {
    console.log($('ol > a', html));
    console.log($('ol > a', html).length);

 //   for(let i=0; i<33; i++) { 
 //     console.log($('ol > li', html)[i]);
 //   }
//
  })
  .catch((err) => {
    console.log(err);
  });