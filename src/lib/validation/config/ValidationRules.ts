import json from "./validation_rules.json"

type TValidationRules = {
    minUsernameLength: number;
    maxUsernameLength: number;
    minPasswordLength: number;
    maxPasswordLength: number;
}

const validationRules: TValidationRules = json as TValidationRules;

export default validationRules;