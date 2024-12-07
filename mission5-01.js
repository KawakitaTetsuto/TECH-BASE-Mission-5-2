async function PokemonApi() {
    const pokemon=document.getElementById("pokemon").value;
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data=await response.json();
    const object=document.getElementById("res");
    object.innerText=data.types[0].type.name;
    console.log(data.types);
}