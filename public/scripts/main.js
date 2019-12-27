// Подключение необходимых стилей
let w = screen.width;
if(w < 700) {
  let link = document.createElement("link");
  let menu = document.createElement("link");
  
  link.rel = "stylesheet";
  link.href = "public/styles/mobile/style.css";
  
  menu.rel = "stylesheet";
  menu.href = "public/styles/mobile/menu.css";
  
  document.head.appendChild(link);
  document.head.appendChild(menu);
} else {
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "public/styles/desktop/style.css";
  document.head.appendChild(link);
}

// Регистрация сервисного работника
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
        .then((reg) => {
          //console.log('Сервисный работник зарегистрирован.', reg);
        });
  });
}