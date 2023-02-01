window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_element = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      // check for empty input
      alert("Please fill out the task before submitting!");
      return;
    }

    // Time to recreate a task element just like the one in index.html
    const task_element = document.createElement("div");
    task_element.classList.add("task"); // classList is used to add or remove a class name from an element

    // Create the content div
    const task_content_element = document.createElement("div");
    task_content_element.classList.add("content");
    task_element.appendChild(task_content_element);

    // Create the input
    const task_input_element = document.createElement("input");
    task_input_element.type = "text";
    task_input_element.classList.add("text");
    task_input_element.value = task;
    task_input_element.setAttribute("readonly", "readonly");
    task_content_element.appendChild(task_input_element);

    // Create the actions div
    const task_actions_element = document.createElement("div");
    task_actions_element.classList.add("actions");
    task_element.appendChild(task_actions_element);

    // Create edit button
    const task_edit_element = document.createElement("button");
    task_edit_element.classList.add("edit");
    task_edit_element.innerHTML = "Edit";
    task_actions_element.appendChild(task_edit_element);

    // Create delete button
    const task_delete_element = document.createElement("button");
    task_delete_element.classList.add("delete");
    task_delete_element.innerHTML = "Delete";
    task_actions_element.appendChild(task_delete_element);

    // Add the full task to the tasks div
    list_element.appendChild(task_element);

    input.value = "";

    // Add event listener to edit element
    task_edit_element.addEventListener("click", () => {
      if (task_edit_element.innerText == "EDIT") {
        task_input_element.removeAttribute("readonly");
        task_input_element.focus();
        task_edit_element.innerText = "Save";
      } else {
        task_input_element.setAttribute("readonly", "readonly");
        task_edit_element.innerText = "Edit";
      }
    });

    // Add event listener to delete element
    task_delete_element.addEventListener("click", () => {
      list_element.removeChild(task_element);
    });
  });
});
