import { validateNumber } from "@/utils/validators/numberField";
import { validateText } from "@/utils/validators/textField";

export const invalidResponseField = (required:boolean, value?: string) => {
  const validationResponse = validateText(value, {
    required,
    minLength: 3,
    maxLength: 50,
    messages: {
      required: "O campo não pode ficar vazio",
      minLength: "Mínimo 3 letras.",
      maxLength: "Máximo 50 letras.",
    },
  });
  return validationResponse;
};

export const invalidInputField = (required:boolean, value?: string) => {
  const validationResponse = validateText(value, {
    required,
    minLength: 3,
    maxLength: 100,
    messages: {
      required: "Input é obrigatório.",
      minLength: "Mínimo 3 letras.",
      maxLength: "Máximo 100 letras.",
    },
  });
  return validationResponse;
};

export const invalidOutputField = (required:boolean, value?: string) => {
  const validationResponse = validateText(value, {
    required,
    minLength: 3,
    maxLength: 100,
    messages: {
      required: "Output é obrigatório.",
      minLength: "Mínimo 3 letras.",
      maxLength: "Máximo 100 letras.",
    },
  });
  return validationResponse;
};

export const invalidLabelField = (required:boolean, value?: number) => {
  const validationResponse = validateNumber(value, {
    required,
    min: 1,
    max: 100,
    messages: {
      required: "O campo não pode estar vazio",
    },
  });
  return validationResponse;
};

export const invalidDataListValueField = (required:boolean, value?: string) => {
  const validationResponse = validateText(value, {
    required,
    minLength: 3,
    maxLength: 100,
    messages: {
      required: "O campo não pode estar vazio",
      minLength: "Mínimo 3 caracteres",
      maxLength: "Máximo 100 caracteres",
    },
  });
  return validationResponse;
};