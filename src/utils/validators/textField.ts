type ValidateTextOptions = {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  messages?: {
    required?: string;
    minLength?: string;
    maxLength?: string;
  };
};

export function validateText(
  value: string | null | undefined,
  {
    required = false,
    minLength,
    maxLength,
    messages = {},
  }: ValidateTextOptions = {}
): string | null {
  const {
    required: requiredMsg = "Campo obrigatório.",
    minLength: minMsg,
    maxLength: maxMsg,
  } = messages;

  const trimmed = value?.trim() ?? "";

  if (required && trimmed === "") return requiredMsg;
  if (minLength !== undefined && trimmed.length < minLength)
    return minMsg || `Mínimo de ${minLength} caracteres.`;
  if (maxLength !== undefined && trimmed.length > maxLength)
    return maxMsg || `Máximo de ${maxLength} caracteres.`;

  return null;
}