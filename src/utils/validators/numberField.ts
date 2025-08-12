type ValidateNumberOptions = {
  min?: number;
  max: number;
  required?: boolean;
  messages?: {
    required?: string;
    invalid?: string;
    min?: string;
    max?: string;
  };
};

export function validateNumber(
  value: string | number | null | undefined,
  {
    min,
    max,
    required = false,
    messages = {},
  }: ValidateNumberOptions
): string | null {

  const {
    required: requiredMsg = "Campo obrigatório.",
    invalid = "Valor inválido.",
    min: minMsg,
    max: maxMsg,
  } = messages;

  const isEmpty =
    value === null ||
    value === undefined ||
    (typeof value === "string" && value.trim() === "");

  if (required && isEmpty) return requiredMsg;
  if (isEmpty) return null;

  let numeric: number;

  if (typeof value === "string") {
    const cleaned = value
      .replace(/[^\d,.]/g, "") 
      .replace(/\./g, "")
      .replace(",", "."); 
    numeric = Number(cleaned)/100;
  } else {
    numeric = value;
  }

  if (isNaN(numeric)) return invalid;
  if (min !== undefined && numeric < min) return minMsg || `O valor mínimo é ${min}.`;
  if (numeric > max) return maxMsg || `O valor máximo é ${max}.`;

  return null;
}