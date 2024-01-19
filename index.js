
function choosenHelicopter(chooseHelicopter) {
    const card = document.createElement("div");
    card.className = 'container';

    const helicopterInfo = `
        <h1>TIME FLIES SO DO YOU</h1>
        <P>Welcome to our Njoroge Helicopter service Company ! We're thrilled to have you here. As a member of our community, making your experience here enjoyable. If you have any questions or need assistance, please don't hesitate to reach out. We're here to help!</P>
        <button id='btn'>BOOK A FLIGHT</button>
    `;

    const helicopterDetails = `
        <h4>About us</h4>
        <p>Welcome to our helicopter website company! We are a team of passionate aviation enthusiasts who strive to provide the highest quality helicopter services to our clients. With years of experience in the industry, we have built a reputation for professionalism, safety, and exceptional customer service.

        Our team of skilled pilots and mechanics are dedicated to ensuring that every flight is safe and comfortable. We use only the latest state-of-the-art helicopters, equipped with the latest technology and safety features, to ensure that our clients have the best possible experience.</p>
    `;

    card.innerHTML = helicopterInfo + helicopterDetails;
    document.body.appendChild(card);

    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        helicopterTypes(chooseHelicopter);
    });
}

choosenHelicopter();


// function helicopterTypes(chooseHelicopter) {
//     document.querySelector('body').innerHTML = `
//       <div class="helicopters">
//       <h3> Choose Helicopter</h3>
//       </div>`
//     document.body.style.backgroundImage = "none";
//     const helipage = document.createElement('div');
//     helipage.id = "object";
//     const body = document.body;
//     body.appendChild(helipage);
  
//     fetch('http://localhost:3000/helicopters')
//       .then(response => response.json())
//       .then(data => {
//         data.forEach((helicopter) => {
//         const helicopterpage = document.createElement('div');
//         helicopterpage.id = "objectlist";
//           helicopterpage.className='helicopters'
//           helicopterpage.innerHTML = `
//           <img src="${helicopter.image}" alt="${helicopter.make}" width=500 height= 500>
//           <p>Passengers: ${helicopter.passengers}</p>
//           <p>Range: ${helicopter.max_distance}</p>
//           <p>Rate: ${helicopter.hourly_rate}</p>
//           <input type="radio" name="helicopter" value="${helicopter.id}"
//           onclick="selectHelicopter(this.value)" />Select this helicopter<br>
//           `;
//           const body = document.body;
//         body.appendChild(helicopterpage);
//         })
//         var myButton = document.createElement("BUTTON");
//         myButton.id='submit'
//         myButton.innerHTML = "Submit";
//         const helipage = document.querySelector('#object')
//         helipage.appendChild(myButton);
//         const submitBtn = document.getElementById("submit");
//         submitBtn.style = `align-self: flex-end;
//                             margin-left: auto;
                            
//                             `;
//         submitBtn.onclick = function() {
//           const selectedHelicopterId = document.querySelector('input[name="helicopter"]:checked').value;
//           const enterhours = Number(prompt('Hiring hours: '));
//           if (!Number.isNaN(enterhours) && Number.isInteger(enterhours)) {
//             const selectedHelicopter = data.find(helicopter => helicopter.id == selectedHelicopterId);
//             alert(`You have hired a ${selectedHelicopter.make} for ${selectedHelicopter.hourly_rate * enterhours}$
//             Please pay the rental fee.`);
//           } else {
//             alert('Please enter a valid integer!');
//           }
//         }
    
//       })
//   }



function helicopterTypes(chooseHelicopter) {
    document.querySelector('body').innerHTML = `
      <div class="helicopters">
      <h3> Choose Helicopter</h3>
      </div>`
    document.body.style.backgroundImage = "none";
    const helipage = document.createElement('div');
    helipage.id = "object";
    const body = document.body;
    body.appendChild(helipage);
  
    fetch('http://localhost:3000/helicopters')
      .then(response => response.json())
      .then(data => {
        data.forEach((helicopter) => {
        const helicopterpage = document.createElement('div');
        helicopterpage.id = "objectlist";
          helicopterpage.className='helicopters'
          helicopterpage.innerHTML = `
          <img src="${helicopter.image}" alt="${helicopter.make}" width=500 height= 500>
          <p>Passengers: ${helicopter.passengers}</p>
          <p>Range (kms): ${helicopter.max_distance}</p>
          <p>Hourly rate ($): ${helicopter.hourly_rate}</p>
          <input type="radio" name="helicopter" value="${helicopter.id}"
          onclick="selectHelicopter(this.value)" />Select this helicopter<br>
          <button id= 'btn-${helicopter.id}'>BOOK A FLIGHT</button>
          `;
          const body = document.body;
        body.appendChild(helicopterpage);
      
        const submitBtn = document.getElementById(`btn-${helicopter.id}`);
      
        submitBtn.onclick = function() {
          const selectedHelicopterId = document.querySelector('input[name="helicopter"]:checked').value;
          const enterhours = Number(prompt('Hiring hours: '));
          if (!Number.isNaN(enterhours) && Number.isInteger(enterhours)) {
            const selectedHelicopter = data.find(helicopter => helicopter.id == selectedHelicopterId);
            alert(`You have hired a ${selectedHelicopter.make} for ${selectedHelicopter.hourly_rate * enterhours}$
            Please pay the rental fee.`);
          } else {
            alert('Please enter a valid integer!');
          }
        }
    
        })
      })
 }