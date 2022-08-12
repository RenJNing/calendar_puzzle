export type Cell = number | string;

type RowType1 = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];

type RowType2 = [Cell, Cell, Cell];

export type Skeleton = [RowType1, RowType1, RowType1, RowType1, RowType1, RowType1, RowType2];

// 坐标对
export type CoordinatePair = [number, number];
