import {Modal, ModalContent, ModalBody, Button, useDisclosure} from "@nextui-org/react";

export const ModalImg = ({keyImg, img}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className="my-auto flex py-1 justify-center max-sm:w-full w-1/2 lg:w-1/3 drop-shadow-md">
      <Button onPress={onOpen}>
        <div key={keyImg} className="justify-center p-3 overflow-hidden flex my-auto">
          <img src={img} className="drop-shadow-md object-cover opacity-90 hover:opacity-100 cursor-pointer" />
        </div>
      </Button>
      <Modal isOpen={isOpen} size="3xl" onOpenChange={onOpenChange}>
        <ModalContent className="m-auto max-sm:pb-[30%]">
          {(onClose) => (
            <>
              <ModalBody>
                <img src={img} className="" />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
