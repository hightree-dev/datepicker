class DatePicker {
    constructor(callback) {
        const date = new Date();
        const element = document.createElement('div');

        const display = document.createElement('span');
        display.update = function() {
            const dateString = date.toLocaleDateString();
            this.innerText = dateString;
            if (callback)
                callback(dateString);
        }

        const prevButton = document.createElement('button');
        prevButton.innerText = '◀';
        prevButton.onclick = function(e) {
            date.setDate(date.getDate() - 1);
            display.update();
        }

        const nextButton = document.createElement('button');
        nextButton.innerText = '▶';
        nextButton.onclick = function(e) {
            date.setDate(date.getDate() + 1);
            display.update();
        }

        display.update();

        element.appendChild(prevButton);
        element.appendChild(display);
        element.appendChild(nextButton);

        return element;
    }
}
