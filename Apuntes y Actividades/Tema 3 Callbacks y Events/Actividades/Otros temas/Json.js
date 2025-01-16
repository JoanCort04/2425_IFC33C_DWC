const squad = {
  "squadName" : "Super Hero Squad",
  "homeTown" : "Metro City",
  "formed" : 2016,
  "secretBase" : "Super tower",
  "active" : true,
  "members" : [
    {
      "name" : "Molecule Man",
      "age" : 29,
      "secretIdentity" : "Dan Jukes",
      "powers" : [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name" : "Madame Uppercut",
      "age" : 39,
      "secretIdentity" : "Jane Wilson",
      "powers" : [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name" : "Eternal Flame",
      "age" : 1000000,
      "secretIdentity" : "Unknown",
      "powers" : [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}

const genres = [
    { "id": 28, "name": "Action" },
    { "id": 18, "name": "Drama" },
    { "id": 14, "name": "Fantasy" },
    { "id": 36, "name": "History" }
];


/*
genres.forEach(function(genre) {
    console.log('ID:', genre.id, 'Name:', genre.name);
});

genres.forEach((element) => {
  console.log("ID:", element.id, "Name:", element.name);
});
*/

function propietatsArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("ID:", array[i].squadname, "Name:", array[i].homeTown);
  }
}


function recorrerObjecte(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var val = obj[key];
      console.log(val);
    }
  }
}z

Object.entries(squad).forEach(([key, value]) => {
  console.log(`${key}:`);

  if (Array.isArray(value)) {
    value.forEach((member, index) => {
      console.log(`  Member ${index + 1}:`);
      console.log(`    Name: ${member.name}`);
      console.log(`    Age: ${member.age}`);
      console.log(`    Secret Identity: ${member.secretIdentity}`);
      console.log("    Powers:");
      member.powers.forEach((power) => {
        console.log(`      - ${power}`);
      });
    });
  } else {
    
    console.log(`  ${value}`);
  }

  console.log("---");
});

Object.entries(squad).forEach(([key, value]) => {

});


/*
const mostraHeroes = (squad) => {
    
  for (let miembro of squad.members) {
    console.log("Nombre:", miembro.name);
    console.log("Edad:", miembro.age);
    console.log("Identidad secreta:", miembro.secretIdentity);
    console.log("Poderes:", miembro.powers.join(", "));
    console.log("----------------------------");
  }
};


mostraHeroes(squad);

*/

let libro = {
  "id": "<unique_id>",
  "name": "<user_name>",
  "email": "<user_email>",
  "age": null,
  "phone": "<user_phone>",
  "address": {
    "street": "<street_name>",
    "city": "<city>",
    "state": "<state>",
    "zip": "<zip_code>"
  },
  "isActive": true,
  "registrationDate": "<ISO_date_format>"
}
