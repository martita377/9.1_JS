(function() {
    var a = document.querySelector('#aValue')
    var h = document.querySelector('#hValue')
    var result = document.querySelector('#result')

    a.addEventListener('input', function() {
        render(getTriangleArea(a.value, h.value));
    })

    h.addEventListener('input', function() {
        render(getTriangleArea(a.value, h.value));
    })

    function render(value) {
        result.value = value || 0;
    }

    function getTriangleArea(a, h) {
        if (a < 0 || h < 0) {
            alert('Nieprawidłowe dane');
        } else {
            return calculate(a, h);
        }
    }

    function calculate(a, h) {
        return (a * h) / 2;
    }

    render();
}())