# Redux Garage 🚗
Проект на **React + Vite + Redux Toolkit Query (RTK Query)**, который загружает и отображает посты с сайта [JSONPlaceholder](https://jsonplaceholder.typicode.com/).


Приложение позволяет:
- Получать **все посты**;
- Получать **один пост** по ID;
- **Предзагружать** данные при наведении (prefetch);
- Использовать **автоматическое обновление** данных;
- Отключать обновление, когда вкладка неактивна.

- 
## 🛠️ Технологии

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

- № Пример базовой настройки:
// services/postsApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
    }),
    getPostsById: builder.query({
      query: (id) => `posts/${id}`,
    }),
  }),
});


🔗 GitHub Pages
export const { useGetPostsQuery, useGetPostsByIdQuery, usePrefetch } = postsApi;

## (https://romanbarinov84.github.io/RTKQuery-List-posts/)

📸 Скриншоты
![Снимок экрана (5)](https://github.com/user-attachments/assets/4da89697-ee49-487e-be16-a38f9b254f70)


📚 Чему научился
Подключать и использовать RTK Query;

Настраивать polling и prefetch;

Делать запросы и отображать данные;

Работать с GitHub Pages и деплоем через gh-pages.
