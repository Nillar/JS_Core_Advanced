function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            let str1 = `Post: ${this.title}\n`;
            let str2 = `Content: ${this.content}`;
            return str1 + str2;
        }
    }
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let str1 = `Rating: ${this.likes - this.dislikes}`;
            let str2 = `\nComments:\n `;
            let commentsResult = '';
            if (this.comments.length > 0) {
                for (let comment of this.comments) {
                    commentsResult +=  ` * ` + comment + '\n';
                }

                return `${super.toString()}\n` + `${str1}` + `${str2}` + `${commentsResult.trim()}`;
            }
            else {
                return `${super.toString() + '\n'}` + `${str1.trim()}`;
            }
        }
    }
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views);
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`
        }
    }
    return {       Post,
        SocialMediaPost,
        BlogPost
    };
}
let classes = solve();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
