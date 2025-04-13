let buttons = document.querySelectorAll(".accordion_btn") as NodeListOf<HTMLButtonElement>;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        // First, close all items
        buttons.forEach((btn) => {
            btn.setAttribute('aria-expanded', 'false');
            const target = btn.parentElement?.nextElementSibling as HTMLElement | null;
            if (target) target.hidden = true;

            const minusicon = btn.querySelector('.minus_icon') as HTMLElement | null;
            const plusicon = btn.querySelector('.plus_icon') as HTMLElement | null;
            minusicon?.classList.remove('active');
            plusicon?.classList.add('active');
        });

        // If the clicked item was not already expanded, open it
        if (!isExpanded) {
            button.setAttribute('aria-expanded', 'true');
            const target = button.parentElement?.nextElementSibling as HTMLElement | null;
            if (target) target.hidden = false;

            const minusicon = button.querySelector('.minus_icon') as HTMLElement | null;
            const plusicon = button.querySelector('.plus_icon') as HTMLElement | null;
            minusicon?.classList.add('active');
            plusicon?.classList.remove('active');
        }
    });
});
