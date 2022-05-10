import { h, Ref } from 'vue';
import { type DataTableColumn } from 'naive-ui';
import { InternalRowData } from 'naive-ui/lib/data-table/src/interface';
import ShowOrEdit from './ShowOrEdit';

export interface ColumnSrcItem {
  key: string;
  title: string;
  renderer?: Function;
}

export function createRenderFn(columnLabel: string, data: Ref<any[]>, valueRenderer?: Function) {
  return function render(row: InternalRowData, index: number) {
    return h(ShowOrEdit, {
      value: valueRenderer || row[columnLabel],
      onUpdateValue(v: any) {
        // eslint-disable-next-line no-param-reassign
        data.value[index][columnLabel] = v;
      }
    });
  };
}

export function createColumns(src: ColumnSrcItem[], data: Ref<any>) {
  return src.map(({ key, title, renderer }) => ({
    title,
    key,
    align: 'center',
    render: renderer || createRenderFn(key, data)
  })) as DataTableColumn[];
}
