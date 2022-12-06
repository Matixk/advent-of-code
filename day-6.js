// 5.1
function findMarker1(data) {
  console.log(_findMarker(data, 4));
}

// 5.2
function findMarker2(data) {
  console.log(_findMarker(data, 14));
}

function _findMarker(data, bufferSize) {
  for (let i = 0; i < data.length; i = i + 1) {
    if (new Set(data.substring(i, i + bufferSize)).size === bufferSize) {
      return i + bufferSize;
    }
  }
}

module.exports = { first: findMarker1, sec: findMarker2 };
