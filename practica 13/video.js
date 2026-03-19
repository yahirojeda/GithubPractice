class LikeSystem {
    constructor() {
        this.likes = 0;
    }
    like() {
        this.likes++;
    }
    dislike() {
        this.likes--;
    }
    setLikes(value) {
        this.likes = value;
    }
    getLikes() {
        return this.likes;
    }
}

class Comment {
    constructor(user = "", comm = "") {
        this.user = user;
        this.comm = comm;
        this.LikeSystem = new LikeSystem();
    }

    like() {
        this.LikeSystem.like();
    }

    dislike() {
        this.LikeSystem.dislike();
    }

    get likes() {
        return this.LikeSystem.getLikes();
    }

    printComment() {
        console.log(`${this.user}:${this.comm}`);
    }
}

class Video {
    constructor(minutes = 0, seconds = 0, name = "") {
        this.minutes = Math.floor(minutes);
        this.seconds = seconds % 60;
        this.name = name;
        this.LikeSystem = new LikeSystem();
        this.comments = [];
    }

    getCommentsNum() {
        return this.comments.length;
    }

    printTime() {
        let sec = this.seconds < 10 ? "0" + this.seconds : this.seconds;
        console.log(`${this.minutes}:${sec}`);
    }

    addComment(comment) {
        this.comments.push(comment);
    }

    printComments() {
        this.comments.forEach((comment, index) => {
            console.log(`Comentario ${index + 1}:`);
            comment.printComment();
        });
    }

    like() {
        this.LikeSystem.like();
    }

    dislike() {
        this.LikeSystem.dislike();
    }

    get likes() {
        return this.LikeSystem.getLikes();
    }
}

const com1 = new Comment("Mario", "El gato lo atacó");
const com2 = new Comment("Ana", "Qué bonito video");
const com3 = new Comment("Luis", "Me dio risa");

const video1 = new Video(1, 30, "perritos comiendo");
const video2 = new Video(2, 45, "gatos jugando");

video1.like();
video1.like();
video2.like();

video1.addComment(com1);
video1.addComment(com2);

video2.addComment(com1);
video2.addComment(com2);
video2.addComment(com3);

console.log(`El video1 tiene ${video1.likes} likes`);
video1.printTime();
video1.printComments();

console.log("-------------");

console.log(`El video2 tiene ${video2.likes} likes`);
video2.printTime();
video2.printComments();