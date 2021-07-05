console.clear();

const os = require('os');
const path = require('path');
console.log(__dirname);
console.log(__filename);

const mypath = `D:\\study\\js_practice\\numbers.js`;
console.log(path.basename(mypath));
console.log(path.extname(mypath));
console.log(path.dirname(mypath));
console.log(path.dirname(`D:\\study\\js_practice\\numbers.js`));
console.log(process.env.path);

const option = {
    // root: __dirname,
    dir: __dirname,
    base: 'path_module.js',
    ext: '.js'
};
const test_path = path.format(option);
console.log(test_path);
console.log(path.isAbsolute(test_path));

// relative path 
console.log(path.join('study', 'practice', 'js'));
console.log(path.join(__dirname, 'study', 'practice', 'js'));

// one step back, done by normalize 
console.log(path.join(__dirname, 'study', 'practice', 'js', '..'));

// Absolute path 
console.log(path.resolve('study', 'practice', 'js'));

// one step back, done by normalize 
console.log(path.resolve('study', 'practice', 'js', '../..'));

// path generate 
const generated_path = path.join(
    os.homedir(),
    'downloads',
    'js_practice',
    'index.js'
);
console.log(generated_path);
console.log(path.parse(generated_path));
console.log(path.posix);

console.log(
    path.relative(
        'D:\\study\\',
        'D:\\study\\js_practice\\numbers.js'
        )
);


// for path.sep we have to use backtick
console.log(
        `D:${path.sep}study${path.sep}js_practice${path.sep}numbers.js`
);
