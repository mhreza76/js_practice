var roll_numbers = new Set();
roll_numbers.add(1);
roll_numbers.add(2);
roll_numbers.add(3);
roll_numbers.add(3);
roll_numbers.add(4);
roll_numbers.add(5);
console.log(roll_numbers);
console.log(roll_numbers.size);
roll_numbers.delete(2);
console.log(roll_numbers.values());

