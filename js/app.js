const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
        //Change light <> dark
        document.body.classList.toggle('dark');
});