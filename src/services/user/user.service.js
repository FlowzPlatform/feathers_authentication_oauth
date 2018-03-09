// Initializes the `User` service on path `/User`
const createService = require('feathers-mongoose');
// const createModel = require('../../models/User');
const hooks = require('./user.hooks');


module.exports = function (app) {
  // const Model = createModel(app);
  const Model = require('../../models/User.js');
  // console.log("Model",Model)
  const mongooseClient = app.get('mongooseClient');
  // console.log("mongooseClient", mongooseClient)
  const paginate = app.get('paginate');

  // const options = {
  //   name: 'user',
  //   Model,
  //   paginate
  // };

  
  // Initialize our service with any options it requires
  app.use('/user', createService({
    Model,
    paginate: {
      default: 2,
      max: 4
    }
  }));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('user');

  // mongooseClient.then(db => {
  // //   service.Model = mongooseClient.collection('User');
  // // });
  
  service.hooks(hooks);
};
