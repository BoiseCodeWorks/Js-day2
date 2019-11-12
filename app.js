var employees = [
  {
    name: "Mark",
    role: "Instructor"
  },
  {
    name: "Jake",
    role: "CEO"
  },
  {
    name: "D$",
    role: "Instructor"
  },
  {
    name: "Zach",
    role: "COO"
  },
  {
    name: "Brittany",
    role: "Director of Recruitment"
  }
];

var users = [
  {
    name: "Joe",
    role: "customer"
  },
  {
    name: "Joey",
    role: "customer"
  },
  {
    name: "Joeseph",
    role: "customer"
  },
  {
    name: "JoJo",
    role: "customer"
  }
];

//NOTE function definition
function greetAllUsers(arr, role) {
  //itterate over arr
  for (let i = 0; i < arr.length; i++) {
    const user = arr[i];
    //NOTE if role is 'truthy'
    if (role) {
      //NOTE only greet the users with that role
      if (user.role.toLowerCase() == role.toLowerCase()) {
        console.log(`Hello ${user.name}`);
      }
    }
    //NOTE if no role was provided
    else {
      console.log(`Hello ${user.name}`);
    }
  }
}

//NOTE Invoke Function
//greetAllUsers(users);
//greetAllUsers(employees);

//greetAllUsers(employees, "instructor");

let allUsers = [...employees, ...users];

//NOTE functions are 'hoisted' and defined at the top of the page
function getCustomers(arr) {
  //NOTE variables created in a function are removed from memory when the function ends
  let out = [];
  //itterate over arr
  for (let i = 0; i < arr.length; i++) {
    let user = arr[i];
    if (user.role.toLowerCase() == "customer") {
      out.push(user);
    }
  }
  return out;
}

//NOTE if a method returns a value it must be captured into a variable or it ceases to exist
let custs = getCustomers(allUsers);

//NOTE filter ruqns

// allUsers.filter(function(user) {
//   return user.role.toLowerCase() == "customer"
// });
let custs2 = allUsers.filter(user => user.role.toLowerCase() == "customer");

/**
 * Takes in an array and a users name and returns the user from that array
 * @param {array} arr
 * @param {string} name
 * @returns {*} user
 */
function findCustomer(arr, name) {
  let out = {};
  for (let i = 0; i < arr.length; i++) {
    let user = arr[i];
    if (user.name == name) {
      out = user; //NOTE return always stops the function
      break;
    }
  }
  return out;
}

let me = findCustomer(allUsers, "Mark");
//                 find user where username == 'D$'
let d$ = allUsers.find(user => user.name == "D$");

function findGreatestNumber(numArr) {
  let greatest = numArr[0];
  for (let i = 1; i < numArr.length; i++) {
    const num = numArr[i];
    if (num > greatest) {
      greatest = num;
    }
  }
  return greatest;
}

let numberArray = [
  1,
  2,
  3,
  4345,
  6,
  345,
  3,
  2,
  32,
  34,
  234,
  2,
  3,
  23,
  2134,
  2,
  6,
  456,
  34,
  2345,
  23,
  6,
  346,
  3456,
  34,
  2,
  3235,
  26,
  46,
  7,
  2,
  53,
  45,
  234,
  2345,
  6,
  2345,
  4
];

let gNum = findGreatestNumber(numberArray);

//NOTE changes original array
allUsers.sort((a, b) => {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
