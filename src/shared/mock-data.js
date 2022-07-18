import { COLOR } from "./constants";

export const LANDING_ARTICLE = [
    {
        image: 'img/column-1.jpg',
        created: '2021.05.17   23:25',
        description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: ['#魚料理 ', '#和食', '#DHA'],
    },
    {
        image: 'img/column-2.jpg',
        created: '2021.05.17   23:25',
        description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: ['#魚料理 ', '#和食', '#DHA'],
    },
    {
        image: 'img/column-3.jpg',
        created: '2021.05.17   23:25',
        description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: ['#魚料理 ', '#和食', '#DHA'],
    },
    {
        image: 'img/column-4.jpg',
        created: '2021.05.17   23:25',
        description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: ['#魚料理 ', '#和食', '#DHA'],
    },
    {
        image: 'img/column-5.jpg',
        created: '2021.05.17   23:25',
        description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: ['#魚料理 ', '#和食', '#DHA'],
    },
    {
        image: 'img/column-6.jpg',
        created: '2021.05.17   23:25',
        description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: ['#魚料理 ', '#和食', '#DHA'],
    },
    {
        image: 'img/column-7.jpg',
        created: '2021.05.17   23:25',
        description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: ['#魚料理 ', '#和食', '#DHA'],
    },
    {
        image: 'img/column-8.jpg',
        created: '2021.05.17   23:25',
        description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: ['#魚料理 ', '#和食', '#DHA'],
    },
];

export const mealData = [
    {
        image: 'img/m01.jpg',
        description: '05.21.Morning',
    },
    {
        image: 'img/l03.jpg',
        description: '05.21.Lunch',
    },
    {
        image: 'img/d01.jpg',
        description: '05.21.Dinner',
    },
    {
        image: 'img/l01.jpg',
        description: '05.21.Snack',
    },
    {
        image: 'img/m01.jpg',
        description: '05.20.Morning',
    },
    {
        image: 'img/l02.jpg',
        description: '05.20.Lunch',
    },
    {
        image: 'img/d02.jpg',
        description: '05.20.Dinner',
    },
    {
        image: 'img/s01.jpg',
        description: '05.21.Snack',
    },
]

export const lineChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    layout: {
        padding: {
            left: 50,
            right: 50,
            top: 10,
            bottom: 10,
        },
    },
    scales: {
        x: {
            ticks: {
                color: 'white',
                font: {
                    size: 10,
                    weight: 300,
                },
            },
            grid: {
                drawBorder: false, // <-- this removes axis line
                lineWidth: 0.7,
                color: COLOR.gray,
            },
        },
        y: {
            display: false,
            grid: {
                display: false,
            },
        },
    },
    maintainAspectRatio: false,
};

export const myRecordLineChartData = {
    labels: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月',],
    datasets: [
        {
            label: 'Dataset 1',
            data: [16, 15, 14, 12, 14, 11, 10, 8, 9, 7, 6, 5],
            borderColor: COLOR.yellow,
            pointBackgroundColor: COLOR.yellow,
        },
        {
            label: 'Dataset 2',
            data: [16, 14, 15, 12, 13, 14, 12, 10, 9, 9, 8, 6],
            borderColor: COLOR.aqua,
            pointBackgroundColor: COLOR.aqua,
        },
    ],
};
