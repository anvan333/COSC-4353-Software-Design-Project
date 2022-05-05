// const assert = require('chai').assert;

// const chai = require('chai')
// const chaiHttp = require('chai-http')
// const app = require('../views');
// chai.should();
// chai.use(chaiHttp);

// checkHistResult = app.checkHist();
// checkHist0Result = app.checkHist()[0];
// checkHist1Result = app.checkHist()[1];
// checkHist2Result = app.checkHist()[2];

// checkNameResult = app.user().full_name;
// checkfirst_street = app.user().first_street;
// checksec_street = app.user().sec_street;
// checkStateResult = app.user().state;
// checkCityResult = app.user().city;
// checkzipcodeResult = app.user().zipcode;
// server = app.server;

// describe('Server',function(){
//     describe("GET /profile", () => {
//         it("should give err", (done) => {
//             chai.request(server)
//                 .get("/profile")
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                 done();
//                 })
//         })
//     })

//     it("should give err", (done) => {
//         chai.request(server)
//             .get("/notprofile")
//             .end((err, response) => {
//                 response.should.have.status(404);
//             done();
//             })
//     })

//     it("updates client profile", (done) => {
//         const user = {
//             full_name: 'first last', 
//                 first_street: '394', 
//                 sec_street: '5063 Spring Lake Rd',
//                 state: 'TX',
//                 city: 'Houston', 
//                 zipcode: '77045'
//         }
//         chai.request(server)
//             .get("/profile")
//             .send(user)
//             .end((err, response) => {
//                 response.should.have.status(200);
//                 response.body.should.be.a('object');
//             done();
//             })
//         })

//     describe("POST /login", () => {
//         it("logs in", (done) => {
//           const user = {
//             username: "first",
//             password: "last",
//           };
//           chai
//             .request(server)
//             .post("/login")
//             .send(user)
//             .end((err, response) => {
//               response.should.have.status(200);
//               done();
//             });
//         });
//         it("fails to login", (done) => {
//           const user = {
//             username: "11",
//             password: "1111",
//           };
//           chai
//             .request(server)
//             .post("/login")
//             .send(user)
//             .end((err, response) => {
//               response.should.have.status(200);
//               done();
//             });
//         });
//       });

//       describe("POST /login", () => {
//         it("Password is valid", (done) => {
//           const user = {
//             password: "last"
//           };
//           chai
//             .request(server)
//             .post("/login")
//             .send(user)
//             .end((err, response) => {
//               response.should.have.status(200);
//               done();
//             });
//         });
//         it("Password is invalid", (done) => {
//           const user = {
//             password: "2222"
//           };
//           chai
//             .request(server)
//             .post("/login")
//             .send(user)
//             .end((err, response) => {
//               response.should.have.status(200);
//               done();
//             });
//         });
//       });


//     describe("GET /editProfile", () => {
//         it("editprofile is valid", (done) => {
//             chai.request(server)
//                 .get("/editProfile")
//                 .end((err, response) => {
//                     response.body.should.be.a('object');
//                     response.should.have.status(200);
//                 done();
//                 })
//         })

//         it("editprofile not valid", (done) => {
//             chai.request(server)
//                 .get("/editProfiles")
//                 .end((err, response) => {
//                     response.body.should.be.a('object');
//                     response.should.have.status(404);
//                 done();
//                 })
//         })
//     })
    
//     describe("POST /editProfile", () => {
//         it("POST user credentials", (done) => {
//             const user = {
//                 full_name: 'first last', 
//                 first_street: '394', 
//                 sec_street: '5063 Spring Lake Rd',
//                 state: 'TX',
//                 city: 'Houston', 
//                 zipcode: '77045'
//             }
//             chai.request(server)
//                 .post("/editProfile")
//                 .send(user)
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                     response.body.should.be.a('object');
//                 done();
//                 })
//         })
//     })
//     describe("GET /fuel_quote", () => {
//         it("fuel quote valid", (done) => {
//             chai.request(server)
//                 .get("/fuel_quote")
//                 .end((err, response) => {
//                     response.body.should.be.a('object');
//                     response.should.have.status(200);
//                 done();
//                 })
//         })
//     })

//     describe("POST /fuel_quote", () => {
//         it("fuel quote not valid", (done) => {
//             chai.request(server)
//                 .post("/fuel_quote")
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                     response.should.be.a('object');
//                 done();
//                 })
//         })
//         it("fuel quote form is valid", (done) => {
//             const user = {
//               gallons: "2000",
//               date: "05/19/2022",
//             };
//             chai
//             .request(server)
//             .post("/fuel_quote")
//             .send(user)
//             .end((err, response) => {
//               response.should.have.status(200);
//               done();
//             });

//         it("fuel quote invalid", (done) => {
//             const user = {
//               gallons: "0",
//               date: "na",
//             };
//             chai
//             .request(server)
//             .post("/fuel_quote")
//             .send(user)
//             .end((err, response) => {
//               response.should.have.status(404);
//               done();
//             });
//         });
        
        
//     })
// });

// describe("GET /logout", () => {
//     it("logout successful", (done) => {
//         chai.request(server)
//             .get("/logout")
//             .end((err, response) => {
//                 response.body.should.be.a('object');
//                 response.should.have.status(200);
//             done();
//             })
//     })

//     it("logout unsuccessful", (done) => {
//         chai.request(server)
//             .get("/logout")
//             .end((err, response) => {
//                 response.body.should.be.a('object');
//                 response.should.have.status(404);
//             done();
//             })
//     })
// })
//     describe("GET /", () => {
//         it("Should get the home page with 200 status", (done) => {
//             chai.request(server)
//                 .get("/")
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                 done();
//                 })
//         })
//     })

//     describe("GET /login", () => {
//         it("Should get the login page with 200 status", (done) => {
//             chai.request(server)
//                 .get("/login")
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                 done();
//                 })
//         })
//     })

//     describe("GET /register", () => {
//         it("Should get the register page with 200 status", (done) => {
//             chai.request(server)
//                 .get("/register")
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                 done();
//                 })
//         })
//     })

//     describe("POST /register", () => {
//         it("It should authenticate registration", (done) => {
//             const user = {
//             username: "Darwin",
//             password: "Morales",
//             };
//             chai.request(server)
//                 .post("/register")
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                 done();
//                 })
//         })
//     })

//     describe("GET /history", () => {
//         it("Should get the history page with 200 status", (done) => {
//             chai.request(server)
//                 .get("/history")
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                 done();
//                 })
//         })
//     })

//     describe("GET /api/history", () => {
//         it("Should get the history page with 200 status", (done) => {
//             chai.request(server)
//                 .get("/api/history")
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                 done();
//                 })
//         })
//     })

//     describe("POST /register", () => {
//         it("Should Post registration info with 200 status", (done) => {
//             chai.request(server)
//                 .post("/register")
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                 done();
//                 })
//         })
//     })

//     describe("POST /login", () => {
//         it("Should process the login credentials with 200 status", (done) => {
//             chai.request(server)
//                 .post("/login")
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                 done();
//                 })
//         })
//     })

//     describe("/logout to delete ", () => {
//         it("Should get the login page with 200 status", (done) => {
//             chai.request(server)
//                 .delete("/logout")
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                 done();
//                 })
//         })
//     })

//     it('return object', () => {
//         let obj = new app.fuel_quote();
//         assert.ok(obj);
//     })
//     it('return object', () => {
//         assert.ok(app.checkAuth);
//     })

//     it('return first last', function(){
//         assert.notEqual(checkNameResult, 'last');
//     })

//     it('return type string', function(){
//         assert.typeOf(checkNameResult, 'string');
//     })
//       it('return TX', function(){
//         assert.notEqual(checkStateResult, 'TX');
//     })

//     it('return type string', function(){
//         assert.typeOf(checkStateResult, 'string');
//     })

//      it('return Houston', function(){
//         assert.notEqual(checkCityResult, 'Houston');
//     })

//     it('return type string', function(){
//         assert.typeOf(checkCityResult, 'string');
//     })

//      it('return 77045', function(){
//         assert.notEqual(checkzipcodeResult, '77058');
//     })

//     it('return type string', function(){
//         assert.typeOf(checkzipcodeResult, 'string');
//     })

// });
'use strict';

function creditAccount(account, amount, description) {
	const transaction = {
		value : Math.abs(amount), // ensures the amount being added is positive
		desc  : description
	};
	return account.push(transaction);
}

function debitAccount(account, amount, description) {
	const transaction = {
		value : -Math.abs(amount), // ensures amount is negative
		desc  : description
	};
	return account.push(transaction);
}

function getAccountBalance(account) {
	let balance = 0;
	// only add transactions if they exist
	if (account.length > 0) {
		account.forEach( function(entry) {
	    	balance = balance + entry.value;
		});
	} else {
		balance = 0;
	}
	return balance;
}

function transferMoney(fromAccount, toAccount, amount, description) {
	debitAccount(fromAccount, amount, description);
	creditAccount(toAccount, amount, description);
	if (getAccountBalance(fromAccount) > 10000) {
		debitAccount(fromAccount, 0.1, 'Transaction Fee') && creditAccount(account3, 0.1, 'Transaction Fee');
	}
}

let account1 = [];
let account2 = [];
let account3 = []; // rogue developer account

console.log("\nExpect Account1 Opening Balance       "+getAccountBalance(account1) +" === 0        \u2713 ");
creditAccount(account1, 5000, 'Add Funds');
transferMoney(account1,account2, 100, 'Give money to friend');
transferMoney(account2,account1, 10, 'Transfer back 10');

console.log("Expect Account1 Closing Balance "+getAccountBalance(account1) +" === 19909.9  \u2713 \n");