import { validateText } from "@/utils/validators/textField";

export const invalidUsername = (required:boolean, value?: string) => {
  const validationResponse = validateText(value, {
    required,
    minLength: 3,
    maxLength: 30,
    messages: {
      required: "[Nome] não pode ficar vazio",
      minLength: "O [nome] precisa ter no mínimo 3 letras.",
      maxLength: "O [nome] precisa ter no máximo 100 letras.",
    },
  });
  return validationResponse;
};

export const invalidPassword = (required:boolean, value?: string) => {
  const validationResponse = validateText(value, {
    required,
    minLength: 8,
    maxLength: 100,
    messages: {
      required: "[Senha] não pode ficar vazia",
      minLength: "A [senha] precisa ter no mínimo 8 letras.",
      maxLength: "A [senha] precisa ter no máximo 100 letras.",
    },
  });
  return validationResponse;
};

export const invalidRepassword = (required:boolean, value?: string) => {
  const validationResponse = validateText(value, {
    required,
    minLength: 8,
    maxLength: 100,
    messages: {
      required: "[Repetição de Senha] não pode ficar vazia",
      minLength: "A [Repetição de Senha] precisa ter no mínimo 8 letras.",
      maxLength: "A [Repetição de Senha] precisa ter no máximo 100 letras.",
    },
  });
  return validationResponse;
};