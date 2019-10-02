const controls = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

controls.forEach(control => control.addEventListener('change', handleUpdate));
controls.forEach(control => control.addEventListener('mousemove', handleUpdate));