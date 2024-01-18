function chooseHelicopter() {
    fetch('http://localhost:3000/helicopters')
    .then(response => response.json())
    .then(helicopters => helicopters.forEach(chooseHelicopter => choosenHelicopter(chooseHelicopter)))
    .catch(error => console.error('Error:', error));
}

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




function helicopterTypes(chooseHelicopter){
    const helicopterPage= document.createElement('div');
    helicopterPage.className='container'
    helicopterPage.innerHTML=`
    <h3>Choose a type of Helicopter: </h3>`
    document.body.appendChild(helicopterPage)
    const list = document.createElement('li')
    list.textContent= `${chooseHelicopter.type}`
    list.dataset.thisType=JSON.stringify(chooseHelicopter)
    list.addEventListener('click', (e)=>{showDetails(e)})
    helicopterPage.appendChild(list)

}


// function helicopterTypes(){
//     const helicopterPage= document.createElement('div')
//     helicopterPage.id='helicopter-page'
//     document.body.appendChild(helicopterPage);
//     const backBtn=document.createElement('button')
//     backBtn.innerText='Back'
//     backBtn.onclick=()=>{document.querySelector('#details').remove();document.
//     querySelector('.container').style.display='block';backBtn.remove()}
//     helicopterPage.append(backBtn)
//     const type=event.target.value
//     const request= new Request(`http://localhost:3000/helicopters`)
//     fetch(request).then(respone=> respone.json()).then(data=>show)

//     function helicopterOptons(){
//         const selectHelicopter=document.createElement('select')
//         selectHelicopter.id='typeOfHelicopter'
//         fetch(' http://localhost:3000/helicopters')
//     .then(res=> res.text())
//     .then(data=>{
//         const selectElement = document.getElementById('myselect')
//         data.forEach(optionData => 
//             {const optionElement = document.createElement('option');
//             optionElement.text = optionData.text;
//             optionElement.value = optionData.value;
//             selectElement.add(optionElement);
//         })
//         return selectHelicopter
//     })
//     .then(selectElement => {
//         helicopterPage.appendChild(selectElement);
//     })
        
//     }

//     helicopterOptons();
// }
