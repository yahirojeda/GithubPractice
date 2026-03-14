class LikeSystem {
    constructor(){
        this.likes = 0;
    }
    like() {
        this.likes++;
    }
    dislike(){
        this.likes--;
    }
    setLikes(value) {
        this.likes = value;
    }
    getLikes() {
        return this.likes;
    }
}

class Comment{
    constructor(user="", comm=""){
        this.user = user;
        this.comm = comm;
        this.LikeSystem = new LikeSystem();
    }
    printComment() {
        console.log(`${this.user}:${this.comm}`);
    }
}

class Video{
    constructor(minutes=0, seconds=0, name=""){
        this.minutes = Math.floor(minutes / 60);
        this.seconds = seconds%60;
        this.name = name;
        this.LikeSystem = new LikeSystem();
        this.comments = [];
    }
    
    getCommentsNum() {
    console.log(this.comments.lenght);
    }

    printTime() {
        console.log(`${this.minutes}:${this.seconds}`);
    }

    addComment(comment) {
        this.comments.push(comment);
    }

    printComments() {
        try {
            for (let comment of this.comments) {
                comment.printComment();
            }
        } catch (e) {
            console.log(this.comments);
        }
    }

    // Para LikeSystem
    like() {
        this.LikeSystem.like();
    }

    
    dislike() {
        this.LikeSystem.dislike();
    }

    
    get likes() {
        console.log(this.LikeSystem.getLikes());
    }
}

const video1 = new Video(1, 30, "perritos comiendo");
const com1 = new Comment("Mario", "El gato lo atacó");

com1.printComment();
console.log(`El video1 tiene ${video1.likes} likes`);
video1.printTime();
video1.addComment(com1);
video1.printComments();
