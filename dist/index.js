"use strict";
let buttons = document.querySelectorAll(".accordion_btn");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        var _a;
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        // First, close all items
        buttons.forEach((btn) => {
            var _a;
            btn.setAttribute('aria-expanded', 'false');
            const target = (_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.nextElementSibling;
            if (target)
                target.hidden = true;
            const minusicon = btn.querySelector('.minus_icon');
            const plusicon = btn.querySelector('.plus_icon');
            minusicon === null || minusicon === void 0 ? void 0 : minusicon.classList.remove('active');
            plusicon === null || plusicon === void 0 ? void 0 : plusicon.classList.add('active');
        });
        // If the clicked item was not already expanded, open it
        if (!isExpanded) {
            button.setAttribute('aria-expanded', 'true');
            const target = (_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.nextElementSibling;
            if (target)
                target.hidden = false;
            const minusicon = button.querySelector('.minus_icon');
            const plusicon = button.querySelector('.plus_icon');
            minusicon === null || minusicon === void 0 ? void 0 : minusicon.classList.add('active');
            plusicon === null || plusicon === void 0 ? void 0 : plusicon.classList.remove('active');
        }
    });
});
