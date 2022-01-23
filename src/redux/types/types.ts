export type Weather = {
  main: {
    temp: number; //температура
    feels_like: number; //ощущается
    pressure: string; // давление
  };
  weather: [
    {
      description: string; //влажность
      id: number;
      icon: string;
    }
  ];
  wind: {
    speed: number;
  }; //ветер
  name: string; //город
};

export type WeatherCards = {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
  };
  weather: [
    {
      main: string;
      description: string;
      icon: string;
    }
  ];
  wind: {
    speed: number;
  };
  dt_txt: string;
};

//------------------------------------------------
export interface WeatherType {
  id: number;
  main: string; // описание обстрактное
  description: string; // описание погоды
  icon: string; // иконка
}

export interface OneWeatherDayType {
  dt: number; // дата
  sunrise?: number; // восход
  sunset?: number; // закат
  moonrise?: number; // возход луны
  moonset?: number; // закат луны
  moon_phase?: number; // лунная фаза
  temp: {
    // температура
    day: number; // день
    min: number; // мин
    max: number; // макс
    night: number; // ночь
    eve?: number; // накануне
    morn: number; // утро
  };
  feels_like: {
    // по ощущениям
    day: number; // день
    night: number; // ночь
    eve?: number; // канун
    morn: number; // утро
  };
  pressure: number; // давление
  humidity: number; // влажность
  dew_point?: number; // точка росы
  wind_speed: number; // скорость ветра
  wind_deg?: number; // ветер градус
  wind_gust?: number; // порыв ветра
  weather: WeatherType[];
  clouds: number; // облака
  pop?: number;
  snow?: number;
  uvi?: number;
}

export type WeatherOllType = {
  lat?: number; // широта
  lon?: number; // долгота
  timezone: string; // час пояс
  timezone_offset?: number; // смещение час пояса
  current: {
    // текущий
    dt: number; // дата
    sunrise?: number; // восход
    sunset?: number; // закат
    temp: number; // температура
    feels_like: number; // ощущается
    pressure: number; // давление
    humidity: number; // влажность
    dew_point?: number; // точка россы
    uvi?: number;
    clouds: number; // облака
    visibility?: number; // видимость
    wind_speed: number; // скорость ветра
    wind_deg?: number; // градус ветра
    wind_gust?: number; // порыв ветра
    weather: WeatherType[];
  };
  daily: OneWeatherDayType[];
};

//==============================================

export interface Item {
  icon_id: string;
  name: string;
  value: string | number;
}
