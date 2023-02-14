const { Comment } =require ('../models');
const commentData = [
    {
        user_id: 1,
        blog_id: 5,
        comment_text: "I never knew that!"
    },
    {
        user_id: 4,
        blog_id: 4,
        comment_text: "Please tell me more"
    },
    {
        user_id: 1,
        blog_id: 4,
        comment_text: "This was so usefull!"
    },
    {
        user_id: 3,
        blog_id: 5,
        comment_text: "Where can I find that resource?"   
    },
    {
        user_id: 3,
        blog_id: 2,
        comment_text: "Who new?!"
    },
    {
        user_id: 3,
        blog_id: 4,
        comment_text: "Bananas, bananas, bananas!"
    },
    {
        user_id: 5,
        blog_id: 3,
        comment_text: "Thank you for your insight"
    },
    {
        user_id: 2,
        blog_id: 1,
        comment_text: "I am not sure I agree with you"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments