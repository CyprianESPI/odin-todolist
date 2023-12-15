# odin-todolist
Todo List

## Live
https://cyprianespi.github.io/odin-todolist/

## Design
https://www.figma.com/file/29VLm2SFpiC27O4hey41fe/Todolist?type=design&node-id=0%3A1&mode=design&t=AL4k87jXoEmTH3pX-1

## Code architecture

```mermaid
---
title: Classes
---
classDiagram
    Todo --|> Note : implements

    class Note
    Note : +String? title
    Note : +String content

    class Todo
    Todo : +Date dueDate
    Todo : +Int priority
    Todo : +Bool done

    class Project
    Project: +Todo[] todos
    Project: +Note[] notes
    Project: +Enum sortOrder
    Project: +sort(sortOrder)

    class Main
    Main: +Project[] projects
```
