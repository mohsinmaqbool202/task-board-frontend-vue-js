<script setup>
import { computed } from 'vue'
import { Field } from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    default: null
  },
  id: {
    type: String,
    default: null
  },
  autocomplete: {
    type: String,
    default: null
  },
  maxlength: {
    type: String,
    default: null
  },
  placeholder: {
    type: String,
    default: null
  },
  inputmode: {
    type: String,
    default: null
  },
  options: {
    type: Array,
    default: null
  },
  type: {
    type: String,
    default: 'text'
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object],
    default: ''
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
})

const emit = defineEmits(['update:modelValue'])

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  }
})

const inputElClass = computed(() => {
  const base = [
    'px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full',
    'dark:placeholder-gray-400',
    computedType.value === 'textarea' ? 'h-24' : 'h-12',
    props.borderless ? 'border-0' : 'border',
    props.transparent ? 'bg-transparent' : 'bg-white dark:bg-slate-800'
  ]

  return base
})

const selectable = computed(() => props.options)
const as = computed(() => {
  if (props.options) {
    return "select";
  }
  else if (props.type == 'text' && props.rows != "") {
    return "textarea";
  }

  return null;
})

const computedType = computed(() => (props.options ? 'select' : props.type))
const controlIconH = computed(() => (props.type === 'textarea' ? 'h-full' : 'h-12'))
</script>

<template>
  <div class="relative">
    <Field
      :type="!selectable && type !== 'textarea' ? type : null"
      :id="name"
      :name="name"
      :as="as"
      :rows="rows"
      :placeholder="placeholder"
      :class="[{'border-red-500' : errors[name]}]"
      v-model="computedValue"
    >
      <template v-slot="options" v-if="selectable">
        <slot name="options" />
      </template>
    </Field>
    <span class="text-red-500">{{ errors[name] }}</span>
  </div>
</template>

<style scoped>
input {
    padding: 0.75rem;
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
.text-red-500 {
    color: red;
    font-size: 12px;
}
input:focus {
    border-color: #3b82f6;
}
</style>
