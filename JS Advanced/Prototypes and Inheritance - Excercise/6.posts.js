function solve() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }

    toString() {
      return `Post: ${this.title}\nContent: ${this.content}`;
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = [];
    }

    addComment(comment) {
      this.comments.push(comment);
    }

    toString() {
      const result = [
        super.toString(),

        `Rating: ${this.likes - this.dislikes}`,
      ];

      if (this.comments.length > 0) {
        result.push("Comments:");

        this.comments.forEach((c) => result.push(` * ${c}`));
      }

      return result.join("\n");
    }

    // toString() {
    //   if (this.comments.length === 0) {
    //     return `Post: ${this.title}\nContent: ${this.content}\nRating: ${
    //       this.likes - this.dislikes
    //     }`;
    //   } else {
    //     let commentsBuff = "Comments :\n";
    //     this.comments.forEach((com) => (commentsBuff += ` * ${com}\n`));

    //     return `Post: ${this.title}\nContent: ${this.content}\nRating: ${
    //       this.likes - this.dislikes
    //     }\n${commentsBuff.trimEnd()}`;
    //   }
    // }
  }

  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = Number(views);
    }

    view() {
      this.views += 1;
      return this;
    }

    toString() {
      return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
    }
  }

  return { Post, SocialMediaPost, BlogPost };
}

let classes = solve();

// let bp = new classes.BlogPost("test1", "testContent", 200);

// console.log(bp.view().toString());

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());
