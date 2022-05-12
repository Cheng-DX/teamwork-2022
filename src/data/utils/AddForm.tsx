import { formRules } from '@/utils';
import { FormInst, FormRules, NButton, NDatePicker, NForm, NFormItem, NInput, NInputNumber, NSelect, NSpace } from 'naive-ui';
import { defineComponent, type DefineComponent, reactive, ref, PropType } from 'vue';
import { ColumnSrcItem } from './creator';

export interface AddFormProps {
  columnSrcs: ColumnSrcItem[]
}

export function createIdTag(content: string) {
  return (
    <>
      <NButton type="primary" round secondary size="medium">{content}</NButton>
      <div class="w-18px"></div>
    </>
  )
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
      rules[columnSrc.key] = columnSrc?.form?.type === 'number' ? formRules.biggerThenZeroInt : formRules.notBlank;
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
            break;
          default:
            model[columnSrc.key] = ''
            break;
        }
      }
    }

    function switchFormItem(colmunSrc: ColumnSrcItem, model: any) {
      const placeholder = colmunSrc?.form?.placeholder || `请输入${colmunSrc.title}`;
      const disabled = colmunSrc?.form?.disabled || false;
      if (colmunSrc.form?.renderer) {
        return colmunSrc.form.renderer(model[colmunSrc.key]);
      } else {
        if (colmunSrc?.form?.type) {
          switch (colmunSrc.form.type) {
            case 'input': {
              if (colmunSrc.key === 'id') {
                return (
                  <div class="flex-y-center w-full">
                    {createIdTag(colmunSrc.title)}
                    <NInput v-model:value={model[colmunSrc.key]} placeholder={placeholder} disabled={disabled} class='w-full' />
                  </div>
                )
              } else {
                return <NInput v-model:value={model[colmunSrc.key]} placeholder={placeholder} disabled={disabled} class='w-full' />
              }
            }
            case 'select':
              return (<NSelect v-model:value={model[colmunSrc.key]} options={colmunSrc.form?.options} placeholder={placeholder} disabled={disabled} class='w-full' />)
            case 'date':
              return (<NDatePicker v-model:value={model[colmunSrc.key]} placeholder={placeholder} disabled={disabled} class='w-full' />)
            case 'number':
              return (<NInputNumber v-model:value={model[colmunSrc.key]} placeholder={placeholder} validator={(v: number) => v > 0} disabled={disabled} class='w-full' />)
            case 'textarea':
              return (<NInput type="textarea" v-model:value={model[colmunSrc.key]} placeholder={placeholder} disabled={disabled} class='w-full' />)
            default:
              return (<NInput v-model:value={model[colmunSrc.key]} placeholder={placeholder} disabled={disabled} class='w-full' />)
          }
        } else {
          return (<NInput v-model:value={model[colmunSrc.key]} placeholder={placeholder} disabled={disabled} class='w-full' />)
        }
      }
    }

    return () => {
      return (
        <NForm ref={formRef} model={model} rules={rules} size="large" showLabel={false} >
          {
            props.columnSrcs.map(columnSrc => {
              return (
                columnSrc?.form?.break ? null : (
                  <NFormItem path={columnSrc.key} class="w-full" >
                    {
                      switchFormItem(columnSrc, model)
                    }
                  </NFormItem>)
              )
            })
          }
          <NSpace vertical={true} size={18} >
            <NButton type="primary" round size="large" block={true} onClick={handleSubmit}>确定</NButton>
          </NSpace>
        </NForm >
      )
    }
  }
}) as DefineComponent<AddFormProps>;
