var util = require('util');
var {Router} = require('express');
var striptags = require('striptags');

// Our API for demos only
import {fakeDataBase} from './db';
import {fakeDemoRedisCache} from './cache';
const nodemailer = require('nodemailer');

// you would use cookies/token etc
var USER_ID = 'f9d98cf1-1b96-464e-8755-bcc2a5c09077'; // hardcoded as an example

// Our API for demos only
export function serverApi(req, res) {
  let key = USER_ID + '/data.json';
  let cache = fakeDemoRedisCache.get(key);
  if (cache !== undefined) {
    console.log('/data.json Cache Hit');
    return res.json(cache);
  }
  console.log('/data.json Cache Miss');

  fakeDataBase.get()
    .then(data => {
      fakeDemoRedisCache.set(key, data);
      return data;
    })
    .then(data => res.json(data));
}


// todo API

var COUNT = 4;
var TODOS = [
  { id: 0, value: 'finish example', created_at: new Date(), completed: false },
  { id: 1, value: 'add tests',      created_at: new Date(), completed: false },
  { id: 2, value: 'include development environment', created_at: new Date(), completed: false },
  { id: 3, value: 'include production environment',  created_at: new Date(), completed: false }
];

export function createTodoApi() {

  var router = Router()

  router.route('/todos')
    .get(function(req, res) {
      console.log('GET');
      // 70ms latency
      setTimeout(function() {
        res.json(TODOS);
      }, 0);

    })
    .post(function(req, res) {
      console.log('POST', util.inspect(req.body, {colors: true}));
      var todo = req.body;
      if (todo) {
        TODOS.push({
          value: todo.value,
          created_at: new Date(),
          completed: todo.completed,
          id: COUNT++
        });
        return res.json(todo);
      }

      return res.end();
    });

  router.param('todo_id', function(req, res, next, todo_id) {
    // ensure correct prop type
    var id = Number(req.params.todo_id);
    try {
      var todo = TODOS[id];
      req.todo_id = id;
      req.todo = TODOS[id];
      next();
    } catch (e) {
      next(new Error('failed to load todo'));
    }
  });

  router.route('/todos/:todo_id')
    .get(function(req, res) {
      console.log('GET', util.inspect(req.todo, {colors: true}));

      res.json(req.todo);
    })
    .put(function(req, res) {
      console.log('PUT', util.inspect(req.body, {colors: true}));

      var index = TODOS.indexOf(req.todo);
      var todo = TODOS[index] = req.body;

      res.json(todo);
    })
    .delete(function(req, res) {
      console.log('DELETE', req.todo_id);

      var index = TODOS.indexOf(req.todo);
      TODOS.splice(index, 1);

      res.json(req.todo);
    });

  return router;
};

// For send Mail
export function sendMailApi(req, res) {
  let message = '';

  console.log(req.body.name); //returns undefined

	message = '<html><body>';
	message += '<h1>Pool Service Request</h1>';
	message += '<table rules="all" style="border-color: #666;" cellpadding="10">';
	// message += "<tr style=\"text-align:center;height:80px;background-color:#abc;margin:0;border:1px solid #456;border-radius:3px;padding:10px;\"><td><strong>Name:</strong> </td><td>" + striptags(req.body.name) + "</td></tr>";
	message += "<tr><td><strong>Name:</strong> </td><td>" + striptags(req.body.name) + "</td></tr>";
	message += "<tr><td><strong>Email:</strong> </td><td>" + striptags(req.body.email) + "</td></tr>";
	message += "<tr><td><strong>Phone Number:</strong> </td><td>" + striptags(req.body.phone) + "</td></tr>";
	message += "<tr><td><strong>Address:</strong> </td><td>" + striptags(req.body.address) + "</td></tr>";
	message += "<tr><td><strong>Service type:</strong> </td><td>" + striptags(req.body.service_type) + "</td></tr>";
	message += "<tr><td><strong>Notes:</strong> </td><td>" + striptags(req.body.note) + "</td></tr>";
	message += "</table>";
	message += '</body></html>';
	message += "<br />";
	message += "<div style=\"text-align:center; background-color:#abc; margin:0; border:1px solid #456; border-radius:3px; padding:20px;\">Service Request</div>";

  let mailTo = {
    from: `"Pool Service Request" <${req.body.email}>`,
    to: "webmaster@rosevillepoolservice.com",
    subject: "We need pool service from you.",
    html: message,
    replyTo: req.body.email
  };

  let smtpTransport = nodemailer.createTransport({
    host: "mail.rosevillepoolservice.net",
    port: 465,
    secure: true,
    auth: {
      user: "customer@rosevillepoolservice.net",
      pass: "yAq9h;CVEWmx"
    },
    tls: {
        rejectUnauthorized: false
    }
  });

  smtpTransport.sendMail(mailTo, function (error, info) {
    if (error) {
      console.log("Error sending mail: %s", error);
      res.json({success:false, error}).end();
    } else {
      console.log("Message sent: " + info.messageId, info.response);
      res.json({success:true}).end();
    }
  });
}