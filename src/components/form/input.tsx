interface PropsType {
  type: string;
  placeHolder: string;
}

const InputComponent = ({ type, placeHolder }: PropsType) => {
  return (
    <fieldset className="border-px1 border-neutral-300 p-1 rounded-md">
      <legend className="px-2 mx-2 text-neutral-500">UserName</legend>
      <input
        type={type}
        placeholder={placeHolder}
        className="text-black/70 w-full p-2 focus:outline-none"
      />
    </fieldset>
  );
};

export default InputComponent;
