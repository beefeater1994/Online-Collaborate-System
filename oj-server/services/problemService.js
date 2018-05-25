var problems = [
    {id: 1,
        name: "Two Sum",
        desc: "Given an array of integers, find two numbers such that they add up to a specific target number. The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are NOT zero-based.",
        difficulty: "easy"
    },
    {id: 2,
        name: "Three Sum",
        desc: "Given an array of integers, find two numbers such that they add up to a specific target number. The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are NOT zero-based.",
        difficulty: "medium"
    },
    {id: 3,
        name: "Four Sum",
        desc: "Given an array of integers, find two numbers such that they add up to a specific target number. The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are NOT zero-based.",
        difficulty: "medium"
    },
    {id: 4,
        name: "kSum",
        desc: "Given an array of integers, find two numbers such that they add up to a specific target number. The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are NOT zero-based.",
        difficulty: "hard"
    },
    {id: 5,
        name: "kkSum",
        desc: "Given an array of integers, find two numbers such that they add up to a specific target number. The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are NOT zero-based.",
        difficulty: "super"
    }
];

var getProblems = function () {
    return new Promise((resolve, reject) => {
        resolve(problems);
    });
}

var getProblem = function (id) {
    return new Promise((resolve, reject) => {
        resolve(problems.find(problem => problem.id === id));
    });
}

var addProblem = function (newProblem) {
    return new Promise((resolve, reject) => {
        if (problems.find(problem => problem.name === newProblem.name)) {
            reject("Problems already exists!");
        } else {
            newProblem.id = problems.length + 1;
            problems.push(newProblem);
            resolve(newProblem);
        }
    });
}

module.exports = {
    getProblems: getProblems,
    getProblem: getProblem,
    addProblem: addProblem
}