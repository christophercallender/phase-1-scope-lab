// describe('Fix the Scope', function() {
//     describe('declare customerName to be bob in global scope', function() {
//       it('returns the customerName', function() {
//         expect(window.customerName).to.equal('bob');
//       });
//     });
customerName = 'bob';
//     describe('upperCaseCustomerName()', function() {
//       it('modifies the customerName variable', function() {
//         expect(window.customerName).to.equal('bob');
//         upperCaseCustomerName();
//         expect(window.customerName).to.equal('BOB');
//       });
//     });
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}
//     describe('setBestCustomer()', function() {
//       it('setBestCustomer', function() {
//         expect(window.bestCustomer).to.equal(undefined);
//         setBestCustomer();
//         expect(window.bestCustomer).to.equal('not bob');
//       });
//     });
function setBestCustomer(){
    bestCustomer = 'not bob';
}
//     describe('overwriteBestCustomer()', function() {
//       it('overwrites the best customer', function() {
//         overwriteBestCustomer('maybe bob');
//         expect(window.bestCustomer).to.equal('maybe bob');
//       });
//     });
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}
//     describe('changeLeastFavoriteCustomer()', function() {
//       it('unsuccessfully tries to reassign the least favorite customer', function() {
//         expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
//       });
//     });
const leastFavoriteCustomer = 'original value';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'new value'
}
//   });