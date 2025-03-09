interface PropsModal {
  isOpen: boolean;
  onClose?: () => void;
  title: string;
  message: string;
}

const Modal = (props: PropsModal) => {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
        <h2 className="text-xl font-bold text-green-600">{props.title}</h2>
        <p className="mt-2 text-gray-700">{props.message}</p>

        {/* Botão de fechar modal */}
        <button
          onClick={props.onClose}
          className="absolute top-2 right-2 bg-gray-200 text-gray-600 p-2 rounded-full hover:bg-gray-300"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
