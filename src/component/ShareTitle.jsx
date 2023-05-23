const ShareTitle = ({headig, subheading}) => {
    return (
        <div className="text-center">
            <h4 className="text-yellow-600 italic border-gray-300 ">---{subheading}---</h4>
            <h1 className="border-gray-300 text-4xl py-3 my-5 px-3 border-y-2 inline-block">{headig}</h1>
        </div>
    );
};

export default ShareTitle;