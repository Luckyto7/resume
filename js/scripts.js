const lines = [
    "Здравствуйте, меня зовут Константин Андреевич.",
       "Я разработчик Front-End.",
    "Владею навыками HTML, CSS, JavaScript, Msql, Sql, PhP, WordPress, WiX, Scrum.",
    "Все что нужно для создания или редактирования вашего проэкта " ,
     "Какие Услуги я предоставляют? Вы можете увидеть ниже и наличия портфолио" ,
     " В конце странице вы можете оставить обратную связь",
     " Благодарю за ваше внимание!!!",
  ];
  
  let lineIndex = 0;
  let letterIndex = 0;
  
  function typeText() {
    const currentText = lines[lineIndex];
    if (letterIndex <= currentText.length) {
      document.getElementById(`line${lineIndex + 1}`).innerText = currentText.substring(0, letterIndex);
      letterIndex++;
      setTimeout(typeText, 50);
    } else {
      lineIndex++;
      if (lineIndex < lines.length) {
        letterIndex = 0;
        setTimeout(typeText, 1000);
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(typeText, 1000);
  });

  function handleScroll() {
    const rightSection = document.querySelector('.right-section');
    const distanceFromTop = window.scrollY;
  
    if (distanceFromTop > 400) { // Adjust this value as needed
      rightSection.style.backgroundPosition = 'right center';
    } else {
      rightSection.style.backgroundPosition = 'left center';
    }
  }
  
  document.addEventListener('scroll', handleScroll);

  