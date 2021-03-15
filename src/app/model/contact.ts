export class Contact {

    id: number;

    constructor(public name: string,
        public email: string,
        public mobile?: number) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
    }
}
