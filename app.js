const enDesarrollo = document.querySelectorAll(
  ".buttonCard2, .buttonCard3, .buttonCard4, #button1Apps, #button1Scripts"
);
enDesarrollo.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    alert("En desarrollo...");
  });
});

const cosasSinElDefault = document.querySelectorAll(
  ".buttonCard1, .card1, .card2, .card3, .card4, .cards, .text, .footerClass, .cardsApps, .cardsScripts"
);
cosasSinElDefault.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

document
  .getElementById('downloadButton')
  .addEventListener('click', function(){
    const link = document.createElement('a');
    link.href = "./downloadsFiles/TenOrLose.rar";
    link.download = "TenOrLose.rar";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
