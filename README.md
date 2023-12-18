# odin-todolist
Todo List

## Live
https://cyprianespi.github.io/odin-todolist/

## Design
https://www.figma.com/file/29VLm2SFpiC27O4hey41fe/Todolist?type=design&node-id=0%3A1&mode=design&t=AL4k87jXoEmTH3pX-1

## Code architecture

```mermaid
---
title: Classes for Database
---
classDiagram

    class Todo
    Todo : +String title
    Todo : +String content
    Todo : +Date dueDate
    Todo : +Int priority
    Todo : +Bool done

    class Project
    Project: +String title
    Project: +Todo[] todos

    class Db
    Db: +Todo UiTodo
    Db: +Project UiProject
    Db: +Project Notes
    Db: +Project[] Projects
```

```mermaid
---
title: Classes for DOM interaction with Database
---
classDiagram

    class TodoUi
    TodoUi : +Todo todo
    TodoUi : +HTMLDivElem uiX
    TodoUi : +CreateUiX()
    TodoUi : +UpdateUiX()

    class ProjectUi
    ProjectUi : +Project project
    ProjectUi : +HTMLDivElem uiX
    ProjectUi : +CreateUiX()
    ProjectUi : +UpdateUiX()
```