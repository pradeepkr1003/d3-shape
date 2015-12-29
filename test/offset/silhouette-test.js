var tape = require("tape"),
    shape = require("../../");

tape("offsetSilhouette(series, order) centers the stack around zero", function(test) {
  var series = [
    [[0, 1], [0, 2], [0, 1]],
    [[0, 3], [0, 4], [0, 2]],
    [[0, 5], [0, 2], [0, 4]]
  ];
  shape.offsetSilhouette(series, shape.orderNone(series));
  test.deepEqual(series, [
    [[0 - 9 / 2, 1 - 9 / 2], [0 - 8 / 2, 2 - 8 / 2], [0 - 7 / 2, 1 - 7 / 2]],
    [[1 - 9 / 2, 4 - 9 / 2], [2 - 8 / 2, 6 - 8 / 2], [1 - 7 / 2, 3 - 7 / 2]],
    [[4 - 9 / 2, 9 - 9 / 2], [6 - 8 / 2, 8 - 8 / 2], [3 - 7 / 2, 7 - 7 / 2]]
  ]);
  test.end();
});

tape("offsetSilhouette(series, order) observes the specified order", function(test) {
  var series = [
    [[0, 1], [0, 2], [0, 1]],
    [[0, 3], [0, 4], [0, 2]],
    [[0, 5], [0, 2], [0, 4]]
  ];
  shape.offsetSilhouette(series, shape.orderReverse(series));
  test.deepEqual(series, [
    [[8 - 9 / 2, 9 - 9 / 2], [6 - 8 / 2, 8 - 8 / 2], [6 - 7 / 2, 7 - 7 / 2]],
    [[5 - 9 / 2, 8 - 9 / 2], [2 - 8 / 2, 6 - 8 / 2], [4 - 7 / 2, 6 - 7 / 2]],
    [[0 - 9 / 2, 5 - 9 / 2], [0 - 8 / 2, 2 - 8 / 2], [0 - 7 / 2, 4 - 7 / 2]]
  ]);
  test.end();
});