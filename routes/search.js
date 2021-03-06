var data = require("../data.json");

exports.view = function(req, res){
	// reset keyword
	var keyWord = "";
	keyWord = req.query.txtSearch;

	if(keyWord !== "" && keyWord != undefined) {
		keyWord = keyWord.toLowerCase();
		for(i=0; i<data.list.length; i++) {
			var item = data.list[i];
			if(item.name.toLowerCase().indexOf(keyWord) > 0 || item.brand.toLowerCase().indexOf(keyWord) > 0 || item.category.toLowerCase().indexOf(keyWord) > 0) {
				data.res.push(item);
			}
		}
	}

    res.render('search', data);
};

// function showResult(result) {
// 	var projectHTML = '<a href="#" class="detailsImage">' +
// 	'<img src="' + result['product_image_urls'] + '" class="img"></a>' +
// 	'<p>' + result['name'] +
// 	'</p>' + result['description'];
// }

