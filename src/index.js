"use strict";
// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts() {
    // TODO: 아래 변수의 타입을 지정해보세요.
    var contacts = [
        {
            name: 'Julio',
            address: 'Suwon',
            phones: {
                home: {
                    num: '010-1234-5678',
                },
                office: {
                    num: '02-1234-5678',
                },
            },
        },
        {
            name: 'Julio Kim',
            address: 'Sangam',
            phones: {
                office: {
                    num: '02-4321-9876',
                },
            },
        },
    ];
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(contacts); }, 2000);
    });
}
// main
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        // TODO: 아래 변수의 타입을 지정해보세요.
        this.contacts = [];
        this.fetchData();
    }
    AddressBook.prototype.fetchData = function () {
        var _this = this;
        fetchContacts().then(function (response) {
            _this.contacts = response;
        });
    };
    /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
    AddressBook.prototype.findContactByName = function (name) {
        return this.contacts.filter(function (contact) { return contact.name === name; });
    };
    AddressBook.prototype.findContactByAddress = function (address) {
        return this.contacts.filter(function (contact) { return contact.address === address; });
    };
    AddressBook.prototype.findContactByPhone = function (phoneNumber, phoneType) {
        return this.contacts.filter(function (contact) { return contact.phones[phoneType].num === phoneNumber; });
    };
    AddressBook.prototype.addContact = function (contact) {
        this.contacts.push(contact);
    };
    AddressBook.prototype.displayListByName = function () {
        return this.contacts.map(function (contact) { return contact.name; });
    };
    AddressBook.prototype.displayListByAddress = function () {
        return this.contacts.map(function (contact) { return contact.address; });
    };
    return AddressBook;
}());
new AddressBook();
