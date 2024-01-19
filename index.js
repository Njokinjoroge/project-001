// // // function chooseHelicopter() {
// // //     fetch('http://localhost:3000/helicopters')
// // //     .then(response => response.json())
// // //     .then(helicopters => helicopters.forEach(chooseHelicopter => choosenHelicopter(chooseHelicopter)))
// // //     .catch(error => console.error('Error:', error));
// // // }


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

function helicopterTypes(chooseHelicopter) {
    // const innerhtml=chooseHelicopter();
    document.querySelector('body').innerHTML = `
    <div class="helicopters">
    <h3> Choose Helicopter</h3>
    </div>`
    
    fetch('http://localhost:3000/helicopters')
    .then(response => response.json())
    .then(data => {data.forEach((helicopters) => {
        
        const helicopterpage = document.createElement('form');
        helicopterpage.id = "objectlist";
        helicopterpage.innerHTML = `
        <img src="${helicopters.image}" alt="${helicopters.make}" width=500 height= 500>
        <p>Passengers: ${helicopters.passengers}</p>
        <p>Range: ${helicopters.max_distance}</p>
        <p>Rate: ${helicopters.hourly_rate}</p>
        <input type="radio" name="helicopter" value=${helicopters.id}
        onclick="selectHelicopter(this.value)" />Select this helicopter<br
        >
        <button id ='submit'>SUMBIT</button>
        `;
        const body = document.body;
        body.appendChild(helicopterpage);
    })})
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const enterhours = prompt('Hiring hours: ')
        if (!Number.isInteger(parseInt(enterhours))) {
            alert('Please enter a number!')
        }
        else{
            return `Your charge are ${helicopters.hourly_rate*enterhours}`
        }
    }
    )
};
  


//   function helicopterTypes(chooseHelicopter) {
//     // const innerhtml=chooseHelicopter();
//     document.querySelector('body').innerHTML = `
//     <div class="helicopters">
//     <h3> Choose Helicopter</h3>
//     </div>`
//     fetch('http://localhost:3000/helicopters')
//     .then(response => response.json())
//     .then(data => {data.forEach((helicopters) => {
        
//         const helicopterpage = document.createElement('div');
//         helicopterpage.id = "objectlist";
//         helicopterpage.innerHTML = `
//         <img src="${helicopters.image}" alt="${helicopters.make}" width=500 height= 500>
//         <p>Passengers: ${helicopters.passengers}</p>
//         <p>Range: ${helicopters.max_distance}</p>
//         <p>Rate: ${helicopters.hourly_rate}</p>
//         `;
//         const body = document.body;
//         body.appendChild(helicopterpage);
//     })
//     });
//   }
