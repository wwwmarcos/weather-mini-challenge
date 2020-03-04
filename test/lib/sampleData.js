const data = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1583290800,
      main: {
        temp: 293.67,
        feels_like: 295.8,
        temp_min: 291.64,
        temp_max: 293.67,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 952,
        humidity: 94,
        temp_kf: 2.03
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }
      ],
      clouds: {
        all: 32
      },
      wind: {
        speed: 1.92,
        deg: 146
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-03-04 03:00:00'
    },
    {
      dt: 1583301600,
      main: {
        temp: 291.82,
        feels_like: 293.79,
        temp_min: 290.3,
        temp_max: 291.82,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 952,
        humidity: 96,
        temp_kf: 1.52
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n'
        }
      ],
      clouds: {
        all: 16
      },
      wind: {
        speed: 1.19,
        deg: 143
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-03-04 06:00:00'
    },
    {
      dt: 1583312400,
      main: {
        temp: 290.79,
        feels_like: 292.35,
        temp_min: 289.77,
        temp_max: 290.79,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 951,
        humidity: 96,
        temp_kf: 1.02
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.17,
        deg: 145
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-03-04 09:00:00'
    },
    {
      dt: 1583323200,
      main: {
        temp: 296.28,
        feels_like: 299.56,
        temp_min: 295.77,
        temp_max: 296.28,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 953,
        humidity: 85,
        temp_kf: 0.51
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 0.91,
        deg: 116
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-03-04 12:00:00'
    },
    {
      dt: 1583334000,
      main: {
        temp: 298.88,
        feels_like: 302.43,
        temp_min: 298.88,
        temp_max: 298.88,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 952,
        humidity: 80,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 1
      },
      wind: {
        speed: 1.65,
        deg: 300
      },
      rain: {
        '3h': 0.69
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-03-04 15:00:00'
    },
    {
      dt: 1583344800,
      main: {
        temp: 299.15,
        feels_like: 302.81,
        temp_min: 299.15,
        temp_max: 299.15,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 951,
        humidity: 80,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 1
      },
      wind: {
        speed: 1.7,
        deg: 274
      },
      rain: {
        '3h': 1.94
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-03-04 18:00:00'
    },
    {
      dt: 1583355600,
      main: {
        temp: 296.21,
        feels_like: 299.59,
        temp_min: 296.21,
        temp_max: 296.21,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 950,
        humidity: 90,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.38,
        deg: 213
      },
      rain: {
        '3h': 1.75
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-03-04 21:00:00'
    },
    {
      dt: 1583366400,
      main: {
        temp: 293,
        feels_like: 295.06,
        temp_min: 293,
        temp_max: 293,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 952,
        humidity: 94,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 1
      },
      wind: {
        speed: 1.58,
        deg: 174
      },
      rain: {
        '3h': 0.25
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-03-05 00:00:00'
    },
    {
      dt: 1583377200,
      main: {
        temp: 292.12,
        feels_like: 293.98,
        temp_min: 292.12,
        temp_max: 292.12,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 953,
        humidity: 95,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.42,
        deg: 145
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-03-05 03:00:00'
    },
    {
      dt: 1583388000,
      main: {
        temp: 290.94,
        feels_like: 292.43,
        temp_min: 290.94,
        temp_max: 290.94,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 951,
        humidity: 96,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.36,
        deg: 150
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-03-05 06:00:00'
    },
    {
      dt: 1583398800,
      main: {
        temp: 290.15,
        feels_like: 291.57,
        temp_min: 290.15,
        temp_max: 290.15,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 952,
        humidity: 96,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.01,
        deg: 161
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-03-05 09:00:00'
    },
    {
      dt: 1583409600,
      main: {
        temp: 295,
        feels_like: 297.4,
        temp_min: 295,
        temp_max: 295,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 954,
        humidity: 87,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 2
      },
      wind: {
        speed: 1.58,
        deg: 122
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-03-05 12:00:00'
    },
    {
      dt: 1583420400,
      main: {
        temp: 301.96,
        feels_like: 306.05,
        temp_min: 301.96,
        temp_max: 301.96,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 953,
        humidity: 66,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 7
      },
      wind: {
        speed: 0.73,
        deg: 146
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-03-05 15:00:00'
    },
    {
      dt: 1583431200,
      main: {
        temp: 301.07,
        feels_like: 303.84,
        temp_min: 301.07,
        temp_max: 301.07,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 951,
        humidity: 65,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 5
      },
      wind: {
        speed: 1.82,
        deg: 205
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-03-05 18:00:00'
    },
    {
      dt: 1583442000,
      main: {
        temp: 296.58,
        feels_like: 299.61,
        temp_min: 296.58,
        temp_max: 296.58,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 950,
        humidity: 88,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.88,
        deg: 159
      },
      rain: {
        '3h': 0.88
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-03-05 21:00:00'
    },
    {
      dt: 1583452800,
      main: {
        temp: 293.19,
        feels_like: 295.18,
        temp_min: 293.19,
        temp_max: 293.19,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 952,
        humidity: 93,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.69,
        deg: 139
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-03-06 00:00:00'
    },
    {
      dt: 1583463600,
      main: {
        temp: 291.68,
        feels_like: 293.13,
        temp_min: 291.68,
        temp_max: 291.68,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 952,
        humidity: 95,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.75,
        deg: 146
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-03-06 03:00:00'
    },
    {
      dt: 1583474400,
      main: {
        temp: 290.54,
        feels_like: 291.55,
        temp_min: 290.54,
        temp_max: 290.54,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 951,
        humidity: 96,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.81,
        deg: 144
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-03-06 06:00:00'
    },
    {
      dt: 1583485200,
      main: {
        temp: 289.96,
        feels_like: 290.51,
        temp_min: 289.96,
        temp_max: 289.96,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 951,
        humidity: 96,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 1
      },
      wind: {
        speed: 2.15,
        deg: 137
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-03-06 09:00:00'
    },
    {
      dt: 1583496000,
      main: {
        temp: 295.2,
        feels_like: 296.16,
        temp_min: 295.2,
        temp_max: 295.2,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 953,
        humidity: 80,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 1
      },
      wind: {
        speed: 2.89,
        deg: 113
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-03-06 12:00:00'
    },
    {
      dt: 1583506800,
      main: {
        temp: 299.61,
        feels_like: 301.99,
        temp_min: 299.61,
        temp_max: 299.61,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 952,
        humidity: 69,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d'
        }
      ],
      clouds: {
        all: 16
      },
      wind: {
        speed: 2.09,
        deg: 118
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-03-06 15:00:00'
    },
    {
      dt: 1583517600,
      main: {
        temp: 299.79,
        feels_like: 302.44,
        temp_min: 299.79,
        temp_max: 299.79,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 949,
        humidity: 72,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 18
      },
      wind: {
        speed: 2.31,
        deg: 165
      },
      rain: {
        '3h': 0.75
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-03-06 18:00:00'
    },
    {
      dt: 1583528400,
      main: {
        temp: 296.77,
        feels_like: 299.82,
        temp_min: 296.77,
        temp_max: 296.77,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 948,
        humidity: 88,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.99,
        deg: 168
      },
      rain: {
        '3h': 0.5
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-03-06 21:00:00'
    },
    {
      dt: 1583539200,
      main: {
        temp: 293.18,
        feels_like: 294.86,
        temp_min: 293.18,
        temp_max: 293.18,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 950,
        humidity: 92,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 2.02,
        deg: 137
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-03-07 00:00:00'
    },
    {
      dt: 1583550000,
      main: {
        temp: 292.34,
        feels_like: 293.75,
        temp_min: 292.34,
        temp_max: 292.34,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 951,
        humidity: 94,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 83
      },
      wind: {
        speed: 2.1,
        deg: 153
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-03-07 03:00:00'
    },
    {
      dt: 1583560800,
      main: {
        temp: 291.17,
        feels_like: 292.02,
        temp_min: 291.17,
        temp_max: 291.17,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 949,
        humidity: 96,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 65
      },
      wind: {
        speed: 2.4,
        deg: 125
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-03-07 06:00:00'
    },
    {
      dt: 1583571600,
      main: {
        temp: 291.08,
        feels_like: 292.1,
        temp_min: 291.08,
        temp_max: 291.08,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 950,
        humidity: 96,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 1
      },
      wind: {
        speed: 2.1,
        deg: 135
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-03-07 09:00:00'
    },
    {
      dt: 1583582400,
      main: {
        temp: 296.22,
        feels_like: 298.22,
        temp_min: 296.22,
        temp_max: 296.22,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 951,
        humidity: 82,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 1
      },
      wind: {
        speed: 2.31,
        deg: 86
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-03-07 12:00:00'
    },
    {
      dt: 1583593200,
      main: {
        temp: 299.81,
        feels_like: 302.37,
        temp_min: 299.81,
        temp_max: 299.81,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 950,
        humidity: 70,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 30
      },
      wind: {
        speed: 2.13,
        deg: 46
      },
      rain: {
        '3h': 0.56
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-03-07 15:00:00'
    },
    {
      dt: 1583604000,
      main: {
        temp: 301.09,
        feels_like: 305.63,
        temp_min: 301.09,
        temp_max: 301.09,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 948,
        humidity: 71,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 23
      },
      wind: {
        speed: 0.37,
        deg: 155
      },
      rain: {
        '3h': 1.06
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-03-07 18:00:00'
    },
    {
      dt: 1583614800,
      main: {
        temp: 296.78,
        feels_like: 300.55,
        temp_min: 296.78,
        temp_max: 296.78,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 948,
        humidity: 88,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 6
      },
      wind: {
        speed: 0.97,
        deg: 148
      },
      rain: {
        '3h': 1.56
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-03-07 21:00:00'
    },
    {
      dt: 1583625600,
      main: {
        temp: 293.02,
        feels_like: 295.06,
        temp_min: 293.02,
        temp_max: 293.02,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 950,
        humidity: 92,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 3
      },
      wind: {
        speed: 1.4,
        deg: 100
      },
      rain: {
        '3h': 0.44
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-03-08 00:00:00'
    },
    {
      dt: 1583636400,
      main: {
        temp: 291.73,
        feels_like: 293.13,
        temp_min: 291.73,
        temp_max: 291.73,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 951,
        humidity: 94,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.75,
        deg: 92
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-03-08 03:00:00'
    },
    {
      dt: 1583647200,
      main: {
        temp: 291.03,
        feels_like: 292.36,
        temp_min: 291.03,
        temp_max: 291.03,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 950,
        humidity: 95,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.54,
        deg: 101
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-03-08 06:00:00'
    },
    {
      dt: 1583658000,
      main: {
        temp: 290.66,
        feels_like: 291.92,
        temp_min: 290.66,
        temp_max: 290.66,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 950,
        humidity: 95,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n'
        }
      ],
      clouds: {
        all: 18
      },
      wind: {
        speed: 1.43,
        deg: 103
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-03-08 09:00:00'
    },
    {
      dt: 1583668800,
      main: {
        temp: 295.73,
        feels_like: 297.87,
        temp_min: 295.73,
        temp_max: 295.73,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 952,
        humidity: 83,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d'
        }
      ],
      clouds: {
        all: 18
      },
      wind: {
        speed: 1.92,
        deg: 66
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-03-08 12:00:00'
    },
    {
      dt: 1583679600,
      main: {
        temp: 300.46,
        feels_like: 302.44,
        temp_min: 300.46,
        temp_max: 300.46,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 952,
        humidity: 63,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 2.2,
        deg: 38
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-03-08 15:00:00'
    },
    {
      dt: 1583690400,
      main: {
        temp: 301.14,
        feels_like: 304.03,
        temp_min: 301.14,
        temp_max: 301.14,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 949,
        humidity: 64,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d'
        }
      ],
      clouds: {
        all: 24
      },
      wind: {
        speed: 1.52,
        deg: 17
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-03-08 18:00:00'
    },
    {
      dt: 1583701200,
      main: {
        temp: 297.3,
        feels_like: 301.46,
        temp_min: 297.3,
        temp_max: 297.3,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 949,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 8
      },
      wind: {
        speed: 0.23,
        deg: 336
      },
      rain: {
        '3h': 0.88
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-03-08 21:00:00'
    },
    {
      dt: 1583712000,
      main: {
        temp: 293.77,
        feels_like: 296.2,
        temp_min: 293.77,
        temp_max: 293.77,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 951,
        humidity: 90,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 4
      },
      wind: {
        speed: 1.09,
        deg: 100
      },
      rain: {
        '3h': 0.13
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-03-09 00:00:00'
    }
  ],
  city: {
    id: 3451328,
    name: 'Ribeirão Preto',
    coord: {
      lat: -21.1775,
      lon: -47.8103
    },
    country: 'BR',
    population: 551267,
    timezone: -10800,
    sunrise: 1583226563,
    sunset: 1583271426
  }
}

module.exports = {
  data
}
