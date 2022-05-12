import { formRules } from '@/utils';
import { FormInst, FormRules, NButton, NDatePicker, NForm, NFormItem, NInput, NInputNumber, NSelect, NSpace } from 'naive-ui';
import { defineComponent, type DefineComponent, reactive, ref, PropType } from 'vue';
import { ColumnSrcItem } from './creator';

export interface AddFormProps {
  columnSrcs: ColumnSrcItem[]
}

export default defineComponent({
  props: {
    columnSrcs: {
      type: Array as PropType<ColumnSrcItem[]>,
      required: true,
    }
  },
  setup(props) {
    const formRef = ref<(HTMLElement & FormInst) | null>(null);

    const model = reactive<any>({});
    const rules: FormRules = {}

    function handleSubmit(e: MouseEvent) {
      if (!formRef.value) return;
      e.preventDefault();

      formRef.value.validate(errors => {
        if (!errors) {
          window.$message?.success('Succeed!');
        } else {
          window.$message?.error('验证失败!');
        }
      });
    }

    for (const columnSrc of props.columnSrcs) {
      rules[columnSrc.key] = formRules.notBlank;
      if (columnSrc.defaultValue === undefined || columnSrc.defaultValue === null) {
        if (columnSrc?.form?.creator) {
          model[columnSrc.key] = columnSrc.form.creator();
        } else {
          if (columnSrc?.form?.type === 'number') {
            model[columnSrc.key] = 0;
          } else if (columnSrc?.form?.type === 'date') {
            model[columnSrc.key] = new Date().getTime();
          } else if (columnSrc?.form?.type === 'select') {
            model[columnSrc.key] = null
          } else {
            model[columnSrc.key] = '';
          }
        }
      } else {
        switch (columnSrc?.form?.type) {
          case 'number':
            model[columnSrc.key] = Number(columnSrc.defaultValue);
            break;
          case 'input':
            model[columnSrc.key] = String(columnSrc.defaultValue);
            break;
          case 'select':
            model[columnSrc.key] = columnSrc.defaultValue;
          default:
            model[columnSrc.key] = ''
            break;
        }
      }
    }

    function switchFormItem(colmunSrc: ColumnSrcItem, model: any) {
      if (colmunSrc?.form?.type) {
        switch (colmunSrc.form.type) {
          case 'input':
            return (<NInput value={model[colmunSrc.key]} placeholder={colmunSrc.form?.placeholder} />)
          case 'select':
            return (<NSelect value={model[colmunSrc.key]} options={colmunSrc.form?.options} placeholder={colmunSrc.form?.placeholder} />)
          case 'date':
            return (<NDatePicker value={model[colmunSrc.key]} placeholder={colmunSrc.form?.placeholder} />)
          case 'number':
            return (<NInputNumber value={model[colmunSrc.key]} placeholder={colmunSrc.form?.placeholder} validator={(v: number) => v > 0} />)
          case 'textarea':
            return (<NInput type="textarea" value={model[colmunSrc.key]} placeholder={colmunSrc.form?.placeholder} />)
          default:
            return (<NInput value={model[colmunSrc.key]} placeholder={colmunSrc.form?.placeholder} />)
        }
      } else {
        return (<NInput value={model[colmunSrc.key]} placeholder={colmunSrc.form?.placeholder} />)
      }
    }

    return () => {
      return (
        <NForm ref="formRef" model={model} rules={rules} size="large" showLabel={false} >
          {
            props.columnSrcs.map(columnSrc => {
              return (
                <NFormItem path={columnSrc.key} >
                  {
                    columnSrc?.form?.break ? null : switchFormItem(columnSrc, model)
                  }
                </NFormItem>
              )
            })
          }
          <NSpace vertical={true} size={18} >
            <NButton type="primary" size="large" block={true} onClick={handleSubmit}>确定</NButton>
          </NSpace>
        </NForm >
      )
    }
  }
}) as DefineComponent<AddFormProps>;
