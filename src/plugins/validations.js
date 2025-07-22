import { defineRule } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";

defineRule("required", (value) => {
  if (required(value)) {
    return true;
  }

  return "This field is required";
});

defineRule("email", (value) => {
  if (email(value) && required(value)) {
    return true;
  }

  return "A valid email address is required.";
});

defineRule("confirmed", (value, [target], ctx) => {
  if (value === ctx.form[target]) {
      return true;
  }
  return "Passwords must match.";
});

defineRule('min', (value, [limit], ctx) => {
  if (!value || !value.length) {
    return true;
  }
  if (value.length < limit) {
    return `The ${ctx.field} must be at least ${limit} characters`;
  }
  return true;
});
