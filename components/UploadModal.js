import { modalState } from '../atom/modalAtom';
import { useRecoilState } from 'recoil';
import Modal from 'react-modal';

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <>
      <div>
        {open && (
          <Modal
            className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
            isOpen={open}
            onRequestClose={() => {
              setOpen(false);
              // setSelectedFile(null);
            }}
          >
            <h1 className="bg-white">This is the Modal</h1>
          </Modal>
        )}
      </div>
    </>
  );
}
