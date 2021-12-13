let phrases = [
    { text: "take this cappuccino and go to the cinema", image: "https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_1280.jpg" }, 
    { text: "drink this Latte Machiatto, write the story about yourself", image: "https://cdn.pixabay.com/photo/2021/11/10/18/00/map-6784496_1280.jpg" }, 
    { text: "shot this espresso. Don't worry about anything, just sit back, relax and enjoy your flight", image: "https://cdn.pixabay.com/photo/2017/05/12/13/17/night-flight-2307018_1280.jpg" }, 
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector(".button");
  let phrase = document.querySelector(".phrase");
  let advice = document.querySelector(".advice");
  let image = document.querySelector(".image");
  
  button.addEventListener("click", function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, "textContent", randomElement.text)
    smoothly(image, "src", randomElement.image)
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = "33px";
    } else {
      advice.style.fontSize = "42px";
    }
  });
  for (let i = 0; i <= 2; i++) {
    smoothly(phrase,"textContent", phrases[i].text);
    smoothly(image, "src", phrases[i].image)
  }