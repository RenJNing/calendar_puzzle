const EMPTY_SIGNATURE = 0;

// 日历骨架
const calendarSkeleton = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  ['星期四', 0, 0, 0, 0, 0, 0, '八月'],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, '11号', 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0],
];

const block_list = [
  'block1',
  'block2',
  'block3',
  'block4',
  'block5',
  'block6',
  'block7',
  'block8',
  'block9',
  'block10',
  'block11',
];

// 判断某点可否插入
function isEmpty(skeleton, x, y) {
  if (x < 0 || y < 0) {
    return false;
  }
  return skeleton?.[x] && skeleton?.[x]?.[y] === EMPTY_SIGNATURE;
}

// 判断某区域可否插入
function canInsertArea(skeleton, area) {
  return !area?.find(([x, y]) => !isEmpty(skeleton, x, y));
}

// 插入
function insert(skeleton, area, signature = 999) {
  if (area.length <= 0) {
    return false;
  }
  // 插入区域
  if (canInsertArea(skeleton, area)) {
    area.forEach(([x, y]) => {
      skeleton[x][y] = signature;
    });
    return true;
  }
  return false;
}

function getBlock1Area(x, y, type) {
  switch (type) {
    // -
    // -
    // ---
    case 0:
      return [
        [x, y],
        [x + 1, y],
        [x + 2, y],
        [x + 2, y + 1],
        [x + 2, y + 2],
      ];
    //   -
    //   -
    // ---
    case 1:
      return [
        [x, y],
        [x + 1, y],
        [x + 2, y - 2],
        [x + 2, y - 1],
        [x + 2, y],
      ];
    // ---
    //   -
    //   -
    case 2:
      return [
        [x, y],
        [x, y + 1],
        [x, y + 2],
        [x + 1, y + 2],
        [x + 2, y + 2],
      ];
    // ---
    // -
    // -
    case 3:
      return [
        [x, y],
        [x, y + 1],
        [x, y + 2],
        [x + 1, y],
        [x + 2, y],
      ];
    default:
      return [];
  }
}

function getBlock2Area(x, y, type) {
  switch (type) {
    // ---
    //  -
    case 0:
      return [
        [x, y],
        [x, y + 1],
        [x, y + 2],
        [x + 1, y + 1],
      ];
    // -
    // --
    // -
    case 1:
      return [
        [x, y],
        [x + 1, y],
        [x + 1, y + 1],
        [x + 2, y],
      ];
    //  -
    // ---
    case 2:
      return [
        [x, y],
        [x + 1, y - 1],
        [x + 1, y],
        [x + 1, y + 1],
      ];
    //  -
    // --
    //  -
    case 3:
      return [
        [x, y],
        [x + 1, y - 1],
        [x + 1, y],
        [x + 2, y],
      ];
    default:
      return [];
  }
}

function getBlock3Area(x, y, type) {
  switch (type) {
    // ----
    //   -
    case 0:
      return [
        [x, y],
        [x, y + 1],
        [x, y + 2],
        [x + 1, y + 2],
        [x, y + 3],
      ];
    // ----
    //  -
    case 4:
      return [
        [x, y],
        [x, y + 1],
        [x + 1, y + 1],
        [x, y + 2],
        [x, y + 3],
      ];
    // -
    // --
    // -
    // -
    case 1:
      return [
        [x, y],
        [x + 1, y],
        [x + 1, y + 1],
        [x + 2, y],
        [x + 3, y],
      ];
    // -
    // -
    // --
    // -
    case 5:
      return [
        [x, y],
        [x + 1, y],
        [x + 1, y],
        [x + 2, y + 1],
        [x + 3, y],
      ];
    //  -
    // ----
    case 2:
      return [
        [x, y],
        [x + 1, y - 1],
        [x + 1, y],
        [x + 1, y + 1],
        [x + 1, y + 2],
      ];
    //   -
    // ----
    case 6:
      return [
        [x, y],
        [x + 1, y - 2],
        [x + 1, y - 1],
        [x + 1, y],
        [x + 1, y + 1],
      ];
    //  -
    //  -
    // --
    //  -
    case 3:
      return [
        [x, y],
        [x + 1, y],
        [x + 2, y],
        [x + 2, y - 1],
        [x + 3, y],
      ];
    //  -
    // --
    //  -
    //  -
    case 7:
      return [
        [x, y],
        [x + 1, y],
        [x + 1, y - 1],
        [x + 2, y],
        [x + 3, y],
      ];
    default:
      return [];
  }
}

function getBlock4Area(x, y, type) {
  switch (type) {
    // --
    // --
    case 0:
      return [
        [x, y],
        [x, y + 1],
        [x + 1, y],
        [x + 1, y + 1],
      ];
    default:
      return [];
  }
}

function getBlock5Area(x, y, type) {
  switch (type) {
    // ----
    case 0:
      return [
        [x, y],
        [x, y + 1],
        [x, y + 2],
        [x, y + 3],
      ];
    // -
    // -
    // -
    // -
    case 1:
      return [
        [x, y],
        [x + 1, y],
        [x + 2, y],
        [x + 3, y],
      ];
    default:
      return [];
  }
}

function getBlock6Area(x, y, type) {
  switch (type) {
    // --
    // ---
    case 0:
      return [
        [x, y],
        [x, y + 1],
        [x + 1, y],
        [x + 1, y + 1],
        [x + 1, y + 2],
      ];
    // ---
    // --
    case 4:
      return [
        [x, y],
        [x, y + 1],
        [x, y + 2],
        [x + 1, y],
        [x + 1, y + 1],
      ];
    // -
    // --
    // --
    case 1:
      return [
        [x, y],
        [x + 1, y],
        [x + 1, y + 1],
        [x + 2, y],
        [x + 2, y + 1],
      ];
    //  -
    // --
    // --
    case 5:
      return [
        [x, y],
        [x + 1, y - 1],
        [x + 1, y],
        [x + 2, y - 1],
        [x + 2, y],
      ];
    //  --
    // ---
    case 2:
      return [
        [x, y],
        [x, y + 1],
        [x + 1, y - 1],
        [x + 1, y],
        [x + 1, y + 1],
      ];
    // ---
    //  --
    case 6:
      return [
        [x, y],
        [x, y + 1],
        [x, y + 2],
        [x + 1, y + 1],
        [x + 1, y + 2],
      ];
    // --
    // --
    // -
    case 3:
      return [
        [x, y],
        [x, y + 1],
        [x + 1, y],
        [x + 1, y + 1],
        [x + 2, y],
      ];
    // --
    // --
    //  -
    case 7:
      return [
        [x, y],
        [x, y + 1],
        [x + 1, y],
        [x + 1, y + 1],
        [x + 2, y + 1],
      ];
    default:
      return [];
  }
}

function getBlock7Area(x, y, type) {
  switch (type) {
    // -
    // --
    case 0:
      return [
        [x, y],
        [x + 1, y],
        [x + 1, y + 1],
      ];
    //  -
    // --
    case 1:
      return [
        [x, y],
        [x + 1, y - 1],
        [x + 1, y],
      ];
    // --
    //  -
    case 2:
      return [
        [x, y],
        [x, y + 1],
        [x + 1, y + 1],
      ];
    // --
    // -
    case 3:
      return [
        [x, y],
        [x, y + 1],
        [x + 1, y],
      ];
    default:
      return [];
  }
}

function getBlock8Area(x, y, type) {
  switch (type) {
    // - -
    // ---
    case 0:
      return [
        [x, y],
        [x, y + 2],
        [x + 1, y],
        [x + 1, y + 1],
        [x + 1, y + 2],
      ];
    // --
    //  -
    // --
    case 1:
      return [
        [x, y],
        [x, y + 1],
        [x + 1, y + 1],
        [x + 2, y],
        [x + 2, y + 1],
      ];
    // ---
    // - -
    case 2:
      return [
        [x, y],
        [x, y + 1],
        [x, y + 2],
        [x + 1, y],
        [x + 1, y + 2],
      ];
    // --
    // -
    // --
    case 3:
      return [
        [x, y],
        [x, y + 1],
        [x + 1, y],
        [x + 2, y],
        [x + 2, y + 1],
      ];
    default:
      return [];
  }
}

function getBlock9Area(x, y, type) {
  switch (type) {
    // -
    // ----
    case 0:
      return [
        [x, y],
        [x + 1, y],
        [x + 1, y + 1],
        [x + 1, y + 2],
        [x + 1, y + 3],
      ];
    // -
    // -
    // -
    // --
    case 1:
      return [
        [x, y],
        [x + 1, y],
        [x + 2, y],
        [x + 3, y],
        [x + 3, y + 1],
      ];
    //  -
    //  -
    //  -
    // --
    case 2:
      return [
        [x, y],
        [x + 1, y],
        [x + 2, y],
        [x + 3, y],
        [x + 3, y - 1],
      ];
    // ----
    // -
    case 3:
      return [
        [x, y],
        [x, y + 1],
        [x, y + 2],
        [x, y + 3],
        [x + 1, y],
      ];
    // ----
    //    -
    case 4:
      return [
        [x, y],
        [x, y + 1],
        [x, y + 2],
        [x, y + 3],
        [x + 1, y + 3],
      ];
    //    -
    // ----
    case 5:
      return [
        [x, y],
        [x + 1, y - 3],
        [x + 1, y - 2],
        [x + 1, y - 1],
        [x + 1, y],
      ];
    // --
    // -
    // -
    // -
    case 6:
      return [
        [x, y],
        [x, y + 1],
        [x + 1, y],
        [x + 2, y],
        [x + 3, y],
      ];
    // --
    //  -
    //  -
    //  -
    case 7:
      return [
        [x, y],
        [x, y + 1],
        [x + 1, y + 1],
        [x + 2, y + 1],
        [x + 3, y + 1],
      ];
    default:
      return [];
  }
}

function getBlock10Area(x, y, type) {
  switch (type) {
    // -
    // ---
    case 0:
      return [
        [x, y],
        [x + 1, y],
        [x + 1, y + 1],
        [x + 1, y + 2],
      ];
    // -
    // -
    // --
    case 1:
      return [
        [x, y],
        [x + 1, y],
        [x + 2, y],
        [x + 2, y + 1],
      ];
    //  -
    //  -
    // --
    case 2:
      return [
        [x, y],
        [x + 1, y],
        [x + 2, y],
        [x + 2, y - 1],
      ];
    // ---
    // -
    case 3:
      return [
        [x, y],
        [x, y + 1],
        [x, y + 2],
        [x + 1, y],
      ];
    // ---
    //   -
    case 4:
      return [
        [x, y],
        [x, y + 1],
        [x, y + 2],
        [x + 1, y + 2],
      ];
    //   -
    // ---
    case 5:
      return [
        [x, y],
        [x + 1, y - 2],
        [x + 1, y - 1],
        [x + 1, y],
      ];
    // --
    // -
    // -
    case 6:
      return [
        [x, y],
        [x, y + 1],
        [x + 1, y],
        [x + 2, y],
      ];
    // --
    //  -
    //  -
    case 7:
      return [
        [x, y],
        [x, y + 1],
        [x + 1, y + 1],
        [x + 2, y + 1],
      ];
    default:
      return [];
  }
}

function getBlock11Area(x, y, type) {
  switch (type) {
    //  --
    // --
    case 0:
      return [
        [x, y],
        [x, y + 1],
        [x + 1, y - 1],
        [x + 1, y],
      ];
    // -
    // --
    //  -
    case 1:
      return [
        [x, y],
        [x + 1, y],
        [x + 1, y + 1],
        [x + 2, y + 1],
      ];
    // --
    //  --
    case 2:
      return [
        [x, y],
        [x, y + 1],
        [x + 1, y + 1],
        [x + 1, y + 2],
      ];
    //  -
    // --
    // -
    case 3:
      return [
        [x, y],
        [x + 1, y],
        [x + 1, y - 1],
        [x + 2, y - 1],
      ];
    default:
      return [];
  }
}

function addBlock(skeleton, blockArea, signature) {
  return insert(skeleton, blockArea, signature);
}

function clearSkeleton(skeleton, signature) {
  for (let i = 0; i < skeleton.length; i++) {
    const row = skeleton[i];
    for (let j = 0; j < row.length; j++) {
      const element = row[j];
      if (element === signature) {
        row[j] = EMPTY_SIGNATURE;
      }
    }
  }
}

const BLOCK_INSERT_MAP = {
  block1: getBlock1Area,
  block2: getBlock2Area,
  block3: getBlock3Area,
  block4: getBlock4Area,
  block5: getBlock5Area,
  block6: getBlock6Area,
  block7: getBlock7Area,
  block8: getBlock8Area,
  block9: getBlock9Area,
  block10: getBlock10Area,
  block11: getBlock11Area,
};

function cloneSkeleton(skeleton) {
  return skeleton.map((i) => [...i]);
}

function computeResult(skeleton, options, config) {
  const { isFindAll = false, results } = config;
  // 拼图使用完 - 成功
  if (options.length === 0) {
    // 若要找出所有解法，则返回false
    results.push(cloneSkeleton(skeleton));
    return true && !isFindAll;
  }
  for (let i = 0; i < skeleton.length; i++) {
    // 行
    const row = skeleton[i];
    for (let j = 0; j < row.length; j++) {
      const element = row[j];
      // 已填充
      if (element !== EMPTY_SIGNATURE) {
        continue;
      }
      // 未填充 - 挑选拼图
      for (let k = 0; k < options.length; k++) {
        const block = options[k];
        // 旋转类型 - 暂时最多为8种可能(暂不区分每个block)
        for (let l = 0; l < 8; l++) {
          // 获取所需区域
          const blockArea = BLOCK_INSERT_MAP[block](i, j, l);
          // 判断能否插入
          // 不能插入 - 继续下一种旋转类型/拼图类型
          if (addBlock(skeleton, blockArea, block)) {
            // 占据下一个空格
            const canFinish = computeResult(
              skeleton,
              options.filter((m) => m !== block),
              config
            );
            if (canFinish) {
              // 后续可完成 - 成功
              return true;
            } else {
              // 后续不可完成 - 回滚
              // 不能插入 - 继续下一种旋转类型/拼图类型
              clearSkeleton(skeleton, block);
              continue;
            }
          }
        }
      }
      // 拼图可选项试完了，仍为空
      if (row[j] === EMPTY_SIGNATURE) {
        return false;
      }
    }
  }
  return false;
}

export function computeResults(skeleton, options, isFindAll) {
  const results = [];
  computeResult(skeleton, options, {
    isFindAll,
    results,
  });
  return results;
}

console.log(computeResults(calendarSkeleton, block_list));
