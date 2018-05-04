const data = require('./../products.json');
const _ = require('lodash');

const tasksCtrl = {
  getCategories: function() {
  	return _(data).map('DE_CATE').uniq().value();
	},
	getBrands: function(category) {
  	return _(data).filter({DE_CATE:category}).map('DE_EQUI').uniq().value();
	},
	getFamilies: function(brand, category) {
  	return _(data).filter({DE_EQUI:brand, DE_CATE:category}).map('DE_FAMI').uniq().value();
	},
	getProducts: function(category, brand, family) {
		return _(data).filter({
  			DE_CATE: category,
  			DE_EQUI: brand,
  			DE_FAMI: family
  		});
	}
}

module.exports = tasksCtrl;