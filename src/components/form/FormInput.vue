<script setup>
import { computed } from "vue";
import { Field } from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    default: null,
  },
  autocomplete: {
    type: String,
    default: null,
  },
  maxlength: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
  inputmode: {
    type: String,
    default: null,
  },
  options: {
    type: Array,
    default: null,
  },
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object],
    default: "",
  },
  rows: {
    type: String,
    default: "",
  },
  schema: {
    type: Object,
    default: {},
  },
  errors: {
    type: Object,
    default: {},
  },
  required: Boolean,
  borderless: Boolean,
  transparent: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});

const selectable = computed(() => props.options);
const as = computed(() => {
  if (props.options) {
    return "select";
  } else if (props.type == "text" && props.rows != "") {
    return "textarea";
  }

  return null;
});
</script>

<template>
  <Field
    :type="!selectable && type !== 'textarea' ? type : null"
    :id="name"
    :name="name"
    :as="as"
    :rows="rows"
    :placeholder="placeholder"
    :class="[{ 'border-red-500': errors[name] }]"
    v-model="computedValue"
  >
    <template v-slot="options" v-if="selectable">
      <slot name="options" />
    </template>
  </Field>
  <span class="validation-error">{{ errors[name] }}</span>
</template>

<style scoped>
input,
select {
  box-sizing: border-box;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
}
.border-red-500 {
  border: 1px solid red;
}
.validation-error {
  color: red;
  font-size: 12px;
  margin-top: -6px;
}
input:focus,
select:focus {
  border-color: #3b82f6;
}
::placeholder {
  font-size: 12px;
}

input,
select,
select option {
  font-size: 12px;
}
</style>
