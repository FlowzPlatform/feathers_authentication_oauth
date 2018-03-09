const { authenticate } = require('@feathersjs/authentication').hooks;
const User = require('../../models/User.js');
// console.log("User-------------------------", User)



module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [ hook => processProfile(hook)],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

async function processProfile(hook) {
  // console.log("hook", hook)
  //As an example extract the user email
  console.log("hook.data.github::::::::", hook.data.github)
  if (hook.data.github) {
    let id = hook.data.github.profile.id
    let provider = hook.data.github.profile.provider;
    let fullname = hook.data.github.profile._json.login;
    let access_token = hook.data.github.profile.accessToken;
    var avatar_url = hook.data.github.profile._json.avatar_url;
    var email = hook.data.github.profile.emails[0].value;
    console.log("email------->",email)

    hook.data.aboutme = null;
    hook.data.fullname =  hook.data.github.profile.username;
    hook.data.firstname = hook.data.github.profile._json.login;
    hook.data.lastname = hook.data.github.profile._json.login;
    hook.data.email = hook.data.github.profile.emails[0].value;
    hook.data.password = null;
    hook.data.dob = null;
    hook.data.role = null;
    hook.data.signup_type = null;
    hook.data.image_name = null;
    hook.data.image_url = hook.data.github.profile._json.avatar_url;
    hook.data.provider = hook.data.github.profile.provider;
    hook.data.access_token = hook.data.github.accessToken;
    hook.data.isEmailConfirm = 0;
    hook.data.social_uid = hook.data.github.profile.id;
    hook.data.isActive = 1;
  }else if (hook.data.google){

    hook.data.aboutme = null;
    hook.data.fullname =  hook.data.google.profile.displayName;
    hook.data.firstname = hook.data.google.profile.name.givenName;
    hook.data.lastname = hook.data.google.profile.name.familyName;
    hook.data.email = hook.data.google.profile.emails[0].value;
    hook.data.password = null;
    hook.data.dob = null;
    hook.data.role = null;
    hook.data.signup_type = null;
    hook.data.image_name = null;
    hook.data.image_url = hook.data.google.profile._json.avatar_url;
    hook.data.provider = hook.data.google.profile.provider;
    hook.data.access_token = hook.data.google.accessToken;
    hook.data.isEmailConfirm = 0;
    hook.data.social_uid = hook.data.google.profile.id;
    hook.data.isActive = 1;

  }else if (hook.data.facebook){
    console.log("hook.data.facebook::::::::", hook.data.facebook)
    hook.data.aboutme = null;
    hook.data.fullname =  hook.data.facebook.profile.displayName;
    hook.data.firstname = hook.data.facebook.profile.name.givenName;
    hook.data.lastname = hook.data.facebook.profile.name.familyName;
    hook.data.email = hook.data.facebook.profile.emails[0].value;
    hook.data.password = null;
    hook.data.dob = null;
    hook.data.role = null;
    hook.data.signup_type = null;
    hook.data.image_name = null;
    hook.data.image_url = hook.data.facebook.profile._json.avatar_url;
    hook.data.provider = hook.data.facebook.profile.provider;
    hook.data.access_token = hook.data.facebook.accessToken;
    hook.data.isEmailConfirm = 0;
    hook.data.social_uid = hook.data.facebook.profile.id;
    hook.data.isActive = 1;

  }
    
    // let user = new User({ aboutme: null, fullname: fullname, firstname: null, lastname: null, email: null, password: null, dob: null, role: null, signup_type: null, image_name: null, image_url: null, forget_token_created_at: null, provider: provider, access_token: access_token, isEmailConfirm: 0, social_uid: id, isActive: 1 });
    // user.save(function (err,res) {
    //   if (err) {
    //     console.log(err);
    //   }else {
    //     console.log(res);
    //   }
    // })
  // }
}
