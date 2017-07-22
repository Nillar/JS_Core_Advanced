class MailBox {
    constructor(mailbox) {
        this.mailbox = [];
    }

    addMessage(subject, text) {
        this.mailbox.push({subject: subject, text: text});
        return this;
    }

    get messageCount() {
        if (this.mailbox.length === 0) {
            return 0;
        }
        return this.mailbox.length;
    }

    toString() {
        if (this.mailbox.length === 0) {
            return ` * (empty mailbox)`;
        }
        else {
            let result = '';
            for (let obj of this.mailbox) {
                result += ` * [${obj.subject}] ${obj.text}\n`;
            }

            return ' ' + result.trim();
        }
    }

    deleteAllMessages() {
        this.mailbox = [];
    }

    findBySubject(substr) {
        let matchedMessages = [];
        for (let obj of this.mailbox) {
            if(obj.subject.indexOf(substr) !== -1){
                matchedMessages.push(obj);
            }
        }

        return matchedMessages;
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
