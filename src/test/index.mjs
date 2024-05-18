import assert from "assert";
import { create, findAll, findOne, update, del } from "../services/todo.mjs";
import { describe } from "mocha";

let todo_id = false;

describe("React Database", () => {
  describe("#createTodo()", () => {
    it("create a todo list item", async () => {
      const args = {
        name: "buy proceries",
      };

      const res = await create(args);
      const new_todo = await findOne(res.id);

      todo_id = res.id;

      assert.equal(new_todo.name, args.name);
    });
  });

  describe("#updateTodo()", () => {
    it("Update a todo list item", async () => {
      const new_args = {
        name: "do homework",
      };

      const res = await update({
        id: todo_id,
        ...new_args,
      });

      const new_todo = await findOne(todo_id);
      assert.equal(new_todo.name, new_args.name);
    });
  });

  describe("#findAllTodo()", () => {
    it("get all todo list items", async () => {
      const res = await findAll();

      assert.equal(res.length, 1);
      assert.equal(res[0].name, "do homework");
    });
  });

  describe("#deleteTodo()", () => {
    it("delete a todo list item", async () => {
      await del(todo_id);
    });
  });
});
