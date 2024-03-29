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
  disabled?: boolean;
  form?: {
    type?: 'input' | 'number' | 'textarea' | 'date' | 'select' | 'daterange';
    defaultValue?: string | number;
    placeholder?: string;
    options?: Array<{ label: string; value: string }>;
    disabled?: boolean;
    creator?: () => string | number;
    break?: boolean;
    renderer?: (value: string | number) => any;
    validator?: (value: string | number) => boolean;
    timerange?: {
      startPlaceholder?: string;
      endPlaceholder?: string;
    };
  };
}

export function createRenderFn(columnLabel: string, data: Ref<any[]>, editable?: boolean, disabled?: boolean) {
  return function render(row: InternalRowData, index: number) {
    return editable && !disabled
      ? h(ShowOrEdit, {
          value: row[columnLabel],
          onUpdateValue(v: any) {
            // eslint-disable-next-line no-param-reassign
            data.value[index][columnLabel] = v;
          }
        })
      : h('span', row[columnLabel]);
  };
}

export function createColumns(src: ColumnSrcItem[], data: Ref<any>, editable?: boolean) {
  return src.map(({ key, title, renderer, width, align, disabled }) => ({
    title,
    key,
    align: align || 'center',
    render: renderer || createRenderFn(key, data, editable, disabled),
    sorter: 'default',
    width
  })) as DataTableColumn[];
}
