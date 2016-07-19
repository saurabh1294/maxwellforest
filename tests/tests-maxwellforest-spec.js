// tests-moneywallet-spec.js
describe('MaxwellForest TDD', function() {
	it('should show the coffeecompany homepage', function() {
		console.log('Visiting the coffeecompany website');
		browser.driver.get('https://www.coffeecompany.com.au');
	});
});

describe('Run delivery order test', function() {
	it('delivery order Test1', function() {
		console.log('Bot checking different coffees provided');
		browser.driver.findElement(by.css('a[href$="coffee"]')).click();
	});
});

describe('Run delivery order test', function() {
	it('delivery order Test2', function() {
		console.log('Bot checking green beans coffee');
		browser.driver.findElement(by.css('.green-beans')).click();
	});
});

describe('Run delivery order test', function() {
	it('delivery order Test3', function() {
		console.log('Bot now visiting Brazil santos coffee page');
		browser.driver.findElement(by.css('a[href$="brazil-santos-unroasted"]')).click();
	});
});

describe('Run delivery order test', function() {
	it('delivery order Test4', function() {
		console.log('Selecting 1 kg of brazil santos coffee');
		browser.driver.findElement(by.id('sizeOption')).sendKeys('1 kg');
	});
});

describe('Run delivery order test', function() {
	it('delivery order Test5', function() {
		console.log('adding check out product comment');
		browser.driver.findElement(by.id('comment')).sendKeys('Checking out 1 kg of Brazil Santos unroasted Coffee');
	});
});

describe('Run delivery order test', function() {
	it('delivery order Test6', function() {
		console.log('adding 1 kg of brazil santos coffee to shopping bag');
		browser.driver.findElement(by.id('AddToBag')).click();
	});
});

describe('Run delivery order test', function() {
	it('delivery order Test7', function() {
		console.log('Checking out 1 kg of brazil santos coffee for you now');
		browser.driver.sleep(5000);
		browser.driver.findElement(by.id('Checkout')).click();
	});
});

describe('Run delivery order test', function() {
	it('delivery order Test8', function() {
		console.log('Continuing checkout as guest');
		browser.driver.findElement(by.css('a[href$="checkout"]')).click();
	});
});

describe('Run delivery order test', function() {
	it('delivery order Test9', function() {
		console.log('Filling out address and billing details preferences and payment type');
		browser.driver.findElement(by.id('BillingAddress_FirstName')).sendKeys('Saurabh');
		browser.driver.findElement(by.id('BillingAddress_LastName')).sendKeys('Gattani');
		browser.driver.findElement(by.id('BillingAddress_Address1')).sendKeys('5/44 Harris Street, Harris Park');
		browser.driver.findElement(by.id('BillingAddress_Address2')).sendKeys('Sydney, NSW, 2150');
		browser.driver.findElement(by.id('BillingAddress_StateId')).sendKeys('New South Wales');
		browser.driver.findElement(by.id('BillingAddress_Suburb')).sendKeys('Harris Park');
		browser.driver.findElement(by.id('BillingAddress_Postcode')).sendKeys('2150');
		browser.driver.findElement(by.id('BillingAddress_Company')).sendKeys('Home');
		browser.driver.findElement(by.id('BillingAddress_Phone')).sendKeys('0413380230');
		browser.driver.findElement(by.id('BillingAddress_Email')).sendKeys('saurabh.gattani@gmail.com');
		browser.driver.findElement(by.id('MemberCheckoutSignUp_IsSubscribed')).click();
		browser.driver.findElement(by.id('BecomeMember')).click();
		browser.driver.findElement(by.xpath('.//*[.="Express Post"]')).click();
		browser.driver.findElement(by.id('paypalPayment')).click();
		//browser.driver.findElement(by.id('IsConfirmPaypal')).click(); - click on paypal disabled
		browser.driver.sleep(10000);
	});
});


