///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
let pizza ={// created a singular pizza object
    name: 'supreme',
    price: 12,
    category: 'garlic knots',
    popularity: 8,
    rating: 8.5,
    tags: ['hearty meal', 'mouthwatering', 'not vegetarian', 'calorie dense']
}


//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
console.log(pizza.popularity)// logged value for testing

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
console.log(pizza.tags[1])// logged value for testing

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
let supremePrice = pizza.price// set equal to a value
console.log(supremePrice)// logged value for testing

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
let entreeWithMeal = pizza.category// set equal to a value
console.log(entreeWithMeal)// logged value for testing
//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
let foodArr =[// created menu array with five different pizza objects
{
    name: 'Supreme',
    price: 12,
    category: 'garlic knots',
    popularity: 8,
    rating: 8.5,
    tags: ['hearty meal', 'mouthwatering', 'not vegetarian', 'calorie dense']
},
{
    name: 'Cheese',
    price: 8,
    category: 'Pasta Side',
    popularity: 7,
    rating: 6,
    tags: ['light meal', 'mouthwatering', 'vegetarian', 'calorie light']
},
{
    name: 'Hawaiian',
    price: 10,
    category: 'Jalepeno poppers',
    popularity: 9,
    rating: 9.5,
    tags: ['hearty meal', 'spicy', 'not vegetarian', 'calorie light']
},
{
    name: 'Buffalo Chicken',
    price: 11,
    category: 'Side Salad',
    popularity: 6,
    rating: 9,
    tags: ['spicy', 'mouthwatering', 'not vegetarian', 'calorie light']
},
{
    name: 'Meat Lovers',
    price: 12,
    category: 'Sausage and Marinara Dip',
    popularity: 7,
    rating: 7,
    tags: ['hearty meal', 'mouthwatering', 'not vegetarian', 'calorie dense']
}]


//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE
function filterByTag(f, t) {// create a function to search by tag
    return f.tags.includes(t)
  }
 const filteredFood = foodArr.filter((f, t) => filterByTag(f, t))// call back for previous function



//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
function filterByProperty(p, n, t){// function taking in property, number, and type 
    let filteredArr = []// create a returnable empty array
    if(t === 'above'){// if the above type if selected it will filter by the properties that are above that number
        filteredArr = foodArr.filter((f) => f[p] > n);
    }else if( t === 'below'){// if the below type if selected it will filter by the properties that are below that number
        filteredArr = foodArr.filter((f) => f[p] < n)
    }else{// if neither it returns an empty array
        filteredArr = []
    }
    return filteredArr// then return array at the end for results
}

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
console.log(filterByProperty('price', 11, 'below'))// logged for testing with prices below 11 