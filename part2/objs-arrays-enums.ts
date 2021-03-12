enum Role { ADMIN = 5, READ_ONLY = 200, AUTHOR };

const person = {
  name: "Tom",
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

if (person.role === Role.ADMIN) {
  console.log('is author');
}

let favoriteActivities: string[];
favoriteActivities = ['Sports']

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

