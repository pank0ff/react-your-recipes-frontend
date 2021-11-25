import sm_70147 from './sm_70147.png';
import sm_225822 from './sm_225822.png';
import sm_276387 from './sm_276387.png';

export const columns = [
    {
        name: "#",
        type: "string"
    }, {
        name: "photo",
        type: "image"
    }, {
        name: "title",
        type: "string"
    }, {
        name: "author",
        type: "string"
    }, {
        name: "published",
        type: "string",
    }, {
        name: "url",
        type: "custom"
    }];

    export const sampleData = [
    {   
        photo: <img src={sm_276387}/>,
        title: "Apple strudel",
        author: "admin",
        published: "June 21st 2017",
        url: "https://www.russianfood.com/recipes/recipe.php?rid=147496"
    }, {
        photo: <img src={sm_225822} />,
        title: "Herring under a Fur Coat",
        author: "admin",
        published: "June 30th 2017",
        url: "https://www.russianfood.com/recipes/recipe.php?rid=143560"
    }, {
        photo: <img src={sm_70147} />,
        title: "fried potatoes",
        author: "admin",
        published: "July 05th 2017",
        url: "https://www.russianfood.com/recipes/recipe.php?rid=127238"
    }
];