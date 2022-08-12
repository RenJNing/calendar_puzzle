import { Cell, CoordinatePair, Skeleton } from '@/utils/interfaces/CalendarInterface';
import logo from '@/assets/logo.png';
import slogan from '@/assets/slogan.png';
import styles from './Calendar.less';
import { PLACEHOLDER_SIGNATURE } from '@/utils';

const baseSkeleton: Skeleton = [
  ['', '一', '二', '三', '一月', '二月', '三月', '四月'],
  ['四', '五', '六', '日', '五月', '六月', '七月', '八月'],
  [1, 2, 3, 4, '九月', '十月', '十一月', '十二月'],
  [5, 6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31],
];

const isCellEqual = (skeleton: Skeleton, a: CoordinatePair, b: CoordinatePair) => {
  const [x1, y1] = a;
  const [x2, y2] = b;
  return skeleton?.[x1]?.[y1] === skeleton?.[x2]?.[y2];
};

const getBorderClassNames = (skeleton: Skeleton, x: number, y: number) => {
  const classNameList = [];
  if (!isCellEqual(skeleton, [x, y], [x - 1, y])) {
    classNameList.push(styles.borderTop);
  }
  if (!isCellEqual(skeleton, [x, y], [x + 1, y])) {
    classNameList.push(styles.borderBottom);
  }
  if (!isCellEqual(skeleton, [x, y], [x, y - 1])) {
    classNameList.push(styles.borderLeft);
  }
  if (!isCellEqual(skeleton, [x, y], [x, y + 1])) {
    classNameList.push(styles.borderRight);
  }
  return classNameList.join(' ');
};

interface CalendarProps {
  skeleton: Skeleton;
}

export default function Calendar({ skeleton }: CalendarProps) {
  const getCell = (cell: Cell, x: number, y: number) => {
    if (cell === PLACEHOLDER_SIGNATURE) {
      return <div className={styles.baseCell}>{baseSkeleton?.[x]?.[y]}</div>;
    }
    return <div className={`${styles.filledCell} ${getBorderClassNames(skeleton, x, y)}`}></div>;
  };
  return (
    <div className={styles.container}>
      {/* <div className={styles.sunken}> */}
      {skeleton.map((row, x) => {
        return (
          <div className={styles.blockRow}>
            {row.map((cell, y) => {
              return <div className={styles.blockCell}>{getCell(cell, x, y)}</div>;
            })}
          </div>
        );
      })}
      {/* </div> */}
      {/* <img className={styles.logo} src={logo} alt="logo" /> */}
      {/* <img className={styles.slogan} src={slogan} alt="slogan" /> */}
    </div>
  );
}
