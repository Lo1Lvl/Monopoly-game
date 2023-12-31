import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { useRecoilState } from "recoil";

import modalAtom from "@/common/recoil/modal";

import Portal from "../../portal/components/Portal";
import {
  bgAnimation,
  modalAnimation,
} from "../animations/ModalManager.animations";

const ModalManager = () => {
  const [{ opened, modal, closeCallback }, setModal] =
    useRecoilState(modalAtom);

  const [portalNode, setPortalNode] = useState<HTMLElement>();

  useEffect(() => {
    if (!portalNode) {
      const node = document.getElementById("portal");
      if (node) setPortalNode(node);
      return;
    }

    if (opened) {
      portalNode.style.pointerEvents = "all";
    } else {
      portalNode.style.pointerEvents = "none";
    }
  }, [opened, portalNode]);

  const handleClose = () => {
    setModal({
      modal: <></>,
      opened: false,
    });
    if (closeCallback) closeCallback();
  };

  return (
    <Portal>
      <motion.div
        className="z-40 flex min-h-full w-full items-center justify-center bg-black/20"
        onClick={handleClose}
        variants={bgAnimation}
        initial="closed"
        animate={opened ? "opened" : "closed"}>
        <AnimatePresence>
          {opened && (
            <motion.div
              variants={modalAnimation}
              initial="closed"
              animate="opened"
              exit="exited"
              onClick={(e) => e.stopPropagation()}
              className="relative flex w-full max-w-[20rem] flex-col items-center rounded-lg bg-zinc-900 p-6 sm:w-auto sm:min-w-[20rem] sm:max-w-none">
              <button
                className="absolute right-1 top-1 rounded-lg p-2 text-lg transition-transform hover:scale-105 active:scale-100"
                onClick={handleClose}>
                <AiOutlineClose />
              </button>

              {modal}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Portal>
  );
};

export default ModalManager;
