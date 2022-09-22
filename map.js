var marks = new Map();

marks.set("bangla","76");
marks.set("english","72");
marks.set("math","87");
marks.set("biology","82");

// console.log(marks.values());
// console.log(marks.keys());

//map all methods are taken key for parameter.
marks.delete("english");
marks.get("math");
if(marks.has("biology"))
    console.log('yes');
else
    console.log('no');

marks.clear();