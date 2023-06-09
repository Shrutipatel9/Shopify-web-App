import { InputLabel,Input,Group } from "./form-input.style"; 

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <InputLabel shrink={otherProps.value.length} >
          {label}
        </InputLabel>
      )}
    </Group>
  );
};

export default FormInput;