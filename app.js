//::::::::::::::::::::::::::::::::::::::::::::::::::
//Animation scroll to anchor
//::::::::::::::::::::::::::::::::::::::::::::::::::

function scroll_part0(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part0 = document.querySelector('.part0');
    part0.scrollIntoView(options);
}

function scroll_part1(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part1 = document.querySelector('.part1');
    part1.scrollIntoView(options);
}

function scroll_part2(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part2 = document.querySelector('.part2');
    part2.scrollIntoView(options);
}

function scroll_part3(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part3 = document.querySelector('.part3');
    part3.scrollIntoView(options);
}

function scroll_part4(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part4 = document.querySelector('.part4');
    part4.scrollIntoView(options);
}

function scroll_part5(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part5 = document.querySelector('.part5');
    part5.scrollIntoView(options);
}

function scroll_part6(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part6 = document.querySelector('.part6');
    part6.scrollIntoView(options);
}

function scroll_part7(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
  const part7 = document.querySelector('.part7');
  part7.scrollIntoView(options);
}

const burger = document.getElementById('burger');
const links = document.getElementById('links');

burger.addEventListener('click', () => {
  links.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
	const contents = document.querySelectorAll('.content'); // Находим все блоки
  
	if (!contents.length) return; // Если нет ни одного блока, выходим
  
	const observer = new IntersectionObserver((entries, observer) => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('animate'); // Добавляем класс анимации
		  observer.unobserve(entry.target); // Останавливаем наблюдение для этого блока
		}
	  });
	}, { threshold: 0.3 });
  
	contents.forEach(content => observer.observe(content)); // Наблюдаем за каждым блоком
  });
  

  // Функция для отслеживания, когда карточка попадает в область видимости
const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		entry.target.classList.add('visible'); // Добавляем класс для анимации
		observer.unobserve(entry.target); // Останавливаем отслеживание, когда карточка появилась
	  }
	});
  }, { threshold: 0.5 }); // 50% карточки должно быть видно
  
  // Наблюдаем за всеми карточками
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
	observer.observe(card);
  });
  
function switchTab(tabId) {
  // Снять активность со всех вкладок
  document.querySelectorAll('.tab_header_item').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab_item').forEach(content => content.classList.remove('active'));

  // Назначить активную вкладку и контент
  const index = ['tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6', 'tab7', 'tab8', 'tab9'].indexOf(tabId);
  document.querySelectorAll('.tab_header_item')[index].classList.add('active');
  document.getElementById(tabId).classList.add('active');
}


// анимация чисел роста


document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".animnum");

  const animateCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const duration = 1500;
    const stepTime = 15;
    const steps = duration / stepTime;
    let current = +counter.getAttribute("data-current");
    const increment = target / steps;

    const updateCount = () => {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
      } else {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCount);
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          animateCounter(counter);
          //observer.unobserve(counter); // отключаем наблюдение, чтобы не повторялось
        }
      });
    },
    {
      threshold: 0.6 // срабатывает, когда 60% элемента видно
    }
  );

  counters.forEach(counter => {
    observer.observe(counter);
  });
});

// увеличивает фото по клику с классом open

// Добавляем CSS-анимации
const style = document.createElement('style');
style.textContent = `
  #overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  #overlay.active {
    visibility: visible;
    opacity: 1;
  }

  #overlay img {
    max-height: 90vh;
    max-width: 90vw;
    object-fit: contain;
    border-radius: 1rem;
    transform: scale(0.8);
    opacity: 0;
    transition: transform 0.35s ease, opacity 0.35s ease;
  }

  #overlay.show img {
    transform: scale(1);
    opacity: 1;
  }
`;
document.head.appendChild(style);

// Создание оверлея
const overlay = document.createElement('div');
overlay.id = 'overlay';
const overlayImage = document.createElement('img');
overlay.appendChild(overlayImage);
document.body.appendChild(overlay);

// Открытие картинки
document.querySelectorAll('img.open').forEach(img => {
  img.addEventListener('click', () => {
    overlayImage.src = img.src;
    overlay.classList.add('active');

    // Делаем плавную анимацию после небольшого таймаута (для активации перехода)
    setTimeout(() => {
      overlay.classList.add('show');
    }, 10);
  });
});

// Закрытие
overlay.addEventListener('click', () => {
  overlay.classList.remove('show'); // убираем анимацию
  setTimeout(() => {
    overlay.classList.remove('active'); // затем убираем сам оверлей
  }, 300); // подождём завершения анимации
});

document.addEventListener('DOMContentLoaded', function() {
  // Находим все контейнеры слайдеров
  const sliderContainers = document.querySelectorAll('.future_slider_container');
  
  // Переменная для отслеживания активного слайдера (для клавиатуры)
  let activeSlider = null;
  
  // Инициализируем каждый слайдер
  sliderContainers.forEach((container, containerIndex) => {
    console.log(`Инициализация слайдера ${containerIndex + 1}`);
    initSlider(container, containerIndex);
  });

  function initSlider(container, containerIndex) {
    const sliderItems = container.querySelectorAll('.future_slider_item');
    const manualButtons = container.querySelectorAll('.manual_btn');
    const radioButtons = container.querySelectorAll('input[type="radio"]');
    
    // Находим кнопки навигации
    const prevButton = container.querySelector('.swiper-button-prev');
    const nextButton = container.querySelector('.swiper-button-next');
    
    // Переменные для каждого отдельного слайдера
    let currentSlide = 0;
    let slideInterval;
    let isManualNavigation = false;
    let isSliderInCenter = false; // Переименовано для ясности
    let autoScrollStoppedByUser = false;

    // Переменные для свайпа
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let isSwiping = false;
    const SWIPE_THRESHOLD = 50; // минимальное расстояние свайпа в пикселях

    console.log(`Слайдер ${containerIndex + 1}: найдено ${sliderItems.length} слайдов`);

    // Инициализация слайдера
    function initSliderState() {
      sliderItems.forEach((item, index) => {
        item.classList.remove('active');
        if (manualButtons[index]) {
          manualButtons[index].classList.remove('active');
        }
        if (radioButtons[index]) {
          radioButtons[index].checked = false;
        }
      });
      
      if (sliderItems[currentSlide]) {
        sliderItems[currentSlide].classList.add('active');
      }
      if (manualButtons[currentSlide]) {
        manualButtons[currentSlide].classList.add('active');
      }
      if (radioButtons[currentSlide]) {
        radioButtons[currentSlide].checked = true;
      }
      
      console.log(`Слайдер ${containerIndex + 1}: установлен слайд ${currentSlide}`);
    }

    // Переключение на конкретный слайд
    function goToSlide(slideIndex) {
      currentSlide = slideIndex;
      initSliderState();
      isManualNavigation = true;

      // Сбрасываем флаг ручной навигации после задержки
      setTimeout(() => {
        isManualNavigation = false;
      }, 2500);
    }

    // Следующий слайд (для автопрокрутки)
    function nextSlide() {
      if (!isManualNavigation && isSliderInCenter && !autoScrollStoppedByUser) {
        currentSlide = (currentSlide + 1) % sliderItems.length;
        initSliderState();
        console.log(`Слайдер ${containerIndex + 1}: автопрокрутка -> слайд ${currentSlide}`);
      }
    }

    // Предыдущий слайд
    function prevSlide() {
      if (!isManualNavigation && isSliderInCenter && !autoScrollStoppedByUser) {
        currentSlide = (currentSlide - 1 + sliderItems.length) % sliderItems.length;
        initSliderState();
      }
    }

    // Функция для переключения вперед (ручное)
    function goToNextSlide() {
      console.log(`Слайдер ${containerIndex + 1}: переключение на следующий слайд`);
      currentSlide = (currentSlide + 1) % sliderItems.length;
      goToSlide(currentSlide);
      stopAutoSlide();
      
      // Устанавливаем флаг, что автопрокрутка остановлена вручную
      autoScrollStoppedByUser = true;
    }

    // Функция для переключения назад (ручное)
    function goToPrevSlide() {
      console.log(`Слайдер ${containerIndex + 1}: переключение на предыдущий слайд`);
      currentSlide = (currentSlide - 1 + sliderItems.length) % sliderItems.length;
      goToSlide(currentSlide);
      stopAutoSlide();
      
      // Устанавливаем флаг, что автопрокрутка остановлена вручную
      autoScrollStoppedByUser = true;
    }

    // Обработчики для свайпа
    function handleTouchStart(e) {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
      isSwiping = true;
    }

    function handleTouchMove(e) {
      if (!isSwiping) return;
      
      // Предотвращаем скролл страницы во время горизонтального свайпа
      const touchMoveX = e.changedTouches[0].screenX;
      const touchMoveY = e.changedTouches[0].screenY;
      
      const diffX = Math.abs(touchMoveX - touchStartX);
      const diffY = Math.abs(touchMoveY - touchStartY);
      
      // Если движение в основном горизонтальное, предотвращаем скролл страницы
      if (diffX > diffY && diffX > 10) {
        e.preventDefault();
      }
    }

    function handleTouchEnd(e) {
      if (!isSwiping) return;
      
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      
      handleSwipeGesture();
      isSwiping = false;
    }

    function handleSwipeGesture() {
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;
      
      // Проверяем, что свайп в основном горизонтальный
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > SWIPE_THRESHOLD) {
        if (diffX > 0) {
          // Свайп вправо - предыдущий слайд
          console.log(`Слайдер ${containerIndex + 1}: свайп вправо`);
          goToPrevSlide();
        } else {
          // Свайп влево - следующий слайд
          console.log(`Слайдер ${containerIndex + 1}: свайп влево`);
          goToNextSlide();
        }
      }
    }

    // Автопрокрутка
    function startAutoSlide() {
      if (!slideInterval && isSliderInCenter && !autoScrollStoppedByUser) {
        slideInterval = setInterval(nextSlide, 2500);
        console.log(`Слайдер ${containerIndex + 1}: автопрокрутка запущена (в центре)`);
      }
    }

    // Остановка автопрокрутки
    function stopAutoSlide() {
      if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
        console.log(`Слайдер ${containerIndex + 1}: автопрокрутка остановлена`);
      }
    }

    // Проверка находится ли слайдер в центральной области
    function checkIfInCenter() {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      
      // Центральная область: 30% - 70% высоты экрана
      const isInCenter = (
        rect.top <= viewportHeight * 0.7 && 
        rect.bottom >= viewportHeight * 0.3 &&
        rect.left <= viewportWidth * 0.9 && 
        rect.right >= viewportWidth * 0.1
      );
      
      return isInCenter;
    }

    // Обновление состояния слайдера (в центре или нет)
    function updateSliderState() {
      const wasInCenter = isSliderInCenter;
      isSliderInCenter = checkIfInCenter();
      
      if (isSliderInCenter && !wasInCenter) {
        // Слайдер вошел в центральную область
        console.log(`Слайдер ${containerIndex + 1}: вошел в центральную область`);
        container.classList.add('in-center');
        
        // Запускаем автопрокрутку если не была остановлена пользователем
        if (!autoScrollStoppedByUser) {
          startAutoSlide();
        }
        
        // Устанавливаем как активный для клавиатуры
        activeSlider = container;
        
      } else if (!isSliderInCenter && wasInCenter) {
        // Слайдер вышел из центральной области
        console.log(`Слайдер ${containerIndex + 1}: вышел из центральной области`);
        container.classList.remove('in-center');
        stopAutoSlide();
        
        // Сбрасываем активный слайдер если это был он
        if (activeSlider === container) {
          activeSlider = null;
        }
      }
    }

    // Обработчики для стрелок навигации
    if (nextButton) {
      nextButton.addEventListener('click', goToNextSlide);
      nextButton.addEventListener('mouseenter', stopAutoSlide);
      nextButton.addEventListener('mouseleave', () => {
        if (!autoScrollStoppedByUser && isSliderInCenter) {
          startAutoSlide();
        }
      });
    }

    if (prevButton) {
      prevButton.addEventListener('click', goToPrevSlide);
      prevButton.addEventListener('mouseenter', stopAutoSlide);
      prevButton.addEventListener('mouseleave', () => {
        if (!autoScrollStoppedByUser && isSliderInCenter) {
          startAutoSlide();
        }
      });
    }

    // Обработчики для кнопок
    manualButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        console.log(`Слайдер ${containerIndex + 1}: клик по кнопке ${index}`);
        goToSlide(index);
        stopAutoSlide();
        
        // Устанавливаем флаг, что автопрокрутка остановлена вручную
        autoScrollStoppedByUser = true;
      });
      
      button.addEventListener('mouseenter', stopAutoSlide);
      button.addEventListener('mouseleave', () => {
        if (!autoScrollStoppedByUser && isSliderInCenter) {
          startAutoSlide();
        }
      });
    });

    // Обработчики для радио-кнопок
    radioButtons.forEach((radio, index) => {
      radio.addEventListener('change', () => {
        console.log(`Слайдер ${containerIndex + 1}: изменение радио-кнопки ${index}`);
        goToSlide(index);
        stopAutoSlide();

        // Также считаем, что пользователь остановил автоматическую прокрутку
        autoScrollStoppedByUser = true;
      });
    });

    // Обработчики для свайпа
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Пауза при наведении на слайдер
    container.addEventListener('mouseenter', stopAutoSlide);
    container.addEventListener('mouseleave', () => {
      if (!autoScrollStoppedByUser && isSliderInCenter) {
        startAutoSlide();
      }
    });

    // Сохраняем ссылки на функции для внешнего использования
    container.goToNextSlide = goToNextSlide;
    container.goToPrevSlide = goToPrevSlide;
    container.updateSliderState = updateSliderState;

    // Инициализация - показываем первый слайд
    initSliderState();
    
    // Первоначальная проверка положения
    setTimeout(() => {
      updateSliderState();
    }, 100);
  }

  // Глобальный обработчик клавиатуры
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (activeSlider && activeSlider.goToPrevSlide) {
        console.log('Клавиша ← - переключение на предыдущий слайд');
        activeSlider.goToPrevSlide();
      }
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (activeSlider && activeSlider.goToNextSlide) {
        console.log('Клавиша → - переключение на следующий слайд');
        activeSlider.goToNextSlide();
      }
    }
  });

  // Обработчик скролла для обновления состояния всех слайдеров
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      sliderContainers.forEach(container => {
        if (container.updateSliderState) {
          container.updateSliderState();
        }
      });
    }, 50); // Небольшая задержка для производительности
  }, { passive: true });

  // Обработчик ресайза окна
  window.addEventListener('resize', () => {
    setTimeout(() => {
      sliderContainers.forEach(container => {
        if (container.updateSliderState) {
          container.updateSliderState();
        }
      });
    }, 100);
  });

  // Периодическая проверка (на случай если другие элементы влияют на положение)
  setInterval(() => {
    sliderContainers.forEach(container => {
      if (container.updateSliderState) {
        container.updateSliderState();
      }
    });
  }, 1000);
});

const images = document.querySelectorAll('.colorize-animation');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observerColor = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    const img = entry.target;
    if (entry.isIntersecting) {
      // Когда изображение входит в область видимости
      // сбрасываем класс, чтобы анимация могла запуститься заново
      img.classList.remove('colorize-active');
      
      // чуть задержки, чтобы браузер успел "увидеть" удаление класса
      // и запустить повторную анимацию
      void img.offsetWidth; // триггер reflow
      img.classList.add('colorize-active');
      
    } else {
      // Когда изображение выходит из области видимости — можно оставить так,
      // или убрать класс, чтобы подготовить к следующему входу
      // например:
      // img.classList.remove('colorize-active');
    }
  });
}, observerOptions);

images.forEach(img => {
  observerColor.observe(img);
});



// Выбираем все элементы 
const elements = document.querySelectorAll('.blockquote_main');

const observerSpin = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        // Удаляем класс 'animate', чтобы можно было запустить заново
        entry.target.classList.remove('animate_spin');
        // Обновляем страницу (force reflow), чтобы браузер заметил изменение класса
        void entry.target.offsetWidth; // принудительный релоад
        // Добавляем класс 'animate' для запуска анимации заново
        entry.target.classList.add('animate_spin');
    } else {
        // Можно оставить пустым или убрать класс при исчезновении,
        // если хотите, чтобы анимация запускалась только при появлении.
    }
});
}, { threshold: 0.5 });

// Навешиваем наблюдение на все выбранные элементы
elements.forEach(el => observerSpin.observe(el));