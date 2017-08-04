const STRING = "a ab adc abcd abcde abcdef bc bcd cd cde cdf ";
const FIND_STRING = 'abcde';
const SPLIT_WORD_SYMBOL = ' ';
let tree = {};

const addWord = (word) => {
    let currentNode = tree;
    word.split('').forEach((char, index) => {
        if (currentNode[char]) {
            currentNode = currentNode[char];
            return;
        }
        currentNode[char] = {
            index: index + 1
        };
        currentNode = currentNode[char];
    })
};

STRING.split(SPLIT_WORD_SYMBOL).forEach(word => {
    addWord(word);
});

const findItem = (string, node) => {
    const array = string.split('');
    const checkedLetter = array.shift();
    if (node[checkedLetter]) {
        return findItem(array.join(''), node[checkedLetter])
    }

    return node.index;
};

console.log(findItem(FIND_STRING, tree));