// Обработка формы на странице контактов
document.addEventListener('DOMContentLoaded', function() {
    // Форма обратной связи
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Простая валидация формы
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const comment = document.getElementById('comment').value;
            
            if (name && email && comment) {
                // В реальном приложении здесь был бы AJAX запрос
                alert('Сообщение отправлено! Я свяжусь с вами в ближайшее время.');
                contactForm.reset();
            } else {
                alert('Пожалуйста, заполните все обязательные поля (отмечены *).');
            }
        });
        
        // Маска для телефона
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 0) {
                    value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7, 9) + '-' + value.substring(9, 11);
                }
                e.target.value = value;
            });
        }
    }
});