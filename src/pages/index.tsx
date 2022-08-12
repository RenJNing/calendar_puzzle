import { computeResults, PLACEHOLDER_SIGNATURE } from '@/utils';
import Calendar from '@/components/Calendar';

// 日历骨架
const calendarSkeleton = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, PLACEHOLDER_SIGNATURE, 0, 0, 0, 0, 0, PLACEHOLDER_SIGNATURE],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, PLACEHOLDER_SIGNATURE],
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

const results = computeResults(calendarSkeleton, block_list, false);

export default function HomePage() {
  return (
    <div>
      <div>
        {results.map((r) => {
          return <Calendar skeleton={r} />;
        })}
      </div>
    </div>
  );
}
