var macaddress = require('macaddress');


module.exports = function IpFetch(req,res){

    macaddress.one().then(function (mac) {
        console.log("Mac address for this host: %s", mac);  
        res.send(mac);
      });
}