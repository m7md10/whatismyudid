
/*
 * GET home page.
 */

exports.index = function(req, res){

    var ua = require('useragent');
	var domain = 'udid882992929292.herokuapp.com';
    if (!ua.is(req.headers['user-agent']).mobile_safari)
    {
        res.render('index-notios', { title: domain});
    }
    else
    {
        if (req.cookies.udid)
        {
            res.redirect('/enrollment');
        }
        else
        {
            res.render('index', { title: domain});
        }
    }

};
