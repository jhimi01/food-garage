

const Button = ({children}) => {
    return (
        <div>
            <button className="px-5 py-3 font-bold bg-white hover:bg-opacity-0  border-2 text-black">{children}</button>
        </div>
    );
};

// Button.propTypes = {
//     children: PropTypes.any.isRequired,
//   };
  

export default Button;