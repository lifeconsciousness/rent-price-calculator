
const submitBtn = document.querySelector('.submit-btn')
const houseIdResult = document.querySelector('.result')
const postcodeInput = document.querySelector('.postcode-input')
const houseNumberInput = document.querySelector('.house-number-input')

const postcode = '6222NA'
const houseNumber = '21'
// const postcode = postcodeInput.value
// const houseNumber = houseNumberInput.value

const handleClick = async () => {
    
    try{
        const response = await fetch(`https://bag.basisregistraties.overheid.nl/api/v1/nummeraanduidingen?postcode=${postcode}&huisnummer=${houseNumber}`);
        if(!response.ok){
            throw new Error('Network response was not ok')
        }
        const json = await response.json();
        const houseId = json._embedded.nummeraanduidingen[0].landelijk_id;
        
        houseIdResult.innerHTML = `House id: ${houseId}`
        
    } catch (error){
        console.log(`Error: ${error}`)
    }
}

submitBtn.addEventListener('click', handleClick)
