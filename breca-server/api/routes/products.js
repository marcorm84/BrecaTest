const express = require('express');
const router = express();
const ctrls = require('./../../controllers');

router.get('/categories', (req, res, next) => {
	res.status(200).json({
		data: ctrls.tasks.getCategories()
	});
});

router.get('/brands/:category', (req, res, next) => {
	res.status(200).json({
		data: ctrls.tasks.getBrands(req.params.category)
	});
});

router.get('/families/:brand/:category', (req, res, next) => {
	res.status(200).json({
		data: ctrls.tasks.getFamilies(req.params.brand, req.params.category)
	});
});

router.get('/products/:category/:brand/:family', (req, res, next) => {
	res.status(200).json({
		data: ctrls.tasks.getProducts(req.params.category, req.params.brand, req.params.family)
	});
});

module.exports = router;
