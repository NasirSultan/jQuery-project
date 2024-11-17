$(document).ready(function() {
    // Add a task when the "Add Task" button is clicked
    $('#addTaskButton').click(function() {
        const taskText = $('#taskInput').val();
        if (taskText.trim() !== "") {
            addTask(taskText);
            $('#taskInput').val('');
        }
    });

    // Function to add a task with slide and fade-in effect
    function addTask(taskText) {
        const taskItem = $('<li class="task-item"></li>');
        taskItem.html(`
            <span class="task-text">${taskText}</span>
            <button class="completeTask">Complete</button>
            <button class="deleteTask">Delete</button>
        `);

        // Add task with a combination of fade and slide effect
        taskItem.hide().appendTo('#taskList').slideDown(400).fadeIn(400);

        // Mark task as completed with bounce effect
        taskItem.find('.completeTask').click(function() {
            const taskTextElem = $(this).parent().find('.task-text');
            taskTextElem.toggleClass('task-completed');

            // Add a bounce effect when task is marked as complete
            taskTextElem.effect('bounce', { times: 2, distance: 10 }, 300);
        });

        // Delete task with fade-out and slide-up effect
        taskItem.find('.deleteTask').click(function() {
            $(this).parent().fadeOut(300, function() {
                $(this).slideUp(300, function() {
                    $(this).remove();
                });
            });
        });
    }

    // Add task on pressing Enter key
    $('#taskInput').keypress(function(e) {
        if (e.which === 13) {
            $('#addTaskButton').click();
        }
    });
});
