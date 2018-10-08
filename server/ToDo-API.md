FORMAT: 1A
HOST: http://private-0e4345-d2phap.apiary-mock.com/

# ToDo API

ToDo is a simple API allowing users to create and manage tasks.

# ToDo API Root [/]

This resource does not have any attributes. Instead it offers the initial API affordances in the form of the links in the JSON body.

## Retrieve the Entry Point [GET]

+ Response 200 (application/json)

        {
            "task_url": "/tasks"
        }

## Group Task

Resources related to todo tasks in the API.

## Task List [/tasks]

### List All tasks [GET]

+ Response 200 (application/json)

        [
            {
                "id": 1538882607706,
                "text": "Buy toys for my niece",
                "isDone": true
            },
            {
                "id": 1538882614514,
                "text": "Rely John's email",
                "isDone": false
            }
        ]


### Create a New Task [POST]

You may create your own task using this action. It takes a JSON object containing a name of task.

+ taskName (required, string) - The todo task

+ Request (application/json)

        {
            "taskName": "Buy toys for my niece"
        }


+ Response 201 (application/json)

        {
            "id": 1538882607706,
            "text": "Buy toys for my niece",
            "isDone": false
        }



### Update a Task's Status [PUT /tasks/{id}]

You may update your task's status using this action. It takes a JSON object containing task's information.

+ id (required, number) - The task's id.
+ isDone (required, boolean) - The status of task that indicates the task is completed or not.

+ Request (application/json)

        {
            "isDone": true
        }

+ Response 204


### Delete a Task [DELETE /tasks/{id}]

You may delete your task using this action.

+ id (required, number) - The task's id.

+ Response 204
