jQuery(document).ready(function() {
  // HIGHCHARTS DEMOS

  	// LINE CHART MINGGUAN
	$('#highchart_1').highcharts({
        colors: ['#FFD320', '#15677B'],
        chart : {
            style: {
                fontFamily: 'Open Sans'
            },
            backgroundColor: {
                linearGradient: [0, 0, 500, 500],
                stops: [
                    [0, 'rgb(241, 248, 255)'],
                    [1, 'rgb(255, 255, 255)']
                ]
            },
        },
		title: {
			text: 'Perbandingan kWh mingguan',
			x: -20 //center
		},
		
		xAxis: {
			categories: ['senin', 'selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu',
				'Minggu']
		},
		yAxis: {
			title: {
				text: 'Beban (Kwh)'
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		tooltip: {
			valueSuffix: 'Kwh'
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle',
			borderWidth: 0
		},
		series: [{
			name: 'minggu ini',
			data: [7.0, 6.9, 9.5, 14.5, 12.2, 21.5, 25.2]
		}, {
			name: 'minggu kemarin',
			data: [10.2, 3.8, 5.7, 11.3, 17.0, 22.0, 13.8]
		}]
	});

    // LINE CHART BULANAN
    $('#highchart_7').highcharts({
        colors: ['#FFD320', '#015D9E', '#89C33A', '#ED1717'],
        chart : {
            style: {
                fontFamily: 'Open Sans'
            },
            backgroundColor: {
                linearGradient: [0, 0, 500, 500],
                stops: [
                    [0, 'rgb(223, 251, 255)'],
                    [1, 'rgb(255, 255, 255)']
                ]
            },
        },
        title: {
            text: 'Penggunaan kWh bulanan',
            x: -20 //center
        },
        
        xAxis: {
            categories: ['01-08-19', '02-08-19', '03-08-19', '04-08-19', '05-08-19', '06-08-19',
                '07-08-19', '08-08-19', '09-08-19', '10-08-19', '11-08-19'],

            labels: {
                rotation: -45,
                style: {
                    fontSize: '11px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            title: {
                text: 'Beban (Kwh)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'Kwh'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'lwbp',
            data: [7.0, 6.9, 9.5, 14.5, 12.2, 21.5, 25.2, 5.2, 11.3, 17.3, 13.1]
        }, {
            name: 'wbp',
            data: [10.2, 3.8, 5.7, 11.3, 17.0, 22.0, 13.8, 7.3, 9.6, 15.6, 18.2]
        }, {
            name: 'Kwh',
            data: [5.2, 7.8, 8.7, 12.3, 15.0, 19.0, 24.8, 14.2, 13.4, 9.4, 14.1]
        }, {
            name: 'Emisi',
            data: [1.2, 1.8, 1.7, 1.3, 2.0, 1.0, 1.8, 2.0, 2.5, 1.0, 3.2]
        }]

    });


    // LINE CHART TAHUNAN
    $('#highchart_8').highcharts({
        colors: ['#FFD320', '#015D9E', '#ED1717'],

         chart: {
        type: 'bar'
        },
        title: {
            text: 'Historic Kwh tahunan'
        },
        
        xAxis: {
            categories: ['2019', '2018'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Kwh',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' kWh'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'lwdp',
            data: [107.2, 115.9]
        }, {
            name: 'wbp',
            data: [133.9, 156.5]
        }, {
            name: 'emisi',
            data: [104.1, 108.5]
        }]
    });

	// LINE CHART 2
	$.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {

        $('#highchart_2').highcharts({
            chart: {
                zoomType: 'x',
                style: {
                    fontFamily: 'Open Sans'
                }
            },
            title: {
                text: 'Load hari ini'
            },
            
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Frekuensi'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'USD to EUR',
                data: data
            }]
        });
    });

	// UTILITY CHART
	$('#highchart_3').highcharts({
        chart: {
        type: 'column'
    },
    title: {
        text: 'Penggunaan kWh Utility hari ini'
    },
    
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'kWh'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Used: <b>{point.y:.1f} kwh</b>'
    },
    series: [{
        name: 'Population',
        data: [
            ['Pump', 23.7],
            ['PPSTP', 16.1],
            ['Chiller', 14.2],
            ['Lift', 14.0],
            ['Parkir', 12.5],
            ['Hydrant', 12.1],
            ['Lamp', 11.8],
            ['AC', 11.1],
            ['PP PF', 11.1],
            ['pp AB', 10.5]
        ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
 
 	// BAR CHART
 	
    $('#highchart_4').highcharts({

        colors: ['#89C33A', '#016DB8', '#FFBB00'],
        chart: {
        type: 'bar'
        },
        title: {
            text: 'Penggunaan per kategori'
        },
        xAxis: {
            categories: ['lt.1', 'lt.2', 'lt.3', 'lt.4', 'lt.5']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Kwh consumption'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'AC',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Hydrant',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'Lampu',
            data: [3, 4, 4, 2, 5]
        }]
       
    });

    // Cost
    $('#highchart_5').highcharts({
        colors: ['#FFBB00', '#016DB8', '#F05F22', '#89C33A'],
        chart: {
        type: 'column'
        },
        title: {
            text: 'Cost LVMDP 17-08-19'
        },

        xAxis: {
            categories: [
                'lt.1',
                'lt.2',
                'lt.3',
                'lt.4',
                'lt.5',
                'Warehouse',
                'Garasi'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rupiah'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>Rp.{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Lampu',
            data: [50.9, 31.5, 60.4, 25.2, 55.0, 120.0, 78.6]

        }, {
            name: 'Server',
            data: [120.6, 78.8, 45.5, 130.4, 106.0, 187.5, 105.0]

        }, {
            name: 'Komputer',
            data: [80.9, 70.8, 39.3, 41.4, 47.0, 48.3, 59.0]

        }, {
            name: 'AC',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4]

        }]
    });

    // Create the chart
    $('#highchart_6').highcharts({
        colors: ['#FFBB00', '#016DB8', '#F05F22', '#89C33A'],
        chart: {
        type: 'column'
        },
        title: {
            text: 'LVMDP 17-08-19'
        },

        xAxis: {
            categories: [
                'lt.1',
                'lt.2',
                'lt.3',
                'lt.4',
                'lt.5',
                'Warehouse',
                'Garasi'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'kWh'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} kwh</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Lampu',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]

        }, {
            name: 'Server',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0]

        }, {
            name: 'Komputer',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0]

        }, {
            name: 'AC',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4]

        }]
    });

    //Fuel
    $('#fuelchart1').highcharts({

        chart: {
            type: 'variablepie'
        },
        
        title: {
            text: 'Countries compared by population density and total area.'
        },
        tooltip: {
            headerFormat: '',
            pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
                'Area (square km): <b>{point.y}</b><br/>' +
                'Population density (people per square km): <b>{point.z}</b><br/>'
        },
        series: [{
            minPointSize: 10,
            innerSize: '20%',
            zMin: 0,
            name: 'countries',
            data: [{
                name: 'Spain',
                y: 505370,
                z: 92.9
            }, {
                name: 'France',
                y: 551500,
                z: 118.7
            }, {
                name: 'Poland',
                y: 312685,
                z: 124.6
            }, {
                name: 'Czech Republic',
                y: 78867,
                z: 137.5
            }, {
                name: 'Italy',
                y: 301340,
                z: 201.8
            }, {
                name: 'Switzerland',
                y: 41277,
                z: 214.5
            }, {
                name: 'Germany',
                y: 357022,
                z: 235.6
            }]
        }]
    });



});
