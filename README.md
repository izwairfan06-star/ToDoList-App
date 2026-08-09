# To-Do List Application

A simple, interactive, and modern single-page To-Do List application built with React. This app allows users to manage daily tasks seamlessly with duplicate prevention, quick deletion, and task status toggling.

## Features

* **Add Tasks**: Easily insert new items into your list using the input form.
* **Duplicate & Blank Prevention**: Prevents adding empty whitespace or duplicate tasks.
* **Toggle Task Status**: Click directly on a task to mark or unmark it as completed.
* **Delete Tasks**: Remove individual items instantly by clicking the remove button (`×`).
* **Clean UI**: Form input automatically resets after successfully adding a task.
## How It Works
1. **Adding a Task**: 
   * When you submit the form, `savetodolist` runs `e.preventDefault()` to stop the page from reloading.
   * It trims unnecessary spaces from the input. If empty, an alert prompts you to enter a task.
   * If the item is unique, it updates the `todolist` array state using the spread operator (`[...todolist, toname]`) and resets the form.

2. **Toggling Completion**:
   * Each item is rendered using the `TodoListItem` component.
   * Clicking an item toggles its internal `status` state (boolean), applying or removing the `completetodo` CSS class for visual feedback.

3. **Deleting a Task**:
   * Clicking the `×` button triggers `deleterow`, which filters out the selected item by its index (`todolist.filter(...)`) and updates the parent component's state.

## Tech Stack
* **Frontend Framework**: React.js
* **Styling**: CSS / Custom Stylesheet (`App.css`)
* **State Management**: React `useState` Hook
<img width="960" height="421" alt="image" src="https://github.com/user-attachments/assets/b25074ba-8d37-4d0f-86e9-1184f068bb34" />
