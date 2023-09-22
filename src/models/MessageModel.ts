class MessageModel {
    title: string;
    question: string;
    id?: number;
    userEmail?: string;
    adminEmail?: string;
    response?: string;
    closed?: boolean;

    constructor(title: string, questing: string) {
        this.title = title;
        this.question = questing;
    }

}

export default MessageModel;
