// 7.1
function getSumOfDirectories(data) {
  const sumSubFolderSize = (sum, subFolder) => {
    const size = subFolder.getSize();

    if (size <= 100000) {
      sum += size;
    }
    sum += subFolder.subFolders.reduce(sumSubFolderSize, 0);

    return sum;
  }
  console.log(_commandsToTreeNode(data).subFolders.reduce(sumSubFolderSize, 0));
}

// 7.2
function findDirToRemove(data) {
  const treeNode = _commandsToTreeNode(data);

  const DISC_SIZE = 70000000;
  const UPDATE_SIZE = 30000000;
  const OCCUPIED_SIZE = treeNode.getSize();
  const MIN_SPACE_TO_DELETE = Math.abs(DISC_SIZE - UPDATE_SIZE - OCCUPIED_SIZE);
  let min = OCCUPIED_SIZE;

  const getDirCloseToMin = (subFolder) => {
    const size = subFolder.getSize();

    if (size < min && size >= MIN_SPACE_TO_DELETE) {
      min = size;
      subFolder.subFolders.forEach(getDirCloseToMin);
    }
  };

  _commandsToTreeNode(data).subFolders.forEach(getDirCloseToMin);
  console.log(min);
}

class TreeNode {
  constructor(name, parent) {
    this.name = name;
    this.parent = parent;
    this.subFolders = [];
    this.size = 0;
  }

  getSize() {
    return this.size + this.subFolders.reduce(
        (sum, subFolder) => sum += subFolder.getSize(),
        0
    );
  }
}

function _commandsToTreeNode(data) {
  let currentDirectory;

  data.split('\n').forEach((line) => {
    if (line.includes('cd')) {
      // '$ cd '.length == 5
      const dirName = line.substring(5);

      if (dirName === '..') {
        currentDirectory = currentDirectory.parent;
      } else if (currentDirectory) {
        const treeNode = new TreeNode(dirName, currentDirectory);

        currentDirectory.subFolders.push(treeNode);
        currentDirectory = treeNode;
      } else {
        currentDirectory = new TreeNode(dirName);
      }
    }
    if (+line[0]) {
      currentDirectory.size += +line.split(' ')[0];
    }
  });

  // Get head of the tree
  while (currentDirectory.parent) {
    currentDirectory = currentDirectory.parent;
  }

  return currentDirectory;
}

module.exports = { getSumOfDirectories, findDirToRemove };
