const optionsPie = {
    animation: {
        duration: 2000,
    },
}
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2019','2020','2021', '2022'],
        datasets: [{
            label: 'Общее количество работ',
            data: [10, 25, 13, 20],
            backgroundColor: ['rgb(212, 175, 55)', 'rgb(94, 49, 40)','rgb(190, 190, 190)', 'rgb(208, 176, 132)'],
        }]
    },
    options: optionsPie
});