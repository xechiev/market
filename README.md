# WebStoreCRM

Привет, поздравляю с переходом на этап учебного проекта!
На данном этапе мы будем учиться работать и коммуницировать в команде во время разработки ПО.

**Вы должны быть максимально самостоятельными или как минимум к этому стремиться!**

**По вторникам в 17:00 мск будет проходить регулярный созвон по проекту, чтобы синхронизовать нашу работу. В случае необходимости Лид может отменить этот созвон, если не будет видеть особой надобности.** - здесь будете рассказывать что вы сделали, с какими трудностями столкнулись и что планируете делать. Это "планёрка" чтобы все понимали куда движется проект. Рабочие моменты решаются в общем чате со _**всей**_ командой. Митинги нужны для синхронизации общей работы, а не выяснений и споров по коду.

Вам так же необходимо писать в frontend группу в дискорде каждый день отчёт о проделанной работе в формате:
1. Что делали (ссылку на карточку задачи) и сколько потратили время
2. Трудности (если решили, то пишем как в двух словах)

**Общайтесь с коллегами (в том числе и с бекенд-командой). Обсуждайте проблемы, делитесь опытом!**
**На проекте вы должны быть максимально самостоятельными и самодостаточной боевой единицей команды!**

Полезные ссылки:

Макет  - ...
Для первоначального ориентира будем использовать данный сайт https://themarket.io/

Документация по API (Swagger поддерживается командой бэкенда) - ...

Документация gitlab - https://docs.gitlab.com/ee/README.html

------------

### Немного о проекте
Проект - подобие всем известного Авито. Сайт по покупке, размещению товаров. Функции регистрации, авторизации, чат, список товаров, избранное и тд :)

### Стек технологий
- React
- Redux, Redux Toolkit (по необходимости)
- Typescript
- Formik + Yup
- CSS Modules + SCSS
* При необходимости и желании вы можете подключить какую-либо библиотеку в процессе выполнения какой-нибудь задачи. Главное, чтоб в проекте не было подключений однотипных библиотек, чтоб не засорять и нагружать проект.

Скорее всего, вы еще не работали с Redux Toolkit и Typescript.
Обязательно нужно изучить эти технологии:
- [Необходимый минимум по Redux Toolkit и Typescript](https://gitlab.com/rozalex.frontend/market/-/blob/main/USEFUL_MATERIALS.md)

### Как мы работаем
Мы используем GitLab в качестве системы управления версиями.

Код проекта тут - https://gitlab.com/rozalex.frontend/market

Кроме того, мы используем GitLab и для управления задачами. Для этого у нас есть доска задач - https://gitlab.com/rozalex.frontend/market/-/boards

- Колонка "Open" - общий список задач

- Колонка "To do" - задачи, которые закреплены за определенными разработчиками и поставлены в выполнение.

- Колонка "Doing" - задачи над которыми в данный момент кто-то работает

- Колонка "Need Review" - задачи выполненые, но ожидают ревью.

- Колонка "Paused" - задачи на паузе по тем или иным причинам невозможности выполнить в данный момент времени.

- Колонка "Closed" - задачи выполненые и прошедшие ревью.

Если есть необходимость в реализации функционала или исправление работы уже существующего на стороне сервера - опишите суть и как видите работу со стороны клиент, и отправьте это в чат бекенд-команде ... . Вопросы, которые касаются бекенда, адресуем так же в чат бекенд-команде.

Для того, чтобы начать работать, необходимо:

1. Найти назначенную задачу на доске задач.
Открытая задача должна находиться в колонке To do и не иметь Assignee (Assignee - исполнитель).
2. Добавиться в Assignee задачи
3. Перенести задачу в колонку "Doing"
4. Зайти в задачу и найти кнопку "Create merge request".
Нажать стрелочку справа от этой кнопки и выбрать пункт "Create merge request and branch".
Выбрать название для ветки и нажать "Create merge request".
5. Переключиться на эту ветку локально и начать разработку
6. Выполнить задачу, запушить изменения в созданную ветку,
   зайти в ранее созданный Merge Request и нажать кнопку Mark as ready в его шапке
7. Перенести задачу в колонку "Need Review"
8. Написать об этом в общий чат и запросить ревью коллеги
9. Ожидать проверки MR, параллельно работая над другими задачами. После проверки внести правки

После того, как всё будет исправлено, ваш MR будет вмержен в main, а задача перенесена в "Closed"

Не забывайте часто коммитить и пушить в процессе разработки, чтобы не потерять свои изменения.

Задача должна пройти ревью одного из членов команды и ревью лида. Кидайте в общий чат ссылку на карточку, которая требует ревью и сообщение о том, что задача ожидает ревью.

При проведении ревью - делитесь опытом и давайте советы коллеге, от вас не требуется "забраковать" задачу.

После того, как всё будет исправлено, ваш MR будет вмержен в main, а задача перенесена в "Closed"

Если задачу по какой-то причине невозможно выполнить, перенесите ее в колонку "Paused"
и **обязательно** напишите комментарий к задаче в карточке, в котором объясните причину, по которой
задача оказалась в этой колонке.

Если есть понимание того, чего не хватает на клиенте и по этой задаче нет карточки на доске - уведомите об этом лида и, при необходимости, создайте карточку сами.

### Работа с git

Мы используем [git-flow](https://nvie.com/posts/a-successful-git-branching-model/).
Отводим ветку от `main`, решаем задачу, кидаем Merge Request в main.

### Как коммитить в репозиторий?

[Атомарно](https://sashasushko.tumblr.com/post/174690191358/good-commit).

Один коммит - одно изменение.

Один Merge Request - одна задача.

Это два строгих правила, избегая которые можно превратить разработку в хаос.

Ветку создаём с префиксом номера карточки задачи (если создаёте через кнопку "Create merge request and branch" - префикс уже будет вписан заранее).

Пример: для задачи "#123 - добавить кнопку логина" ветка будет примерно следующая `123-add-login-button`

Где `123-` - это префикс номера карточки

Коммиты пишем так же с префиксом и в повелительном наклонении (что сделать)

Пример: `SP-123: Add login button for registration form`

Где `SP` - это префикс проекта

`123` - префикс задачи

Полезные ссылки по работе в команде:

- https://www.conventionalcommits.org/en/v1.0.0/#summary
- https://chris.beams.io/posts/git-commit/
- https://www.atlassian.com/ru/git/tutorials/comparing-workflows/gitflow-workflow

### Структура проекта

1. Папка /app cодержит App компонент и его конфигурационные файлы.

2. Папка /assets содержит:
   - /images - изображения
   - /fonts - шрифты
   - /icons - иконки
   - любые другие данные, необходимые для проекта, но не являющиеся кодом


3. /types - глобальные модели. Все не глобальные модели должны храниться
в месте их применения - в компоненте, в сервисе и т.д.

4. /typings - d.ts файлы для типизирования JS библиотек/модулей, которые не имеют
собственных тайпингов. Прежде чем описывать такой тип, попытайтесь
установить тайпинг через npm i @types/название_библиотеки

5. /utils - вспомогательные функции, которые можно использовать по всему
проекту. Не глобальные функции необходимо хранить в месте применения

6. /hooks - хуки, которые можно использовать по всему проекту.
Не глобальные хуки необходимо хранить в месте применения

8. /components - глобальные переиспользуемые частички приложения.
Не глобальные компоненты необходимо хранить в месте применения.

   Для каждого компонента создается папка с его названием в kebab-case (my-components). Код
   компонента описывается в файле c названием в PascalCase (MyComponents.tsx), который находится внутри этой папки.

   Эта папка может содержать стили, специфические для компонента хуки, вспомогательные
   функции и т.д.

9. /pages - компоненты-страницы

10. /services - полезные сервисы

11. /styles - глобальные стили и переменные