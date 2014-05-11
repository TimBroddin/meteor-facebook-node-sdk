facebook-node-sdk
======================

A wrapper arround [facebook-node-sdk](https://www.npmjs.org/package/facebook-node-sdk). This allows you to do all things Facebook API server-side. 

This only brings the methods needed to access the API. For login flow use accounts-facebook.

##Features
- Allows you to set client keys in settings.json

	{
	    "facebook-node-sdk": {
	        "app_id": "XXXXXXXXXXXX",
	        "app_secret": "XXXXXXXXXXXXXXX"
	    }
	}

If you don't put this in settings.json, you'll have to init this yourself:

	var facebook = new Facebook({
        appID: 'XXXXXXXXX',
        secret: 'XXXXXXXXXXXXX'
    });


##Installation
	sh
	mrt add facebook-node-sdk


##Examples

See [here](https://www.npmjs.org/package/facebook-node-sdk).