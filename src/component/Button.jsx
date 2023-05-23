

const Button = ({children}) => {
    return (
        <div>
            <button className="px-5 py-3 font-bold bg-white hover:bg-opacity-0 hover:border-2 border-2 hover:text-white text-black">{children}</button>
        </div>
    );
};

// Button.propTypes = {
//     children: PropTypes.any.isRequired,
//   };
  

export default Button;