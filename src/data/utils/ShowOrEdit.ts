import { defineComponent, ref, nextTick, h, DefineComponent } from 'vue';
import { NInput } from 'naive-ui';

export default defineComponent({
  props: {
    value: [String, Number, Function],
    onUpdateValue: Function,
    editable: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const isEdit = ref(false);
    const inputRef = ref<HTMLInputElement | null>(null);
    const inputValue = ref(props.value);
    function handleOnClick() {
      isEdit.value = true;
      nextTick(() => {
        inputRef.value?.focus();
      });
    }
    function handleChange() {
      if (props.onUpdateValue) {
        props.onUpdateValue(inputValue.value);
      }
      isEdit.value = false;
    }
    return () =>
      h(
        'div',
        {
          onClick: handleOnClick
        },
        isEdit.value
          ? h(NInput, {
              ref: inputRef,
              value: inputValue.value,
              onUpdateValue: v => {
                inputValue.value = v;
              },
              onChange: handleChange,
              onBlur: handleChange,
              disabled: !props.editable
            })
          : props.value
      );
  }
}) as DefineComponent;
