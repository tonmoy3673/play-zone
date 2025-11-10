/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
const Switch = ({
  name = "",
  value = false,
  onChange,
  disabled = false,
}: {
  name?: string;
  value: boolean;
  onChange?: any;
  disabled?: boolean;
}) => {
  return (
    <label
      className={`cursor-pointer ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => {
          onChange && onChange(e);
        }} // Disable onChange if disabled
        className="hidden"
        name={name}
        disabled={disabled} // Disable the input if disabled
      />
      <div
        style={
          value
            ? {
                borderRadius: "50px",
                background:
                  "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
              }
            : { borderRadius: "50px", backgroundColor: "#784ef81a" }
        }
        className={`${
          value ? "bg-green-500" : "bg-[#f0f0f0]"
        } relative h-[31px] w-[52px] rounded-full border border-[#e5eaf2] px-[0.150rem] py-[0.15rem] transition-colors duration-500 ${
          disabled ? "" : ""
        }`}
      >
        <div
          className={`${
            value ? "translate-x-[21px]" : "translate-x-[0px]"
          } h-[25px] w-[25px] rounded-full bg-[#fff]  transition-all duration-500`}
          style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
        ></div>
      </div>
    </label>
  );
};

export default Switch;
