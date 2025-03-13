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
        <div className="flex justify-between">
        <h2 className="text-xl font-bold text-green-600">{props.title}</h2>
        <img src="/assets/Close_modal.svg" alt="Close icon" onClick={props.onClose}/>
        </div>
        
        <p className="mt-2 text-gray-700">{props.message}</p>

        {/* Botão de fechar modal */}
      </div>
    </div>
  );
};

export default Modal;
