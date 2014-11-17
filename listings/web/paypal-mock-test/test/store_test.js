var app = require('./../app');
var assert = require('assert');
var request = require('supertest');
var payPalMock = require('./paypalmock');

function makeCustomer() { //<co id="callout-web-test-paypal-3-1" />
  return {
    address1: '123',
    city: 'Nottingham',
    country: 'GB',
    email: 'user@example.com',
    first_name: 'Paul',
    last_name: 'Smith',
    state: 'Nottinghamshire',
    zip: 'NG10932',
    tax_number: ''
  };
}

function makeOrder() { //<co id="callout-web-test-paypal-3-2" />
  return {
    id: 1,
    customer: makeCustomer()
  };
}

function makePayPalIpn(order) { //<co id="callout-web-test-paypal-3-3" />
  // More fields should be used for the real PayPal system
  return {
    'payment_status': 'Completed',
    'receiver_email': order.customer.email,
    'invoice': order.id
  };
}

describe('buying the book', function() {
  var payPalServer;

  before(function(done) { //<co id="callout-web-test-paypal-3-4" />
    payPalServer = payPalMock.listen(3001, done);
  });

  after(function(done) { //<co id="callout-web-test-paypal-3-5" />
    payPalServer.close(done);
  });

  it('should redirect the user to paypal', function(done) {
    var order = makeOrder();

    request(app)
      .post('/buy')
      .send(order)
      .expect(302, done); //<co id="callout-web-test-paypal-3-6" />
  });

  it('should handle IPN requests from PayPal', function(done) {
    var order = makeOrder();

    app.once('purchase:accepted', function(details) {
      assert.equal(details.receiver_email, order.customer.email);
    });

    request(app)
      .post('/paypal/success')
      .send(makePayPalIpn(order))
      .expect(200, done); //<co id="callout-web-test-paypal-3-7" />
  });
});
