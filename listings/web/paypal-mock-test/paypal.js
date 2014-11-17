var request = require('request');

function PayPal(options) {
  this.url = options.payPalUrl;
  this.rootUrl = options.rootUrl;
  this.payPalUrl = options.payPalUrl;
}

PayPal.prototype.generateUrl = function(order) {
  var customer = order.customer;
  var options = {
    business: this.user,
    image_url: this.rootUrl + '/img/store.gif',
    cbt: 'Download the book now',
    'return': this.rootUrl + '/paypal/success',
    cancel_return: this.rootUrl + '/paypal/cancel',
    notify_url: '',
    cmd: '_xclick',
    charset: 'UTF-8',
    rm: '2',
    no_note: '1',
    display: '1',
    bn: 'BuyNowBF',

    // Customer details
    address1: customer.address1,
    city: customer.city,
    country: customer.country,
    email: customer.email,
    first_name: customer.first_name,
    last_name: customer.last_name,
    state: customer.state,
    zip: customer.zip,
    tax_number: customer.tax_number,

    // Order details
    amount: 40,
    currency_code: 'GPB',
    discount_amount: 0,
    invoice: order.id,
    item_name: 'Node in Practice',
    tax: 5
  };

  // Escape the options
  var url = this.payPalUrl;
  var urlParts = [];
  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      urlParts.push(key + '=' + encodeURIComponent(options[key]));
    }
  }

  url = url + '?' + urlParts.join('&');

  return url;
};

PayPal.prototype.verify = function(order, cb) {
  var cmd = '_notify-validate';

  request.post(
    this.payPalUrl + '?cmd=' + cmd,
    { form: order },
    function(err, res, body) {
      if (body && body === 'VERIFIED') {
        cb();
      } else if (!err) {
        err = new Error('PayPal IPN error: ' + body);
      }
      cb(err);
    }.bind(this)
  );
};

module.exports = PayPal;
