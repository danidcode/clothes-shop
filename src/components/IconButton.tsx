type Props = {
    icon: React.ReactNode
    onClick: () => void
    additionalClasses?: string
}

const IconButton = ({ icon, onClick, additionalClasses }: Props) => {
    return (
        <button onClick={onClick} className={`bg-transparent transition duration-300 ease-in-out
         hover:bg-gray-200 p-2 rounded-full inline-flex items-center justify-center w-10 h-10 ${additionalClasses}`}   >
            {icon}
        </button>
    );
};

export default IconButton;