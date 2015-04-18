Facebook = Npm.require('facebook-node-sdk');
if (keys = Meteor.settings['facebook-node-sdk']) {
    // overwrite Facebook with ready to use object
    Facebook = new Facebook({
        appId: keys.app_id,
        secret: keys.app_secret
    });
} else {
    // DIY
}
