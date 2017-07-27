class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }

    render(id) {
        // id = 'main';
        let placeToAppend = $(`#${id}`);
        let contactInfo = `<article>
    <div class="title">${this.firstName} ${this.lastName}<button>&#8505;</button></div>
    <div class="info">
        <span>&phone; ${this.phone}</span>
        <span>&#9993; ${this.email}</span>
    </div>
</article>`;
        for (let obj of contactInfo) {
            obj = $('.info').css('display', 'none');
        }


        placeToAppend.append(contactInfo);
        let button = $('.title button').on('click', function () {
            $(button).parent().next().css("display", "block");
            // $('.title').addClass('online');
        });

        if (this.online) {
            $('.title').addClass('online');
        }
    }
}

