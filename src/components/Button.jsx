// eslint-disable-next-line react/prop-types
const Button = ({ styles }) => (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] ease-in-out duration-200  hover:text-white ${styles}`}>
        Get Started
    </button>
);

export default Button;
