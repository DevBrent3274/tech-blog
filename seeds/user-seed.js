const { User } =require ('../models');
const userData = [
    {
        username: "johny_cash",
        twitter: "maninblack",
        github: "johnyhub",
        email: "johnblack@gmail.com",
        password: "pa$$word1"
    },
    {
        username: "daffy_duck",
        twitter: "quacktwitt",
        github: "duckhub",
        email: "daffy@gmail.com",
        password: "pa$$word2"
    },
    {
        username: "jennifer_lopez",
        twitter: "jennyblock",
        github: "jlohub",
        email: "jennyblock@gmail.com",
        password: "pa$$word3"
    },
    {
        username: "bananas",
        twitter: "chiquita",
        github: "peelhub",
        email: "creampie@gmail.com",
        password: "pa$$word4'"
    },
    {
        username: "john_dutton",
        twitter: "yellowstone",
        github: "ranchhub",
        email: "john@gmail.com",
        password: "pa$$word5"
    },
    {
        username: "christopher_cross",
        twitter: "comesailaway",
        github: "withmehub",
        email: "chris@gmail.com",
        password: "pa$$word6"
    },
    {
        username: "gary_almes",
        twitter: "bigprof",
        github: "tequila",
        email: "gary@gmail.com",
        password: "pa$$word7"
    },
    {
        username: "katy_vincent",
        twitter: "greenmachine",
        github: "kadihub",
        email: "katy@gmail.com",
        password: "pa$$word8"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers