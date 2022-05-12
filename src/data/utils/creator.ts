import { h, type Ref } from 'vue';
import { type DataTableColumn } from 'naive-ui';
import { type InternalRowData } from 'naive-ui/lib/data-table/src/interface';
import ShowOrEdit from './ShowOrEdit';

export interface ColumnSrcItem {
  key: string;
  title: string;
  renderer?: Function;
  width?: string;
  align?: string;
  defaultValue?: string | number;
  form?: {
    type: 'input' | 'number' | 'textarea' | 'date' | 'select';
    placeholder?: string;
    options?: Array<{ label: string; value: string }>;
    disabled?: boolean;
    creator?: () => string | number;
    break?: boolean;
  };
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
  return src.map(({ key, title, renderer, width, align }) => ({
    title,
    key,
    align: align || 'center',
    render: renderer || createRenderFn(key, data),
    sorter: 'default',
    width
  })) as DataTableColumn[];
}
