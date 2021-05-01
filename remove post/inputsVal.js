let posts = [{ name: "ekram", text: "hello" }];

let render = function () {
  for (let i of posts) {
    let newItem = $(
      "<div><p class='item'>" + i.name + ":" + i.text + "</p></div>"
    );
    console.log(newItem);
    $("#add").append(newItem);
  }
};

$(".my-button").click(function () {
  let o = {
    name: $("#my-name").val(),
    text: $("#my-text").val(),
  };
  posts.push(o);
  $("#my-name").val("");
  $("#my-text").val("");
  $("#add").empty();
  render();
});

render();

$("#add").on("click", ".item", function () {
  let split = $(this).text().split(":");

  for (let i of posts) if (split[0] === i.name) posts.splice(i, 1);
  $(this).remove();
  $("#add").empty();
  render();
});
