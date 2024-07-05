const ctx = document.getElementById('myChart').getContext('2d');
const data = [
    {
        label: 'WPPOOL',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: '#FC714D',
        borderWidth: 2,
        pointRadius:0
    },
    {
        label: 'Google',
        data: [28, 48, 40, 19, 86, 27],
        borderColor: '#615DE3',
        borderWidth: 2,
        pointRadius:0
    },
    {
        label: 'Microsoft',
        data: [18, 48, 77, 9, 100, 27],
        borderColor: '#7CA63A',
        borderWidth: 2,
        pointRadius:0
    },
    {
        label: 'Twitter',
        data: [32, 57, 30, 20, 50, 40],
        borderColor: '#6F34A1',
        borderWidth: 2,
        pointRadius:0
    }
]
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: data
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
        }
    }
});