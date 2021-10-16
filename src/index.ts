interface PhoneNumberDictionary {
    [phone: string]: {
        num: string;
    };
}

interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
}

// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts(): Promise<Contact[]> {
    // TODO: 아래 변수의 타입을 지정해보세요.
    const contacts: Contact[] = [
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
    return new Promise(resolve => {
        setTimeout(() => resolve(contacts), 2000);
    });
}

// main
class AddressBook {
    // TODO: 아래 변수의 타입을 지정해보세요.
    contacts: Contact[] = [];

    constructor() {
        this.fetchData();
    }

    fetchData(): void {
        fetchContacts().then(response => {
            this.contacts = response;
        });
    }

    /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
    findContactByName(name: string): Contact[] {
        return this.contacts.filter(contact => contact.name === name);
    }

    findContactByAddress(address: string): Contact[] {
        return this.contacts.filter(contact => contact.address === address);
    }

    findContactByPhone(phoneNumber: string, phoneType: string) {
        return this.contacts.filter(
            contact => contact.phones[phoneType].num === phoneNumber
        );
    }

    addContact(contact: Contact): void {
        this.contacts.push(contact);
    }

    displayListByName(): string[] {
        return this.contacts.map(contact => contact.name);
    }

    displayListByAddress(): string[] {
        return this.contacts.map(contact => contact.address);
    }
}

new AddressBook();
