const team = [
    {
      name: "Wayne Barnett",
      role: "Founder & CEO",
      photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
      name: "Angela Caroll",
      role: "Chief Editor",
      photo: "angela-caroll-chief-editor.jpg"
    },
    {
      name: "Walter Gordon",
      role: "Office Manager",
      photo: "walter-gordon-office-manager.jpg"
    },
    {
      name: "Angela Lopez",
      role: "Social Media Manager",
      photo: "angela-lopez-social-media-manager.jpg"
    },
    {
      name: "Scott Estrada",
      role: "Developer",
      photo: "scott-estrada-developer.jpg"
    },
    {
      name: "Barbara Ramos",
      role: "Graphic Designer",
      photo: "barbara-ramos-graphic-designer.jpg"
    }
  ];
  
  team.forEach(member => {
    console.log(`Name: ${member.name}`);
    console.log(`Role: ${member.role}`);
    console.log(`Photo: ${member.photo}\n`);
  });
  
  const teamContainer = document.getElementById("team-container");
  
  team.forEach(member => {
    const memberDiv = document.createElement("div");
    memberDiv.innerHTML = `
      <p>Name: ${member.name}</p>
      <p>Role: ${member.role}</p>
      <p>Photo: ${member.photo}</p>
    `;
    teamContainer.appendChild(memberDiv);
  });

team.forEach(member => {
    
   const memberDiv = document.createElement("div");
   memberDiv.innerHTML = `
     <p>Name: ${member.name}</p>
     <p>Role: ${member.role}</p>
     <img src="./img/${member.photo}" alt="${member.name}" />
   `;
   teamContainer.appendChild(memberDiv);
 });
 
 
 team.forEach(member => {

   const memberDiv = document.createElement("div");
   memberDiv.classList.add("team-member");
   memberDiv.innerHTML = `
     <img src="./img/${member.photo}" alt="${member.name}" />
     <h3>${member.name}</h3>
     <p>${member.role}</p>
   `;
   teamContainer.appendChild(memberDiv);
 });